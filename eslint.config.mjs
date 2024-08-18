import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    rules: {
      "no-unused-vars": "off", // Disable unused-vars rule
      "no-undef": "off", // Disable no-undef rule
    },
    ignores: ["src/pages/Ecommerce.jsx", "src/pages/Orders.jsx"],
  },
];
