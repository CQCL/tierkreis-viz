"use client";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import {
  Background,
  NodeChange,
  NodePositionChange,
  ReactFlow,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomEdge } from "./edge_types";
import { CustomNode } from "./node_types";
import { calculateNodePositions } from "./utils/calculateNodePositions";
import { createGraph } from "./utils/createGraph";
import { createRFGraph } from "./utils/createRFGraph";
const EdgeTypes = { CustomEdge };
const NodeTypes = { CustomNode };

const hashGraph = (graph: ReturnType<typeof createGraph>) => {
  return JSON.stringify(
    graph.nodes.map(({ portsIn, portsOut, id }) => {
      return {
        portsIn,
        portsOut,
        id,
      };
    })
  );
};

export const ReactFlowGraph = (
  incomingGraph: ReturnType<typeof createGraph>
) => {
  const [nodePositions, setNodePositions] = React.useState(
    calculateNodePositions(incomingGraph)
  );
  const [graph, setGraph] = React.useState(incomingGraph);
  React.useEffect(() => {
    // Invalidate custom node positions if incoming graph hash has changed.
    if (hashGraph(incomingGraph) !== hashGraph(graph)) {
      console.log("Replacing current graph...");
      setNodePositions(calculateNodePositions(incomingGraph));
    }
    setGraph(incomingGraph);
  }, [incomingGraph, graph]);

  const RFGraph = createRFGraph({
    graph,
    nodePositions,
  });
  React.useEffect(() => {}, []);
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Divider></Divider>
      <Typography
        sx={{
          px: 1,
          py: 0.5,
          mt: 0,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        {graph.name || "Unnamed Graph"}
      </Typography>
      <ReactFlowProvider>
        <ReactFlow
          fitViewOptions={{
            padding: 0.75,
            maxZoom: 999999999,
            duration: 200,
            minZoom: 1,
          }}
          fitView
          nodes={RFGraph.RFNodes}
          edges={RFGraph.RFEdges}
          onNodesChange={(nodes) => {
            const isNodePositionChange = (
              n: NodeChange
            ): n is NodePositionChange => {
              return n.type === "position";
            };
            const positionUpdates = nodes.filter(isNodePositionChange);

            if (positionUpdates.length === 0) return;
            setNodePositions(
              nodePositions.map((node) => {
                const match = positionUpdates.find((n) => {
                  return n.id === node.id;
                });

                if (match && match.position !== undefined) {
                  return {
                    ...node,
                    ...match.position,
                  };
                }
                return node;
              })
            );
          }}
          nodeTypes={NodeTypes}
          edgeTypes={EdgeTypes}
          style={{
            height: 500,
            width: 500,
            background: "transparent",
            flexGrow: 1,
          }}
        >
          <Box
            component={Background}
            sx={{
              bgcolor: "background.default",
            }}
          />
        </ReactFlow>
      </ReactFlowProvider>
    </Box>
  );
};
