import { InfrastructureTsProject } from "@aws/pdk/infrastructure";
import { MonorepoTsProject } from "@aws/pdk/monorepo";

import { NodePackageManager } from "projen/lib/javascript";
import { ReactTypeScriptProject } from "projen/lib/web";

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
      "packages/website/src/**/*.tsx",
      "packages/website/src/**/*.ts",
      "packages/website/tailwind.config.ts",
    ],
  },
});

const website = new ReactTypeScriptProject({
  parent: monorepo,
  outdir: "packages/website",
  name: "dev-website-frontend",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  eslint: false,
  prettier: true,
  tsconfigDev: {
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["./src/*"],
      },
    },
  },
  tsconfig: {
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["./src/*"],
      },
    },
  },
  deps: [
    "react-router-dom",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
  ],
  devDeps: [
    "globals",
    "tailwindcss",
    "tailwindcss-animate",
    "autoprefixer",
    "postcss",
    "postcss-import",
    "@craco/craco",
    "@craco/types",
    "eslint",
    "@eslint/js",
    "@types/eslint__js",
    "typescript",
    "typescript-eslint",
  ],
});

// Use 'craco' instead of 'react-scripts'
const devTask = website.tasks.tryFind("dev");
if (devTask) {
  devTask.reset(
    "craco start & npx tailwindcss -i ./src/styles/main.css -o ./src/index.css --watch",
  );
}

// Use 'craco' instead of 'react-scripts'
const compileTask = website.tasks.tryFind("compile");
if (compileTask) {
  compileTask.reset("craco build");
}

// Use 'craco' instead of 'react-scripts'
const testTask = website.tasks.tryFind("test");
if (testTask) {
  testTask.reset("craco test --watchAll=false --passWithNoTests");
}

new InfrastructureTsProject({
  parent: monorepo,
  outdir: "packages/infra",
  name: "dev-website-infra",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  prettier: true,
});

monorepo.synth();
