import { InfrastructureTsProject } from "@aws/pdk/infrastructure";
import { MonorepoTsProject } from "@aws/pdk/monorepo";

import { NodePackageManager, NodeProject } from "projen/lib/javascript";

const monorepo = new MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "dev-website",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  projenrcTs: true,
  tsconfig: {
    compilerOptions: {
      rootDir: ".",
    },
    include: [
      "packages/infra/src/**/*.ts",
      "packages/website/src/**/*.tsx",
      "packages/website/src/**/*.ts",
      "packages/website/tailwind.config.ts",
    ],
  },
});

new InfrastructureTsProject({
  parent: monorepo,
  outdir: "packages/infra",
  name: "dev-website-infra",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  prettier: true,
});

const test = new NodeProject({
  parent: monorepo,
  outdir: "packages/website",
  name: "dev-website-website",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  prettier: true,
  gitIgnoreOptions: {
    ignorePatterns: ["dist"],
  },
  devDeps: [
    "@eslint/js",
    "@types/react",
    "@types/react-dom",
    "@vitejs/plugin-react",
    "eslint",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-refresh",
    "globals",
    "typescript",
    "typescript-eslint",
    "vite",
    "tailwindcss",
    "tailwindcss-animate",
    "autoprefixer",
    "postcss",
    "postcss-import",
    "vite-tsconfig-paths",
  ],
  deps: [
    "react",
    "react-dom",
    "react-router-dom",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
    "@radix-ui/react-slot",
  ],
});

test.addTask("dev", {
  exec: "npx tailwindcss -i ./src/styles/main.css -o ./src/index.css --watch & npx vite",
});

const testCompileTask = test.tasks.tryFind("compile");
if (testCompileTask) {
  testCompileTask.reset(
    "npx tailwindcss -i ./src/styles/main.css -o ./src/index.css && npx tsc -b && npx vite build",
    {},
  );
}

test.addTask("lint", {
  exec: "npx eslint .",
});

test.addTask("preview", {
  exec: "npx vite preview",
});

monorepo.synth();
