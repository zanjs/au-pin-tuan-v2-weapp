module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  "rules": {
    "linebreak-style": 0,
    // "no-unused-vars": ["error", { "vars": "regeneratorRuntime", "args": "after-used" }],
    // "generator-star-spacing": ["error", "after"],
    "generator-star-spacing": ["error", { "before": false, "after": true }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "quote-props": 0,
    "max-line": 0,
    "arrow-body-style": 0,
    "semi": ["error", "never"],
    "no-extra-semi": 0,
    "no-new": 0,
    "no-control-regex": 0,
    "no-unused-vars": ["error", { "varsIgnorePattern": "regeneratorRuntime" }],
    "eol-last": ["error", "never"]
  },
  "globals": {
    "App": true,
    "Page": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true,
  }
};