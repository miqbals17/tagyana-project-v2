// @ts-check

import eslint from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "*", // Ignore everything except the following
      "!public/",
      "!src/",
      "!tsconfig.json",
      "!eslint.config.mjs",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,mjs}"],
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/no-non-null-assertion": ["warn"],
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        {
          allowObjectTypes: "always",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-unused-expressions": "error",
    },
  }
);
