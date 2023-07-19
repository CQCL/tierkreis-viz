import { PropsWithChildren } from "react";

import "./globals.css";
import { ClientThemeProvider } from "./ThemeProvider";

export default function Layout(props: PropsWithChildren) {
  // try {
  //   unlinkSync("storage/graph.bin");
  // } catch {}
  // try {
  //   unlinkSync("storage/streamList.bin");
  // } catch {}
  // try {
  //   unlinkSync("storage/typeErrors.bin");
  // } catch {}
  return (
    <html>
      <head></head>
      <body>
        <ClientThemeProvider> {props.children}</ClientThemeProvider>
      </body>
    </html>
  );
}
