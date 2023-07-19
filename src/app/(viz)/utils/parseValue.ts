import {
  Graph,
  MapValue,
  PairValue,
  StructValue,
  Value,
  VariantValue,
} from "@/grpcjs/proto/v1alpha/graph_pb";
const assertNonNullable = <T extends unknown>(x: T) => {
  return x as NonNullable<T>;
};

type ReturnType =
  | { type: "boolean"; value: boolean; stringValue: string }
  | { type: "float"; value: number; stringValue: string }
  | { type: "graph"; value: Graph; stringValue: string }
  | { type: "integer"; value: number; stringValue: string }
  | { type: "map"; value: MapValue; stringValue: string }
  | { type: "pair"; value: PairValue; stringValue: string }
  | { type: "str"; value: string; stringValue: string }
  | { type: "struct"; value: StructValue; stringValue: string }
  | { type: "variant"; value: VariantValue; stringValue: string }
  | {
      type: "vec";
      value: ReturnType[];
      stringValue: string;
    }
  | undefined;

export const parseValue = (value: Value): ReturnType => {
  if (value.hasBoolean()) {
    return {
      type: "boolean" as const,
      value: value.getBoolean(),
      stringValue: value.getBoolean() ? "True" : "False",
    };
  }
  if (value.hasFlt()) {
    return {
      type: "float" as const,
      value: value.getFlt(),
      stringValue: value.getFlt().toString(),
    };
  }
  if (value.hasGraph()) {
    return {
      type: "graph" as const,
      value: assertNonNullable(value.getGraph()),
      stringValue: value.getGraph()?.getName() || "",
    };
  }
  if (value.hasInteger()) {
    return {
      type: "integer" as const,
      value: value.getInteger(),
      stringValue: value.getInteger().toString(),
    };
  }
  if (value.hasMap()) {
    return {
      type: "map" as const,
      value: assertNonNullable(value.getMap()),
      stringValue: assertNonNullable(value.getMap()).getPairsList().join(""),
    };
  }
  if (value.hasPair()) {
    const pairValue = assertNonNullable(value.getPair());
    return {
      type: "pair" as const,
      value: pairValue,
      stringValue: `[${parseValue(
        assertNonNullable(pairValue.getFirst())
      )}, ${parseValue(assertNonNullable(pairValue.getSecond()))}]`,
    };
  }
  if (value.hasStr()) {
    return {
      type: "str" as const,
      value: value.getStr(),
      stringValue: value.getStr(),
    };
  }
  if (value.hasStruct()) {
    return {
      type: "struct" as const,
      value: assertNonNullable(value.getStruct()),
      stringValue: JSON.stringify(value.getStruct()),
    };
  }
  if (value.hasVariant()) {
    return {
      type: "variant" as const,
      value: assertNonNullable(value.getVariant()),
      stringValue: assertNonNullable(
        parseValue(assertNonNullable(value.getVariant()?.getValue()))
      ).stringValue,
    };
  }
  if (value.hasVec()) {
    return {
      type: "vec" as const,
      value: assertNonNullable(value.getVec()?.getVecList().map(parseValue)),
      stringValue: `[${assertNonNullable(
        value
          .getVec()
          ?.getVecList()
          .map((v) => assertNonNullable(parseValue(v)).stringValue)
          .join(", ")
      )}]`,
    };
  }

  return undefined;
};
