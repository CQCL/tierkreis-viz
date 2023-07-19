import { Type } from "@/grpcjs/proto/v1alpha/graph_pb";

export const parseType = (type: Type) => {
  if (type?.hasBool()) {
    return {
      type: "boolean" as const,
    };
  }
  if (type?.hasFlt()) {
    return {
      type: "float" as const,
    };
  }
  if (type?.hasInt()) {
    return {
      type: "integer" as const,
    };
  }
  if (type?.hasGraph()) {
    return {
      type: "graph" as const,
    };
  }

  if (type?.hasMap()) {
    return {
      type: "map" as const,
    };
  }
  if (type?.hasPair()) {
    return {
      type: "pair" as const,
    };
  }
  if (type?.hasRow()) {
    return {
      type: "row" as const,
    };
  }
  if (type?.hasStr()) {
    return {
      type: "str" as const,
    };
  }
  if (type?.hasStruct()) {
    return {
      type: "struct" as const,
    };
  }
  if (type?.hasVariant()) {
    return {
      type: "variant" as const,
    };
  }
  if (type?.hasVec()) {
    return {
      type: "vec" as const,
    };
  }
  return undefined;
};
