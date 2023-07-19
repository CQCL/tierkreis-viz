import dagre from "dagre";
import { createGraph } from "./createGraph";

export const calculateNodePositions = (
  graph: ReturnType<typeof createGraph>
) => {
  const nodeWidth = 300;
  const nodeHeight = 200;
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: "LR" });
  graph.nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });
  graph.edges.forEach((edge) => {
    dagreGraph.setEdge(edge.nodeFrom, edge.nodeTo);
  });

  dagre.layout(dagreGraph);
  return graph.nodes.map((node) => {
    const { x, y } = dagreGraph.node(node.id);
    return {
      id: node.id,
      x: x - nodeWidth / 2,
      y: y - nodeHeight / 2,
    };
  });
};
