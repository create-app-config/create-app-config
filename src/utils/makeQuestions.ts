import { prompt } from "inquirer";

export interface IQuestions {
  type: string;
  name: string;
  message: string;
  choices?: string[];
  default: string;
}

const questions: IQuestions[] = [
  {
    type: "list",
    name: "template",
    message: "What project template would you like to generate?",
    choices: ["Reactjs", "Nextjs", "Vite", "Express"],
    default: "React",
  },
  {
    type: "list",
    name: "isTypescript",
    message: "Do you want to use Typescript?",
    choices: ["Yes", "No"],
    default: "Yes",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
    default: "my-app",
  },
  {
    type: "list",
    name: "packageManager",
    message: "What package manager would you like to use?",
    choices: ["yarn", "npm"],
    default: "yarn",
  },
  {
    type: "list",
    name: "linters",
    message: "You want to use ESLint and Prettier?",
    choices: ["Yes", "No"],
    default: "Yes",
  },
  {
    type: "list",
    name: "husky",
    message: "You want to use Husky?",
    choices: ["Yes", "No"],
    default: "Yes",
  },
];

export const makeInitialQuestions = async () => {
  const answers = await prompt(questions);

  return answers;
};

export const makeFinishQuestions = async () => {
  const questions: IQuestions[] = [
    {
      type: "list",
      name: "tailwind",
      message: "You want to use Tailwind CSS?",
      choices: ["Yes", "No"],
      default: "Yes",
    },
  ];

  const answers = await prompt(questions);

  return answers;
};
