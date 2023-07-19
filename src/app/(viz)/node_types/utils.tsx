"use client";
import { Box, Typography } from "@mui/material";
import { Handle, Position } from "reactflow";
import { useTheme } from "tierkreis-ui/src";
import { RFNode } from "../utils/createRFGraph";

export const InputHandleArray = ({
  handles,
  hideValues,
}: {
  handles: RFNode["data"]["portsIn"];
  hideValues?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 1,
        ml: -0.5,
      }}
    >
      {handles.map(({ id }) => {
        return (
          <Box
            key={id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifySelf: "start",
              gap: 0.5,
            }}
          >
            <Handle
              type="target"
              id={id.toString()}
              position={Position.Left}
              style={{
                position: "initial",
                transform: "initial",
                height: "0.875rem",
                width: "0.875rem",
                border: "none",
                background: theme.palette.text.disabled,
              }}
            />
            {hideValues ? null : (
              <Typography variant="body1" sx={{ ml: 0.5 }}>
                {id}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
export const OutputHandleArray = ({
  handles,
  hideValues,
}: {
  handles: RFNode["data"]["portsOut"];
  hideValues?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: 3,
        mr: -0.5,
      }}
    >
      {handles.map(({ id }) => {
        return (
          <Box
            key={id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifySelf: "end",
              gap: 0.5,
            }}
          >
            {hideValues ? null : (
              <Typography variant="body1" sx={{ ml: 0.5 }}>
                {id}
              </Typography>
            )}
            <Handle
              type="source"
              key={id}
              id={id.toString()}
              className="relative"
              position={Position.Right}
              style={{
                position: "initial",
                transform: "initial",

                height: "0.875rem",
                width: "0.875rem",
                border: "none",
                background: theme.palette.text.disabled,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};
export type Status = "RUNNING" | "IDLE" | "ERROR" | "COMPLETE" | "ACTIVE";
export const StatusIcon = (props: { status: Status }) => {
  const colorMap: {
    [key in (typeof props)["status"]]: {
      bgColor: string;
      borderColor: string;
      animate: boolean;
    };
  } = {
    COMPLETE: {
      bgColor: "bg-green-500",
      borderColor: "border-green-600",
      animate: false,
    },
    ERROR: {
      bgColor: "bg-red-500",
      borderColor: "border-red-600",
      animate: false,
    },
    IDLE: {
      bgColor: "bg-zinc-500",
      borderColor: "border-zinc-600",
      animate: false,
    },
    RUNNING: {
      bgColor: "bg-amber-500",
      borderColor: "border-amber-600",
      animate: true,
    },
    ACTIVE: {
      bgColor: "bg-sky-500",
      borderColor: "border-sky-600",
      animate: false,
    },
  };
  return (
    <Box className="relative w-5 flex items-center justify-center">
      <Box
        className={`${colorMap[props.status].bgColor} ${
          colorMap[props.status].borderColor
        }  border-2  w-3 h-3 rounded-full absolute`}
      ></Box>
      <Box
        className={`${colorMap[props.status].bgColor} ${
          colorMap[props.status].animate ? "animate-ping" : ""
        }  w-3 h-3 rounded-full absolute mb-px  `}
      ></Box>
    </Box>
  );
};
