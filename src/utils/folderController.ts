import { exec } from "shelljs";

export const folderNavigate = (projectName: string) => {
  exec("cd " + projectName);
};

export const folderCreate = (projectName: string) => {
  exec("mkdir " + projectName);
};
