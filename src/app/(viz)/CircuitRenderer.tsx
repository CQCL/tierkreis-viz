import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../../../tierkreis-ui/src/theme/index";
import { loadScript } from "../../../tierkreis-ui/src/utils/loadScript";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "circuit-display-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

declare global {
  var Vue: {
    createApp: any;
  };
}

declare global {
  interface Window {
    "pytket-circuit-renderer": any;
  }
}

type CircuitRendererContainer = {
  renderOptions: Record<"darkTheme" | "systemTheme", boolean>;
};

const removeNullFields = (obj: object) => {
  return JSON.parse(
    JSON.stringify(obj, (_, value) => {
      return value === null ? undefined : value;
    })
  );
};

export const CircuitRenderer = ({
  circuitDefinition,
}: {
  circuitDefinition: object;
}) => {
  return <_CircuitRenderer circuitDefinition={circuitDefinition} />;
};
export const _CircuitRenderer = ({
  circuitDefinition,
}: {
  circuitDefinition: object;
}) => {
  const theme = useTheme();
  const [vueComponent, setVueComponent] =
    React.useState<CircuitRendererContainer>();
  const sharedServerAndClientID = React.useId();
  const validHTMLId = `container${sharedServerAndClientID.replaceAll(
    ":",
    "0"
  )}`;
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current === true) return;
    isMounted.current = true;
    Promise.all([
      loadScript("https://cdn.jsdelivr.net/npm/vue@3"),
      loadScript(
        "https://unpkg.com/pytket-circuit-renderer@latest/dist/pytket-circuit-renderer.umd.js"
      ),
    ]).then(() => {
      const app = Vue.createApp({
        components: {
          circuitDisplayContainer: window["pytket-circuit-renderer"].default,
        },
        mounted() {
          // Expose the component to react
          setVueComponent(this.$refs.circuitDisplayContainer);
        },
      });
      app.config.unwrapInjectedRef = true;
      app.mount(`#${validHTMLId}`);
    });
  }, [validHTMLId]);
  React.useEffect(() => {
    if (vueComponent) {
      // Update the vue component state
      vueComponent.renderOptions.darkTheme = theme.currentTheme === "dark";
    }
  }, [theme.currentTheme, vueComponent]);

  return (
    <Box
      sx={{
        all: "initial",
        width: "100%",
        height: "100%",
        ">*": { margin: 0, padding: 0 },
      }}
    >
      <Box
        id={validHTMLId}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "0.25rem",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <circuit-display-container
          {...{
            ":circuit-raw": JSON.stringify(removeNullFields(circuitDefinition)),
            ":init-render-options": JSON.stringify({
              darkTheme: true,
              systemTheme: false,
              transparentBg: true,
            }),
            ":style": '{"padding": "0.5em"}',
            ":ref": '"circuitDisplayContainer"',
          }}
        ></circuit-display-container>
      </Box>
    </Box>
  );
};

export default CircuitRenderer;
