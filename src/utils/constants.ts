export const huskyDependencies = ["husky"];
export const lintStagedDependencies = ["lint-staged"];
export const commitlintDependencies = [
  "@commitlint/cli",
  "@commitlint/config-conventional",
];
export const lintersDependencies = {
  express: [
    "eslint",
    "prettier",
    "eslint-config-prettier",
    "eslint-config-standard",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
    "eslint-plugin-n",
    "eslint-plugin-prettier",
    "eslint-plugin-promise",
  ],
  react: [
    "eslint",
    "prettier",
    "eslint-config-prettier",
    "eslint-config-standard",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
    "eslint-plugin-n",
    "eslint-plugin-prettier",
    "eslint-plugin-promise",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
  ],
  typescript: ["@typescript-eslint/eslint-plugin", "@typescript-eslint/parser"],
};
export const tailwindDependencies = ["tailwindcss", "autoprefixer", "postcss"];
export const expressDependencies = {
  typescript: ["@types/express", "@types/node", "ts-node-dev", "typescript"],
  javascript: ["nodemon"],
  dependencies: ["express", "dotenv", "rimraf"],
};
