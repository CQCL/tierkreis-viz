import { unlinkSync } from "fs";
import { PropsWithChildren } from "react";

export default async function Prepare(props: PropsWithChildren) {
  return props.children;
}
