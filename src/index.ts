import { addDependencies } from "./utils/addDependencies";
import { ColorLog } from "./utils/colorLog";
import {
  makeInitialQuestions,
  makeFinishQuestions,
} from "./utils/makeQuestions";

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

  const manager = packageManager(packageManager);
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
