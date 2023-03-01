import { exec } from "shelljs";

export const npmScripts = (key: string, value: string) => {
  exec(`npm set-script ${key} "${value}"`);
};
