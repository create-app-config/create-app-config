import { addDependencies } from "./utils/addDependencies";
import { ColorLog } from "./utils/colorLog";
import { createApp } from "./utils/createApp";
import { folderNavigate } from "./utils/folderController";
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

  const booleanResponse = {
    isTypescript: isTypescript === "Yes",
    linters: linters === "Yes",
    husky: husky === "Yes",
    tailwind: tailwind === "Yes",
  };

  const manager = packManager(packageManager);

  ColorLog.green("Creating your app...");
  console.log("");
  await createApp({
    template,
    isTypescript: booleanResponse.isTypescript,
    projectName,
    manager,
    packageManager,
    linters: booleanResponse.linters,
    husky: booleanResponse.husky,
  });

  folderNavigate(projectName);

  ColorLog.green("Installing dependencies...");
  console.log("");
  await addDependencies({
    template,
    managerMessage: manager.message,
    isTypescript: booleanResponse.isTypescript,
    linters: booleanResponse.linters,
    husky: booleanResponse.husky,
    tailwind: booleanResponse.tailwind,
  });
})();
