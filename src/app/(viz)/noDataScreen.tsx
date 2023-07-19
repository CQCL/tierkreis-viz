import { Pending } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const NoDataScreen = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        flexGrow: 1,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pending
        sx={{ height: "4rem", width: "4rem", mb: 3, color: "border.main" }}
        fontSize="large"
      />
      <Typography variant="h6" fontWeight={600}>
        Waiting for the Tierkreis runtime to send data.
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ mt: 2, textAlign: "center", lineHeight: 2 }}
        maxWidth="45rem"
      >
        {`Connect to the visualizer using the VizRunTime plugin. By default data
                  will be sent to http://localhost:3000. If you are running the demo
                  docker container, you shouldn't need to configure anything.`}
      </Typography>
    </Box>
  );
};
