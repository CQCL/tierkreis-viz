import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { EdgeProps, getBezierPath } from "reactflow";
import { RFEdge } from "../utils/createRFGraph";
export const CustomEdge = (props: EdgeProps<RFEdge["data"]>) => {
  const [edgePath, labelX, labelY] = getBezierPath(props);
  const hasData = props.data?.runtimeInfo.hasData ?? false;
  return (
    <>
      <Box
        component="path"
        id={props.id}
        sx={{ bgcolor: "background.default", zIndex: 50 }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={props.markerEnd}
        style={props.style}
      />

      <foreignObject
        width={5 * 16}
        height={3 * 16}
        style={{ overflow: "visible" }}
        x={labelX - 2.5 * 16}
        y={labelY - 1.5 * 16}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <Tooltip
          arrow
          title={
            hasData && (
              <Box>
                <Box
                  component="pre"
                  sx={{ bgcolor: "background.default", p: 1 }}
                >
                  {props.data?.runtimeInfo.data?.value?.stringValue}
                </Box>
              </Box>
            )
          }
          disableInteractive={!props.data?.runtimeInfo.hasData}
        >
          <>
            {props.data?.edgeType?.type ? (
              <Paper
                sx={{
                  borderWidth: "2px",
                  marginBottom: "-2px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  px: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ select: "none", mb: "1px" }}
                >
                  {props.data?.edgeType.type}
                </Typography>
              </Paper>
            ) : null}
            {props.data?.runtimeInfo.hasData ? (
              <Paper
                sx={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  whiteSpace: "nowrap",
                  cursor: "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: "2px",
                  p: 1,
                  width: "5rem",
                  height: "3rem",
                }}
              >
                <Typography
                  noWrap
                  sx={{ bcolor: "border.main", textOverflow: "ellipsis" }}
                >
                  {props.data.runtimeInfo.data?.value?.stringValue}
                </Typography>
              </Paper>
            ) : null}
          </>
        </Tooltip>
      </foreignObject>
    </>
  );
};
