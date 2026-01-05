module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-htmlacademy",
  ],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "no-duplicate-selectors": null,
    "selector-disallowed-list": null,
    "plugin/selector-bem-pattern": {
      preset: "bem",
      implicitComponents: "blocks/*.scss",
      implicitUtilities: "global/utils.scss",
    },
    "selector-class-pattern": [
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
        message: (selectorValue) =>
          `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`,
      },
    ],
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "alpha-value-notation": null,
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/load-no-partial-leading-underscore": true,
    "declaration-block-no-redundant-longhand-properties": null,
    "max-nesting-depth": [
      2,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
        ignoreAtRules: ["include", "media"],
      },
    ],
    "declaration-property-value-disallowed-list": null,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "inside-single-line-block", "after-declaration"],
      },
    ],

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["function", "return", "if", "else", "mixin", "include"],
      },
    ],

    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [/^size/, "size-tablet"],
      },
    ],
  },
};

