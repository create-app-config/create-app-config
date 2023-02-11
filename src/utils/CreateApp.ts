import { exec } from "shelljs";

interface ICreateApp {
  template: string;
  projectName: string;
  isTypescript: boolean;
  packageManager: string;
}

export const createApp = async ({
  template,
  isTypescript,
  projectName,
  packageManager,
}: ICreateApp) => {
  if (packageManager === "npm") {
    if (isTypescript) {
      if (template === "Reactjs") {
        exec(`npx create-react-app ${projectName} --template typescript`);
      }
      if (template === "Nextjs") {
        exec(`npx create-next-app ${projectName} --typescript`);
      }
      if (template === "Vite") {
        exec(`npm create-vite-app ${projectName} -- --template react-ts`);
      }
    } else {
      if (template === "Reactjs") {
        exec(`npx create-react-app ${projectName} `);
      }
      if (template === "Nextjs") {
        exec(`npx create-next-app ${projectName} --no-eslint`);
      }
      if (template === "Vite") {
        exec(`npm create-vite-app ${projectName} -- --template react`);
      }
    }
  } else {
    if (isTypescript) {
      if (template === "Reactjs") {
        exec(`yarn create-react-app ${projectName} --template typescript`); // yarn create-react-app my-react-app --template typescript
      }
      if (template === "Nextjs") {
        exec(`yarn create-next-app ${projectName} --ts --no-eslint`); // yarn create next-app my-next-app --ts --no-eslint
      }
      if (template === "Vite") {
        exec(`yarn create-vite-app ${projectName} -- --template react-ts`); //  yarn create vite my-vite-app --template react-ts
      }
    } else {
      if (template === "Reactjs") {
        exec(`yarn create-react-app ${projectName} `);
      }
      if (template === "Nextjs") {
        exec(`yarn create-next-app ${projectName} --no-eslint`);
      }
      if (template === "Vite") {
        exec(`yarn create-vite-app ${projectName} -- --template react`);
      }
    }
  }
};
