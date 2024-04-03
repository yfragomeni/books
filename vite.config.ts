import type { InlineConfig } from "vitest";
import { defineConfig, type UserConfig } from "vite";

import react from "@vitejs/plugin-react";

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    reporters: ['json'],
    outputFile: 'test.json'
  },
};
export default defineConfig(config);
