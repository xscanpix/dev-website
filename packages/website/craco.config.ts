import path from "path";

import { type CracoConfig } from "@craco/types";

const config: CracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
} as const;

export default config;
