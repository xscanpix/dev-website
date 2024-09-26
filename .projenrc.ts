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
    include: ["src/**/*.ts", "**/*.ts", "src/**/*.tsx", "**/*.tsx"],
  },
});

new ReactTypeScriptProject({
  parent: monorepo,
  outdir: "packages/website",
  name: "dev-website-frontend",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  prettier: true,
});

new InfrastructureTsProject({
  parent: monorepo,
  outdir: "packages/infra",
  name: "dev-website-infra",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "master",
  prettier: true,
});

monorepo.synth();
