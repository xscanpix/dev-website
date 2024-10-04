import { Project } from "projen";
import { NodePackageManager, NodeProject } from "projen/lib/javascript";

interface FrontendProjectProps {
  parent: Project;
  outdir: string;
  name: string;
}

export function createFrontendProject(props: FrontendProjectProps) {
  const { parent, outdir, name } = props;

  const frontend = new NodeProject({
    parent,
    outdir,
    name,
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

  frontend.addTask("dev", {
    exec: "npx vite & npx tailwindcss -i ./src/styles/main.css -o ./src/index.css --watch",
  });

  const testCompileTask = frontend.tasks.tryFind("compile");
  if (testCompileTask) {
    testCompileTask.reset(
      "npx tailwindcss -i ./src/styles/main.css -o ./src/index.css && npx tsc -b && npx vite build",
      {},
    );
  }

  frontend.addTask("lint", {
    exec: "npx eslint .",
  });

  frontend.addTask("preview", {
    exec: "npx vite preview",
  });

  return frontend;
}
