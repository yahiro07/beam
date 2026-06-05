import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "ax-solid/index": "src/ax-solid/index.ts",
    "mo-solid/index": "src/mo-solid/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
});
