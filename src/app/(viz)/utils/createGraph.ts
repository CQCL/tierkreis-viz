import { Graph, OutputStream } from "@/grpcjs/proto/v1alpha/graph_pb";
import { TypeErrors } from "@/grpcjs/proto/v1alpha/signature_pb";
import { parseEdge } from "./parseEdge";
import { parseValue } from "./parseValue";
const assertNonNullable = <T extends unknown>(x: T) => {
  return x as NonNullable<T>;
};

export const createGraph = (props: {
  graph: Graph;
  outputStream?: OutputStream;
  typeErrors?: TypeErrors;
}) => {
  const nodes = props.graph.getNodesList().map((n, idx) => {
    const getNodeData = () => {
      if (n.hasBox()) {
        return {
          type: "box" as const,
          value: n.getBox(),
        };
      }
      if (n.hasConst()) {
        return {
          type: "const" as const,
          value: (() => {
            const Const = n.getConst();
            if (Const) {
              return parseValue(Const);
            }
          })(),
        };
      }
      if (n.hasFunction()) {
        const fn = assertNonNullable(n.getFunction());
        return {
          type: "function" as const,
          value: {
            name: fn.getName(),
            namespaceList: fn.getNamespacesList(),
          },
        };
      }
      if (n.hasInput()) {
        return {
          type: "input" as const,
        };
      }
      if (n.hasMatch()) {
        return {
          type: "match" as const,
        };
      }
      if (n.hasOutput()) {
        return {
          type: "output" as const,
        };
      }
      if (n.hasTag()) {
        const tag = n.getTag();
        return {
          type: "tag" as const,
          value: tag,
        };
      }
    };

    return {
      id: String(idx),
      meta: getNodeData(),
    };
  });
  const edges = props.graph.getEdgesList().map(parseEdge);

  // Add ports to nodes based on edge info.
  const nodesv2 = nodes.map((node) => {
    const edgesIn = edges.filter((e) => e.nodeTo === node.id);
    const edgeOut = edges.filter((e) => e.nodeFrom === node.id);
    return {
      ...node,
      portsIn: edgesIn.map((edge) => {
        return {
          id: edge.portTo,
          rawEdge: edge,
        };
      }),
      portsOut: edgeOut.map((edge) => {
        return {
          id: edge.portFrom,
          rawEdge: edge,
        };
      }),
    };
  });

  const streamList = props.outputStream
    ? props.outputStream.getStreamList().map((i) => {
        const Const = i.getValue();
        const edge = i.getEdge();
        return {
          value: Const ? parseValue(Const) : undefined,
          edge: edge ? parseEdge(edge) : undefined,
        };
      })
    : undefined;

  const edgesv2 = edges.map((edge) => {
    const data = streamList?.find((i) => i.edge?.id === edge.id);
    return {
      ...edge,
      runtimeInfo: data ? { hasData: true, data } : { hasData: false },
    };
  });

  const nodesv3 = nodesv2.map((node) => {
    const inputs = edgesv2.filter((e) => e.nodeTo === node.id);
    const outputs = edgesv2.filter((e) => e.nodeFrom === node.id);
    const hasInputs = inputs.length > 0;
    const inputsComplete = inputs.every((e) => e.runtimeInfo?.hasData);
    const outputsComplete = outputs.every((e) => e.runtimeInfo?.hasData);
    const runtimeStatus = (() => {
      if (streamList == undefined || streamList?.length === 0)
        return "IDLE" as const;
      if (hasInputs && inputsComplete) {
        if (outputsComplete) {
          return "COMPLETE" as const;
        }
        return "RUNNING" as const;
      }
      return "IDLE" as const;
    })();

    return {
      ...node,
      runtimeStatus,
    };
  });

  // TYPE INFO

  const nodesv4 = nodesv3.map((node) => {
    const error = props.typeErrors?.getErrorsList().find((error) => {
      return error
        .getLocationList()
        .some(
          (i) => String(i.getNodeIdx()) === node.id && i.getRoot() === undefined
        );
    });
    const getError = () => {
      if (error?.hasVariant()) {
        return {
          status: "ERROR" as const,
          errorData: (() => {
            const variant = assertNonNullable(error.getVariant());
            if (variant.hasBound()) {
              const found = error.toObject().variant?.bound;
              const expected = error.toObject().variant?.bound;
              return {
                type: "bound" as const,
                message: `Expected ${expected}. Found: ${found}`,
              };
            }
            if (variant.hasKind()) {
              const found = error.toObject().variant?.kind;
              const expected = error.toObject().variant?.kind;
              return {
                type: "kind" as const,
                message: `Expected ${expected}. Found ${found}`,
              };
            }
            if (variant.hasUnify()) {
              return {
                type: "unify" as const,
                message: (() => {
                  const found = error.toObject().variant?.unify?.found;
                  const expected = error.toObject().variant?.unify?.expected;
                  if (found && expected) {
                    return `Found: ${JSON.stringify(
                      found,
                      null,
                      2
                    )}. Expected ${JSON.stringify(expected, null, 2)}`;
                  }
                  return undefined;
                })(),
              };
            }
            if (variant.hasUnknownFunction()) {
              const name = error.toObject().variant?.unknownFunction?.name;
              const namespaceList =
                error.toObject().variant?.unknownFunction?.namespacesList;
              return {
                type: "unknown_function" as const,
                message: `Name: ${name}. NamespaceList: ${namespaceList?.join(
                  ","
                )}`,
              };
            }
            if (variant.hasUnknownTypeVar()) {
              return {
                type: "unknown_type_var" as const,
                message: JSON.stringify(
                  error.toObject().variant?.unknownTypeVar,
                  null,
                  2
                ),
              };
            }
          })(),
        };
      }
      return {
        status: "OK" as const,
      };
    };
    return {
      ...node,
      typecheck: getError(),
    };
  });

  return {
    nodes: nodesv4,
    edges: edgesv2,
    name: props.graph.getName(),
  };
};
