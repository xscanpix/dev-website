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
  prettier: true,
  deps: ["react-router-dom"],
  devDeps: [
    "tailwindcss",
    "autoprefixer",
    "postcss",
    "tailwind-merge",
    "cva@npm:class-variance-authority",
  ],
});

const devTask = website.tasks.tryFind("dev");
if (devTask) {
  devTask.reset(
    "npx react-scripts start & npx tailwindcss -i ./src/styles/main.css -o ./src/index.css --watch",
  );
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
