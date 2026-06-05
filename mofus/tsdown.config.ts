import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "ax/index": "../mofur/src/ax/index.ts",
    "ax-ui/index": "../mofur/src/ax-ui/index.ts",
    "mo/index": "../mofur/src/mo/index.ts",
    "mo-audio/index": "../mofur/src/mo-audio/index.ts",
    "mo-synthesis/index": "../mofur/src/mo-synthesis/index.ts",
    "mx-audio/index": "../mofur/src/mx-audio/index.ts",
    //
    "ax-solid/index": "src/ax-solid/index.ts",
    "mo-solid/index": "src/mo-solid/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  deps: {
    neverBundle: ["solid-js"],
  },
});
