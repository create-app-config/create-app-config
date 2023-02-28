import { addDependencies } from "./utils/addDependencies";
import { ColorLog } from "./utils/colorLog";
import { createApp } from "./utils/createApp";
import {
  makeInitialQuestions,
  makeFinishQuestions,
} from "./utils/makeQuestions";
import { packManager } from "./utils/packageManager";
(async () => {
  ColorLog.green("Welcome to the create-app-config CLI! 🚀");
  ColorLog.green("Let's get started!");
  console.log("");

  const {
    template,
    isTypescript,
    projectName,
    packageManager,
    linters,
    husky,
  } = await makeInitialQuestions();

  let tailwind = "No";
  if (template !== "Express") {
    const response = await makeFinishQuestions();

    tailwind = response.tailwind;
  }

  const manager = packManager(packageManager);

  await createApp({
    template,
    isTypescript: isTypescript === "Yes",
    projectName,
    packageManager,
  });

  await addDependencies({
    template,
    managerMessage: manager.message,
    isTypescript: isTypescript === "Yes",
    linters: linters === "Yes",
    husky: husky === "Yes",
    tailwind: tailwind === "Yes",
  });

  console.log(
    template,
    isTypescript,
    projectName,
    packageManager,
    linters,
    husky,
    tailwind,
  );
})();
