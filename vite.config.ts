import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["slides.md"],
  },
  lint: { options: { typeAware: true, typeCheck: true } },
});
