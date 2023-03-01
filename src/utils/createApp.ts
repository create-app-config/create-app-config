import { exec } from "shelljs";

import { createExpress } from "./createExpress";
import { IManager } from "./packageManager";

interface ICreateApp {
  template: string;
  projectName: string;
  isTypescript: boolean;
  packageManager: string;
  manager: IManager;
  linters: boolean;
  husky: boolean;
}

export const createApp = async ({
  template,
  isTypescript,
  projectName,
  packageManager,
  manager,
  linters,
  husky,
}: ICreateApp) => {
  if (template === "Express") {
    return createExpress({
      isTypescript,
      projectName,
      packageManager: manager,
      linters,
      husky,
    });
  }

  if (packageManager === "npm") {
    if (isTypescript) {
      if (template === "Reactjs") {
        exec(`npx create-react-app ${projectName} --template typescript`);
      }

      if (template === "Nextjs") {
        exec(
          `npx create-next-app ${projectName} --typescript --no-eslint --no-experimental-app --src-dir --import-alias "@/*"`,
        );
      }

      if (template === "Vite") {
        exec(`npm create vite@latest ${projectName} -- --template react-ts`);
      }
    } else {
      if (template === "Reactjs") {
        exec(`npx create-react-app ${projectName}`);
      }

      if (template === "Nextjs") {
        exec(
          `npx create-next-app ${projectName} --javascript --no-eslint --no-experimental-app --src-dir --import-alias "@/*"`,
        );
      }

      if (template === "Vite") {
        exec(`npm create vite@latest ${projectName} -- --template react`);
      }
    }
  } else {
    if (isTypescript) {
      if (template === "Reactjs") {
        exec(`yarn create react-app ${projectName} --template typescript`);
      }

      if (template === "Nextjs") {
        exec(
          `yarn create next-app ${projectName} --typescript --no-eslint --no-experimental-app --src-dir --import-alias "@/*"`,
        );
      }

      if (template === "Vite") {
        exec(`yarn create vite ${projectName} -- --template react-ts`);
      }
    } else {
      if (template === "Reactjs") {
        exec(`yarn create react-app ${projectName}`);
      }

      if (template === "Nextjs") {
        exec(
          `yarn create next-app ${projectName} --javascript --no-eslint --no-experimental-app --src-dir --import-alias "@/*"`,
        );
      }

      if (template === "Vite") {
        exec(`yarn create vite ${projectName} -- --template react`);
      }
    }
  }
};
