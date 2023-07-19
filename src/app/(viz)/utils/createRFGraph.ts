import { MarkerType } from "reactflow";
import { createGraph } from "./createGraph";

export type RFNode = ReturnType<typeof createRFGraph>["RFNodes"][number];
export type RFEdge = ReturnType<typeof createRFGraph>["RFEdges"][number];
export const createRFGraph = (props: {
  graph: ReturnType<typeof createGraph>;
  nodePositions: { x: number; y: number }[];
}) => {
  const RFEdges = props.graph.edges.map((edge) => {
    return {
      data: {
        ...edge,
        label: edge.id,
      },
      ...(edge.runtimeInfo.hasData
        ? { style: { strokeOpacity: 0.8 } }
        : {
            style: { strokeDasharray: "5, 5", strokeOpacity: 0.65 },
          }),
      id: edge.id,
      type: "CustomEdge",
      sourceHandle: edge.portFrom,
      targetHandle: edge.portTo,
      source: edge.nodeFrom,
      target: edge.nodeTo,
      markerEnd: {
        type: MarkerType.Arrow,
      },
    };
  });
  const RFNodes = props.graph.nodes.map((node, idx) => {
    return {
      data: node,
      id: node.id,
      // parentNode: node.parentNode,
      height: 300,
      width: 200,
      position: props.nodePositions[idx],
      type: "CustomNode",
    };
  });

  return { RFEdges, RFNodes };
};
