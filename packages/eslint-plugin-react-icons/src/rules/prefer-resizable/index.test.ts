// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RuleTester } from '@typescript-eslint/rule-tester';
import { afterAll, describe, it } from 'vitest';

import { rule, RULE_NAME } from './index';

RuleTester.afterAll = afterAll;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    // Resizable named import + usage.
    {
      code: `import { SendRegular } from '@fluentui/react-icons';\nconst a = <SendRegular />;`,
    },
    // Sized icon from a non-icon source is ignored.
    {
      code: `import { Send24Regular } from 'some-other-lib';\nconst a = <Send24Regular />;`,
    },
    // Resizable collision (size-shaped product name) is not flagged.
    {
      code: `import { Battery10Regular } from '@fluentui/react-icons';`,
    },
    {
      code: `import { Fps120Regular } from '@fluentui/react-icons';`,
    },
    // Namespace member that is resizable / a collision.
    {
      code: `import * as Icons from '@fluentui/react-icons';\nconst a = <Icons.SendRegular />;`,
    },
    {
      code: `import * as Icons from '@fluentui/react-icons';\nconst a = <Icons.Battery10Regular />;`,
    },
  ],
  invalid: [
    // Named sized import (non-aliased) + JSX usage: renames binding and usages.
    {
      code: `import { Send24Regular } from '@fluentui/react-icons';\nconst a = <Send24Regular />;`,
      errors: [
        {
          messageId: 'preferResizable',
          data: { sized: 'Send24Regular', resizable: 'SendRegular' },
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import { SendRegular } from '@fluentui/react-icons';\nconst a = <SendRegular />;`,
            },
          ],
        },
      ],
    },
    // Aliased named import: only the imported name is renamed.
    {
      code: `import { Send24Regular as Foo } from '@fluentui/react-icons';\nconst a = <Foo />;`,
      errors: [
        {
          messageId: 'preferResizable',
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import { SendRegular as Foo } from '@fluentui/react-icons';\nconst a = <Foo />;`,
            },
          ],
        },
      ],
    },
    // Brand-icons source is covered by default.
    {
      code: `import { Send24Filled } from '@fluentui/react-brand-icons';`,
      errors: [
        {
          messageId: 'preferResizable',
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import { SendFilled } from '@fluentui/react-brand-icons';`,
            },
          ],
        },
      ],
    },
    // Subpath import is covered.
    {
      code: `import { Send24Regular } from '@fluentui/react-icons/fonts/send';`,
      errors: [
        {
          messageId: 'preferResizable',
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import { SendRegular } from '@fluentui/react-icons/fonts/send';`,
            },
          ],
        },
      ],
    },
    // Genuinely-sized size-10 icon (Presence) IS flagged.
    {
      code: `import { PresenceDnd10Filled } from '@fluentui/react-icons';`,
      errors: [
        {
          messageId: 'preferResizable',
          data: { sized: 'PresenceDnd10Filled', resizable: 'PresenceDndFilled' },
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import { PresenceDndFilled } from '@fluentui/react-icons';`,
            },
          ],
        },
      ],
    },
    // Namespace member usage in JSX.
    {
      code: `import * as Icons from '@fluentui/react-icons';\nconst a = <Icons.Send24Regular />;`,
      errors: [
        {
          messageId: 'preferResizable',
          data: { sized: 'Send24Regular', resizable: 'SendRegular' },
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import * as Icons from '@fluentui/react-icons';\nconst a = <Icons.SendRegular />;`,
            },
          ],
        },
      ],
    },
    // Namespace member usage as a value.
    {
      code: `import * as Icons from '@fluentui/react-icons';\nconst C = Icons.Send24Regular;`,
      errors: [
        {
          messageId: 'preferResizable',
          suggestions: [
            {
              messageId: 'useResizable',
              output: `import * as Icons from '@fluentui/react-icons';\nconst C = Icons.SendRegular;`,
            },
          ],
        },
      ],
    },
  ],
});
