"use client";
import { Graph, OutputStream } from "@/grpcjs/proto/v1alpha/graph_pb";
import { TypeErrors } from "@/grpcjs/proto/v1alpha/signature_pb";
import { Box } from "@mui/material";
import "reactflow/dist/style.css";
import useSWR from "swr";
import { ReactFlowGraph } from "./ReactFlow";
import { NoDataScreen } from "./noDataScreen";
import { createGraph } from "./utils/createGraph";

const parseResponse = async (res: Response) => {
  if (res.ok) {
    const blob = await res.blob();
    const buffer = await blob.arrayBuffer();
    return buffer;
  }
  return undefined;
};
export default function Page() {
  const {
    data: { graphBinary, runtimeBinary, typecheckBinary },
  } = useSWR(
    "liveGraph",
    async () => {
      const [graphBinary, runtimeBinary, typecheckBinary] = await Promise.all([
        fetch("http://localhost:3000/api/graph")
          .then(parseResponse)
          .catch(() => undefined),

        fetch("http://localhost:3000/api/streamList")
          .then(parseResponse)
          .catch(() => undefined),
        fetch("http://localhost:3000/api/typeErrors")
          .then(parseResponse)
          .catch(() => undefined),
      ]);
      return {
        graphBinary,
        runtimeBinary,
        typecheckBinary,
      };
    },
    {
      refreshInterval: 1000,
      dedupingInterval: 250,
      suspense: true,
      refreshWhenHidden: true,
      refreshWhenOffline: true,
      keepPreviousData: true,
      fallbackData: {
        graphBinary: undefined,
        runtimeBinary: undefined,
        typecheckBinary: undefined,
      },
    }
  );

  if (graphBinary === undefined) return <NoDataScreen />;

  const outputStream = runtimeBinary
    ? OutputStream.deserializeBinary(new Uint8Array(runtimeBinary))
    : undefined;

  const typeErrors = typecheckBinary
    ? TypeErrors.deserializeBinary(new Uint8Array(typecheckBinary))
    : undefined;
  const graph = createGraph({
    graph: Graph.deserializeBinary(new Uint8Array(graphBinary)),
    outputStream,
    typeErrors,
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
      id="flow-entry"
    >
      <ReactFlowGraph {...graph} />
    </Box>
  );
}
