import { platform } from "os";
import { exec } from "shelljs";

export const osValidation = async () => {
  const currentPlatform = platform();

  if (currentPlatform === "linux") {
    exec("chmod +x .husky/*");
  }
};
