// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ESLintUtils, TSESLint, TSESTree } from '@typescript-eslint/utils';

import { getResizableIconName } from './sized-icons';

export const RULE_NAME = 'prefer-resizable';

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/microsoft/fluentui-system-icons/blob/main/packages/eslint-plugin-react-icons/docs/rules/${name}.md`,
);

const DEFAULT_SOURCES = ['@fluentui/react-icons', '@fluentui/react-brand-icons'];

export type MessageIds = 'preferResizable' | 'useResizable';
export type Options = [{ sources?: string[] }];

export const rule = createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Prefer resizable Fluent icons over fixed-size ("sized") variants. Resizable icons scale to any size and reduce bundle size.',
    },
    hasSuggestions: true,
    messages: {
      preferResizable:
        'Prefer the resizable "{{resizable}}" icon over the fixed-size "{{sized}}" icon. Resizable icons scale to any size (via the `fontSize`/CSS) and reduce bundle size.',
      useResizable: 'Replace "{{sized}}" with "{{resizable}}".',
    },
    schema: [
      {
        type: 'object',
        properties: {
          sources: {
            type: 'array',
            items: { type: 'string' },
            description: 'Module sources treated as Fluent icon packages.',
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [{ sources: DEFAULT_SOURCES }],
  create(context, [options]) {
    const sources = options.sources ?? DEFAULT_SOURCES;
    const { sourceCode } = context;

    /** Local identifiers bound to `import * as X` from an icon source. */
    const namespaceLocals = new Set<string>();

    function isIconSource(value: string): boolean {
      return sources.some((source) => value === source || value.startsWith(`${source}/`));
    }

    function reportNamed(specifier: TSESTree.ImportSpecifier): void {
      const importedName = specifier.imported.name;
      const resizable = getResizableIconName(importedName);
      if (resizable === null) {
        return;
      }

      const isAliased = specifier.local.range[0] !== specifier.imported.range[0];

      const fix = (fixer: TSESLint.RuleFixer): TSESLint.RuleFix[] => {
        if (isAliased) {
          // `import { Send24Regular as Foo }` -> only rename the imported name.
          return [fixer.replaceText(specifier.imported, resizable)];
        }
        // `import { Send24Regular }` -> rename the binding and every usage.
        const [variable] = sourceCode.getDeclaredVariables(specifier);
        const fixes = [fixer.replaceText(specifier.local, resizable)];
        for (const reference of variable?.references ?? []) {
          fixes.push(fixer.replaceText(reference.identifier, resizable));
        }
        return fixes;
      };

      context.report({
        node: specifier.imported,
        messageId: 'preferResizable',
        data: { sized: importedName, resizable },
        suggest: [
          {
            messageId: 'useResizable',
            data: { sized: importedName, resizable },
            fix,
          },
        ],
      });
    }

    function reportNamespaceMember(property: TSESTree.Identifier | TSESTree.JSXIdentifier): void {
      const resizable = getResizableIconName(property.name);
      if (resizable === null) {
        return;
      }
      const fix = (fixer: TSESLint.RuleFixer): TSESLint.RuleFix => fixer.replaceText(property, resizable);
      context.report({
        node: property,
        messageId: 'preferResizable',
        data: { sized: property.name, resizable },
        suggest: [
          {
            messageId: 'useResizable',
            data: { sized: property.name, resizable },
            fix,
          },
        ],
      });
    }

    return {
      ImportDeclaration(node): void {
        if (!isIconSource(node.source.value)) {
          return;
        }
        for (const specifier of node.specifiers) {
          if (specifier.type === 'ImportSpecifier') {
            reportNamed(specifier);
          } else if (specifier.type === 'ImportNamespaceSpecifier') {
            namespaceLocals.add(specifier.local.name);
          }
        }
      },
      'JSXMemberExpression[object.type="JSXIdentifier"]'(node: TSESTree.JSXMemberExpression): void {
        const object = node.object as TSESTree.JSXIdentifier;
        if (namespaceLocals.has(object.name)) {
          reportNamespaceMember(node.property);
        }
      },
      'MemberExpression[object.type="Identifier"][property.type="Identifier"][computed=false]'(
        node: TSESTree.MemberExpression,
      ): void {
        const object = node.object as TSESTree.Identifier;
        if (namespaceLocals.has(object.name)) {
          reportNamespaceMember(node.property as TSESTree.Identifier);
        }
      },
    };
  },
});
