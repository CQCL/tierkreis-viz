import { PropsWithChildren } from "react";

import "./globals.css";
import { ClientThemeProvider } from "./ThemeProvider";

export default function Layout(props: PropsWithChildren) {
  return (
    <html>
      <head></head>
      <body>
        <ClientThemeProvider> {props.children}</ClientThemeProvider>
      </body>
    </html>
  );
}
