/* eslint-disable @typescript-eslint/no-require-imports */
import path from "path";

import { type CracoConfig } from "@craco/types";

const config: CracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [{ plugin: require("craco-esbuild") }],
};

export default config;
