import { fileRequest } from "down-git-files";
import { exec } from "shelljs";

import { folderCreate, folderNavigate } from "./folderController";
import { huskyConfig } from "./huskyConfig";
import { npmScripts } from "./npmScripts";
import { IManager } from "./packageManager";

interface ICreateExpress {
  projectName: string;
  isTypescript: boolean;
  packageManager: IManager;
  linters: boolean;
  husky: boolean;
}

export const createExpress = async ({
  projectName,
  isTypescript,
  packageManager,
  linters,
  husky,
}: ICreateExpress) => {
  const extension = isTypescript ? "ts" : "js";
  folderCreate(projectName);
  folderNavigate(projectName);

  exec("npm init -y");

  if (isTypescript) {
    npmScripts("build", "rimraf dist && tsc");
    npmScripts("start", "node dist/index.js");
    npmScripts("dev", "ts-node-dev src/index.ts");
  } else {
    npmScripts("start", "node src/index.js");
    npmScripts("dev", "nodemon src/index.js");
  }

  folderCreate("src");
  folderCreate("src/routes");
  const files = [];

  if (linters) {
    const data = [
      fileRequest({
        user: "create-app-config",
        repo: "create-app-config",
        path: `src/templates/express/eslint-${extension}.txt`,
        branch: "main",
        file: ".eslintrc.json",
      }),
      fileRequest({
        user: "create-app-config",
        repo: "create-app-config",
        path: "src/templates/ignore.txt",
        branch: "main",
        file: ".eslintignore",
      }),
      fileRequest({
        user: "create-app-config",
        repo: "create-app-config",
        path: "src/templates/ignore.txt",
        branch: "main",
        file: ".prettierignore",
      }),
      fileRequest({
        user: "create-app-config",
        repo: "create-app-config",
        path: "src/templates/prettier.txt",
        branch: "main",
        file: ".prettierrc.json",
      }),
      fileRequest({
        user: "create-app-config",
        repo: "create-app-config",
        path: "src/templates/editorconfig.txt",
        branch: "main",
        file: ".editorconfig",
      }),
    ];

    files.push(data);
  }

  if (husky) {
    await huskyConfig(packageManager.command);
  }

  await Promise.all([
    ...files,
    fileRequest({
      user: "create-app-config",
      repo: "create-app-config",
      path: `src/templates/express/index-${extension}.txt`,
      branch: "main",
      file: `src/index.${extension}`,
    }),
    fileRequest({
      user: "create-app-config",
      repo: "create-app-config",
      path: `src/templates/express/routes-${extension}.txt`,
      branch: "main",
      file: `src/routes/index.${extension}`,
    }),
  ]);

  folderNavigate("..");
};
