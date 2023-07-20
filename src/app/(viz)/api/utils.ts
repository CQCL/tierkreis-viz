import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

export const writeToStorageDir = (
  ...props: Parameters<typeof writeFileSync>
) => {
  const [firstArg, ...rest] = props;
  if (!existsSync("./.storage")) {
    mkdirSync("./.storage");
  }
  return writeFileSync(`./.storage/${firstArg}`, ...rest);
};

export const readFromStorageDir = (
  ...props: Parameters<typeof readFileSync>
) => {
  const [firstArg, ...rest] = props;
  return readFileSync(`./.storage/${firstArg}`, ...rest);
};
