import { Edge } from "@/grpcjs/proto/v1alpha/graph_pb";
import { parseType } from "./parseType";

export const parseEdge = (edge: Edge) => {
  const nodeFrom = String(edge.getNodeFrom());
  const nodeTo = String(edge.getNodeTo());
  const portTo = edge.getPortTo();
  const portFrom = edge.getPortFrom();
  const edgeType = edge.getEdgeType();
  return {
    nodeFrom,
    nodeTo,
    portTo,
    portFrom,
    id: `${nodeFrom}${nodeTo}${portFrom}${portTo}`,
    edgeType: edgeType ? parseType(edgeType) : undefined,
  };
};
