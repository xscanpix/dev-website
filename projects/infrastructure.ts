import { InfrastructureTsProject } from "@aws/pdk/infrastructure";
import { Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript";

interface InfrastructureProjectProps {
  parent: Project;
  outdir: string;
  name: string;
}

export function createInfrastructureProject(props: InfrastructureProjectProps) {
  const { parent, outdir, name } = props;

  return new InfrastructureTsProject({
    parent,
    outdir,
    name,
    packageManager: NodePackageManager.PNPM,
    defaultReleaseBranch: "master",
    prettier: true,
  });
}
