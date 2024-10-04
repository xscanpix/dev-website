import { MonorepoTsProject } from "@aws/pdk/monorepo";

import { NodePackageManager } from "projen/lib/javascript";

import { createFrontendProject } from "./projects/frontend";
import { createInfrastructureProject } from "./projects/infrastructure";

const monorepo = new MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "dev-website",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  projenrcTs: true,
  projenrcTsOptions: {
    projenCodeDir: "./projects",
  },
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

createInfrastructureProject({
  parent: monorepo,
  outdir: "packages/infra",
  name: "dev-website-infra",
});

createFrontendProject({
  parent: monorepo,
  outdir: "packages/website",
  name: "dev-website-website",
});

monorepo.synth();
