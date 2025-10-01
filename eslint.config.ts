import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";

// NB: jiti dependency is required in order to use a TS ESLint config
// https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  { languageOptions: { globals: globals.node } },
);
