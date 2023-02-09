import { prompt } from "inquirer";

interface IQuestions {
  type: string;
  name: string;
  message: string;
  choices: string[];
  default: string;
}

export const makeQuestions = async (questions: IQuestions[]) => {
  const answers = await prompt(questions);

  return answers;
};
