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
