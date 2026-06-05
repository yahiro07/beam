import { defineConfig } from "tsdown";

export default defineConfig({
  platform: "browser",
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  entry: {
    "ax/index": "src/ax/index.ts",
    "ax-react/index": "src/ax-react/index.ts",
    "ax-ui/index": "src/ax-ui/index.ts",
    "mo/index": "src/mo/index.ts",
    "mo-audio/index": "src/mo-audio/index.ts",
    "mo-react/index": "src/mo-react/index.ts",
    "mo-synthesis/index": "src/mo-synthesis/index.ts",
    "mx-audio/index": "src/mx-audio/index.ts",
  },
  deps: {
    neverBundle: ["react", "react-dom"],
  },
});
