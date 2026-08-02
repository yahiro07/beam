import { injectCssPlugin } from "@bosh-code/tsdown-plugin-inject-css";
import { tailwindPlugin } from "@bosh-code/tsdown-plugin-tailwindcss";
import { defineConfig } from "tsdown";

export default defineConfig({
  platform: "browser",
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  plugins: [tailwindPlugin(), injectCssPlugin()],
  entry: {
    style: "src/style.css",
    "mono1/index": "src/mono1/index.ts",
    "mono2/index": "src/mono2/index.ts",
  },
  deps: {
    neverBundle: ["react", "react-dom"],
  },
});
