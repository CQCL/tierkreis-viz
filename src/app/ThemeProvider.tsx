"use client";
import {
  ChevronRight,
  ComputerOutlined,
  DarkModeOutlined,
  HorizontalRule,
  LightModeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { ComponentProps, PropsWithChildren } from "react";
import { Status, ThemeProvider, capitalize, useMode } from "tierkreis-ui/src";

const MenuTitle = (props: ComponentProps<typeof Typography>) => {
  return (
    <Typography
      variant="caption"
      textTransform="uppercase"
      fontWeight={700}
      {...props}
      sx={{
        display: "block",
        mt: 3,
        mb: 1,
        letterSpacing: "0.05em",
        color: "text.secondary",
        ...props.sx,
      }}
    />
  );
};
export const ClientThemeProvider = (props: PropsWithChildren) => {
  const mode = useMode();
  const [isOpen, setIsOpen] = React.useState(true);
  const openState = (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "20rem",
          borderRight: "1px solid",
          borderLeft: "8px solid",
          borderColor: "border.main",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2,
          }}
        >
          <Stack>
            <Typography variant="h2" fontWeight={700} letterSpacing="-0.03em">
              Tierkreis
            </Typography>
            <Typography variant="body1" color="text.secondary" fontWeight={600}>
              Graph Visualizer
            </Typography>
          </Stack>
          <Stack sx={{ justifyContent: "space-between", alignSelf: "stretch" }}>
            <IconButton
              sx={{ mt: 1, mr: -0.5 }}
              onClick={() => setIsOpen((b) => !b)}
            >
              <ChevronRight
                sx={{ color: "text.primary", transform: "rotate(180deg)" }}
              />
            </IconButton>

            <Typography
              variant="caption"
              alignSelf="end"
              sx={{ color: "text.secondary" }}
            >
              v0.1
            </Typography>
          </Stack>
        </Box>
        <Divider sx={{ my: 2 }}></Divider>
        <Box
          sx={{
            p: 3,
            py: 1,
            pb: 3,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Graph Legend
          </Typography>
          <MenuTitle>Node States</MenuTitle>
          <Status color="info">
            <Typography variant="body1" fontWeight={600}>
              Idle
            </Typography>
          </Status>
          <Status color="warning">
            <Typography variant="body1" fontWeight={600}>
              Running
            </Typography>
          </Status>
          <Status color="success">
            <Typography variant="body1" fontWeight={600}>
              Completed
            </Typography>
          </Status>
          <Status color="error">
            <Typography variant="body1" fontWeight={600}>
              Error
            </Typography>
          </Status>

          <MenuTitle>Edge States</MenuTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HorizontalRule
              sx={{ color: "text.secondary", width: "1rem" }}
            ></HorizontalRule>
            <HorizontalRule
              sx={{ color: "text.secondary", width: "1rem" }}
            ></HorizontalRule>
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              No Data
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HorizontalRule
              sx={{ color: "text.secondary", width: "1rem" }}
            ></HorizontalRule>
            <HorizontalRule
              sx={{ color: "text.secondary", width: "1rem", ml: -1 }}
            ></HorizontalRule>
            <Typography variant="body1" fontWeight={600} sx={{ ml: 2 }}>
              Has Data
            </Typography>
          </Box>

          <Box sx={{ mt: "auto" }}>
            <ToggleButtonGroup
              value={mode.mode}
              exclusive
              size="small"
              aria-label="dark mode options"
            >
              {(
                [
                  { value: "dark", icon: LightModeOutlined },
                  { value: "light", icon: DarkModeOutlined },
                  { value: "system", icon: ComputerOutlined },
                ] as const
              ).map(({ value, icon: Icon }) => (
                <ToggleButton
                  value={value}
                  aria-label={value}
                  onClick={() => {
                    mode.setMode(value);
                  }}
                  key={value}
                >
                  <Icon fontSize="small" sx={{ mr: 0.5 }} />
                  {capitalize(value)}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>
      {props.children}
    </Box>
  );
  const closedState = (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid",
          // borderLeft: "8px solid",
          borderColor: "border.main",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 1,
            py: 2,
          }}
        >
          <IconButton onClick={() => setIsOpen((b) => !b)}>
            <ChevronRight sx={{ color: "text.primary" }} />
          </IconButton>
          <ToggleButtonGroup
            value={mode.mode}
            exclusive
            size="small"
            orientation="vertical"
            aria-label="dark mode options"
          >
            {(
              [
                { value: "dark", icon: LightModeOutlined },
                { value: "light", icon: DarkModeOutlined },
                { value: "system", icon: ComputerOutlined },
              ] as const
            ).map(({ value, icon: Icon }) => (
              <ToggleButton
                value={value}
                aria-label={value}
                onClick={() => {
                  mode.setMode(value);
                }}
                key={value}
              >
                <Icon fontSize="small" />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>
      {props.children}
    </Box>
  );
  return (
    <ThemeProvider {...mode}>{isOpen ? openState : closedState}</ThemeProvider>
  );
};
