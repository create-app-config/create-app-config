import { exec } from "shelljs";
import { delay } from "utils-react";

import {
  tailwindDependencies,
  lintersDependencies,
  huskyDependencies,
  lintStagedDependencies,
  commitlintDependencies,
  expressDependencies,
} from "./constants";

interface IDependencies {
  dependencies: string[];
  dev_dependencies: string[];
}

interface IAddDependencies {
  template: string;
  managerMessage: string;
  isTypescript: boolean;
  linters: boolean;
  husky: boolean;
  tailwind?: boolean;
}

export const addDependencies = async ({
  template,
  managerMessage,
  isTypescript,
  linters,
  husky,
  tailwind,
}: IAddDependencies) => {
  const dependenciesObject: IDependencies = {
    dependencies: [],
    dev_dependencies: [],
  };

  let eslintPrettierDependencies = [];

  if (template !== "Express") {
    eslintPrettierDependencies = isTypescript
      ? [...lintersDependencies.react, ...lintersDependencies.typescript]
      : lintersDependencies.react;
  } else {
    eslintPrettierDependencies = isTypescript
      ? [...lintersDependencies.express, ...lintersDependencies.typescript]
      : lintersDependencies.express;

    dependenciesObject.dependencies.push(...expressDependencies.dependencies);

    if (isTypescript) {
      dependenciesObject.dev_dependencies.push(
        ...expressDependencies.typescript,
      );
    } else {
      dependenciesObject.dev_dependencies.push(
        ...expressDependencies.javascript,
      );
    }
  }

  if (linters) {
    dependenciesObject.dev_dependencies.push(...eslintPrettierDependencies);
  }

  if (husky) {
    dependenciesObject.dev_dependencies.push(
      ...huskyDependencies,
      ...lintStagedDependencies,
      ...commitlintDependencies,
    );
  }

  if (tailwind) {
    dependenciesObject.dev_dependencies.push(...tailwindDependencies);
  }

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
