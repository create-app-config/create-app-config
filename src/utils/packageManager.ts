interface IManager {
  message: string;
  command: string;
}

export const packageManager = (currentManager: string) => {
  const manager: IManager = {
    message: "",
    command: "",
  };

  if (currentManager === "yarn") {
    manager.message = "yarn add";
    manager.command = "yarn";
  } else {
    manager.message = "npm install";
    manager.command = "npm run";
  }

  return manager;
};
