import chalk from "chalk";

export class ColorLog {
  static green = (message: string) => {
    console.log(chalk.green(message));
  };

  static red = (message: string) => {
    console.log(chalk.red(message));
  };

  static yellow = (message: string) => {
    console.log(chalk.yellow(message));
  };

  static blue = (message: string) => {
    console.log(chalk.blue(message));
  };

  static magenta = (message: string) => {
    console.log(chalk.magenta(message));
  };

  static cyan = (message: string) => {
    console.log(chalk.cyan(message));
  };

  static white = (message: string) => {
    console.log(chalk.white(message));
  };
}
