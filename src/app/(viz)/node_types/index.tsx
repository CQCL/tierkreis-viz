import styled from "@emotion/styled";
import { Close, FullscreenOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Tooltip,
  TooltipProps,
  Typography,
  tooltipClasses,
} from "@mui/material";
import React, { ComponentProps } from "react";
import { createPortal } from "react-dom";
import { NodeProps, useUpdateNodeInternals } from "reactflow";
import { Status, capitalize } from "tierkreis-ui/src";
import { z } from "zod";
import CircuitRenderer from "../CircuitRenderer";
import { ReactFlowGraph } from "../ReactFlow";
import { createGraph } from "../utils/createGraph";
import { RFNode } from "../utils/createRFGraph";
import { InputHandleArray, OutputHandleArray } from "./utils";

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

export const CustomNode = (props: NodeProps<RFNode["data"]>) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    updateNodeInternals(props.id);
  }, [props, updateNodeInternals]);

  const data = (() => {
    const to = document.getElementById("flow-entry");
    if (props.data.meta?.type === "box") {
      const graphName = props.data.meta.value?.getGraph()?.getName();
      const graph = props.data.meta.value?.getGraph();
      return {
        title: `Box ${graphName ? `- ${graphName}` : ""}`,
        children: (
          <Box className="resize">
            <Button
              variant={isOpen ? "contained" : "outlined"}
              onClick={() => setIsOpen(!isOpen)}
              sx={{ mx: 0.5, width: "7rem" }}
              startIcon={
                isOpen ? (
                  <Close></Close>
                ) : (
                  <FullscreenOutlined></FullscreenOutlined>
                )
              }
            >
              {isOpen ? "Close" : "Open"}
            </Button>

            {to && isOpen && graph
              ? createPortal(
                  <ReactFlowGraph
                    {...createGraph({
                      graph,
                    })}
                  />,

                  to
                )
              : null}
          </Box>
        ),
      };
    }
    if (props.data.meta?.type === "input") {
      return {
        title: `Input`,
      };
    }
    if (props.data.meta?.type === "match") {
      return {
        title: `Match`,
      };
    }
    if (props.data.meta?.type === "output") {
      return {
        title: `Output`,
      };
    }
    if (props.data.meta?.type === "const") {
      return {
        title: `Constant - ${capitalize(props.data.meta.value?.type ?? "")}`,
        children: props.data.meta.value?.stringValue,
      };
    }
    if (props.data.meta?.type === "function") {
      return {
        title: `Function`,
        children: props.data?.meta.value.name,
      };
    }
    if (props.data.meta?.type === "tag") {
      return {
        title: `Tag`,
        children: props.data.meta.value,
      };
    }
  })();
  const status = props.data.runtimeStatus;
  type Colors = NonNullable<ComponentProps<typeof Status>["color"]>;
  const colorMap: {
    [k in NonNullable<(typeof props)["data"]["runtimeStatus"]>]: Colors;
  } = {
    COMPLETE: "success",
    IDLE: "info",
    RUNNING: "warning",
  };

  const children = (() => {
    const idata = data?.children;
    try {
      if (typeof idata === "string") {
        const x = JSON.stringify(JSON.parse(idata), null, 2);
        return x;
      }
      return idata;
    } catch (err) {
      return idata;
    }
  })();

  const tooltipContent = (() => {
    const circuitSchema = z.object({
      bits: z.any(),
      commands: z.any(),
    });

    if (typeof children === "string") {
      try {
        if (circuitSchema.safeParse(JSON.parse(children)).success) {
          return (
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                minWidth: "30rem",
                alignItems: "center",
                height: 700,
                resize: "vertical",
              }}
            >
              <CircuitRenderer circuitDefinition={JSON.parse(children)} />
            </Box>
          );
        }
      } catch {
        return children;
      }

      return children;
    }
    return null;
  })();

  const node = (
    <Paper
      sx={{
        minWidth: 250,
        borderRadius: 2,
        borderWidth: "2px",
        filter: `drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))`,
        borderColor:
          props.data.typecheck.status === "ERROR"
            ? "error.main"
            : "border.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          pt: 1,
          pb: 0.5,
          px: 1,
          alignItems: "center",
          bgcolor: `${colorMap[status]}.light`,
        }}
      >
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{ ml: 1, color: "white" }}
        >
          {data?.title}
        </Typography>
      </Box>
      {status === "RUNNING" ? (
        <LinearProgress color="warning" />
      ) : (
        <Box sx={{ height: "4px", bgcolor: "border.main", width: "100%" }} />
      )}

      <Box
        sx={{
          display: "flex",
          py: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InputHandleArray handles={props.data.portsIn} />
        <NoMaxWidthTooltip
          disableHoverListener={typeof children !== "string"}
          placement="right"
          title={
            <Box
              sx={{
                whiteSpace: "pre",
                maxHeight: "60vh",
                overflowY: "auto",
              }}
            >
              {tooltipContent}
            </Box>
          }
        >
          <Box
            sx={{
              px: 0,
              maxWidth: "9rem",
              maxHeight: "10rem",

              textOverflow: "ellipsis",
            }}
          >
            {typeof children === "string" ? (
              <Typography textOverflow="ellipsis" noWrap>
                {children}
              </Typography>
            ) : (
              children
            )}
          </Box>
        </NoMaxWidthTooltip>
        <OutputHandleArray handles={props.data.portsOut} />
      </Box>
    </Paper>
  );

  return props.data.typecheck.status === "ERROR" ? (
    <Tooltip
      arrow
      PopperProps={{
        sx: {
          maxWidth: "none",
        },
      }}
      placement="left"
      title={
        <Box sx={{ maxHeight: "95vh", overflowY: "auto" }}>
          <Typography
            variant="caption"
            sx={{ color: "red", textTransform: "uppercase" }}
          >
            {props.data.typecheck.errorData?.type} Error
          </Typography>
          <Box sx={{ width: "30rem", whiteSpace: "pre" }}>
            {props.data.typecheck.errorData?.message}
          </Box>
        </Box>
      }
    >
      {node}
    </Tooltip>
  ) : (
    node
  );
};
