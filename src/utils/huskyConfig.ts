/* eslint-disable no-template-curly-in-string */
import { existsSync, writeFileSync } from "fs";
import { exec } from "shelljs";

import { npmScripts } from "./npmScripts";
import { osValidation } from "./osValidation";

export const huskyConfig = async (managerCommand: string) => {
  if (!existsSync(".git")) {
    exec("git init");
  }

  npmScripts("prepare", "husky install");
  exec(`${managerCommand} prepare`);

  exec(`npx husky add .husky/pre-commit "npx --no-install lint-staged"`);
  exec('npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"');

  writeFileSync(
    "commitlint.config.js",
    `module.exports = { extends: ["@commitlint/config-conventional"] };\r\n`,
  );

  await osValidation();
};
