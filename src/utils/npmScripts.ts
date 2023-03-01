import { exec } from "shelljs";

export const npmScripts = (key: string, value: string) => {
  exec(`npx pkg set scripts.${key}"${value}"`);
};
