import { describe, it, expect } from 'vitest';
import { transformSource } from '../src/transform';

const transform = (source: string, iconVariant: 'svg' | 'fonts' | 'svg-sprite' = 'svg') =>
  transformSource(source, { iconVariant, path: 'input.js' }).code;

describe('transformSource', () => {
  describe('imports', () => {
    it('rewrites a single named icon import to its atomic path', () => {
      expect(transform(`import { AddFilled } from '@fluentui/react-icons';`)).toBe(
        `import { AddFilled } from '@fluentui/react-icons/svg/add';`,
      );
    });

    it('splits a multi-binding import into one statement per atomic path', () => {
      expect(transform(`import { AddFilled, ArrowLeftRegular } from '@fluentui/react-icons';`)).toBe(
        [
          `import { AddFilled } from '@fluentui/react-icons/svg/add';`,
          `import { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';`,
        ].join('\n'),
      );
    });

    it('routes utility bindings to /utils', () => {
      expect(transform(`import { bundleIcon, iconFilledClassName } from '@fluentui/react-icons';`)).toBe(
        [
          `import { bundleIcon } from '@fluentui/react-icons/utils';`,
          `import { iconFilledClassName } from '@fluentui/react-icons/utils';`,
        ].join('\n'),
      );
    });

    it('routes provider bindings to /providers', () => {
      expect(transform(`import { useIconContext, IconDirectionContextProvider } from '@fluentui/react-icons';`)).toBe(
        [
          `import { useIconContext } from '@fluentui/react-icons/providers';`,
          `import { IconDirectionContextProvider } from '@fluentui/react-icons/providers';`,
        ].join('\n'),
      );
    });

    it('preserves local aliases on icon imports', () => {
      expect(transform(`import { AddFilled as MyAdd } from '@fluentui/react-icons';`)).toBe(
        `import { AddFilled as MyAdd } from '@fluentui/react-icons/svg/add';`,
      );
    });

    it('honors the iconVariant option for fonts', () => {
      expect(transform(`import { AddFilled } from '@fluentui/react-icons';`, 'fonts')).toBe(
        `import { AddFilled } from '@fluentui/react-icons/fonts/add';`,
      );
    });

    it('honors the iconVariant option for svg-sprite', () => {
      expect(transform(`import { AddFilled } from '@fluentui/react-icons';`, 'svg-sprite')).toBe(
        `import { AddFilled } from '@fluentui/react-icons/svg-sprite/add';`,
      );
    });

    it('leaves imports from other modules untouched', () => {
      const source = `import React from 'react';\nimport { something } from 'other-mod';`;
      expect(transform(source)).toBe(source);
    });
  });

  describe('direct re-exports', () => {
    it('rewrites `export { X } from "@fluentui/react-icons"` to the atomic path', () => {
      expect(transform(`export { AddFilled } from '@fluentui/react-icons';`)).toBe(
        `export { AddFilled } from '@fluentui/react-icons/svg/add';`,
      );
    });

    it('splits multi-name direct re-exports into one statement per atomic path', () => {
      expect(transform(`export { AddFilled, ArrowLeftRegular } from '@fluentui/react-icons';`)).toBe(
        [
          `export { AddFilled } from '@fluentui/react-icons/svg/add';`,
          `export { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';`,
        ].join('\n'),
      );
    });

    it('preserves renames on direct re-exports', () => {
      expect(transform(`export { AddFilled as MyAdd } from '@fluentui/react-icons';`)).toBe(
        `export { AddFilled as MyAdd } from '@fluentui/react-icons/svg/add';`,
      );
    });
  });

  describe('indirect re-exports (regression)', () => {
    it('rewrites only the import for `import { X }; export { X };`', () => {
      const source = `import { AddFilled } from '@fluentui/react-icons';\nexport { AddFilled };`;

      expect(transform(source)).toMatchInlineSnapshot(`
        "import { AddFilled } from '@fluentui/react-icons/svg/add';
        export { AddFilled };"
      `);
    });

    it('does not emit a duplicate export for multi-binding indirect re-exports', () => {
      const source = [
        `import { AddFilled, ArrowLeftRegular, iconFilledClassName } from '@fluentui/react-icons';`,
        ``,
        `export { AddFilled, ArrowLeftRegular, iconFilledClassName };`,
      ].join('\n');

      expect(transform(source)).toMatchInlineSnapshot(`
        "import { AddFilled } from '@fluentui/react-icons/svg/add';
        import { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';
        import { iconFilledClassName } from '@fluentui/react-icons/utils';

        export { AddFilled, ArrowLeftRegular, iconFilledClassName };"
      `);
    });

    it('handles aliased import + plain export (`import { X as Y }; export { Y };`)', () => {
      const source = [
        `import { AddFilled as MyAdd, ArrowLeftRegular as MyArrow } from '@fluentui/react-icons';`,
        ``,
        `export { MyAdd, MyArrow };`,
      ].join('\n');

      expect(transform(source)).toMatchInlineSnapshot(`
        "import { AddFilled as MyAdd } from '@fluentui/react-icons/svg/add';
        import { ArrowLeftRegular as MyArrow } from '@fluentui/react-icons/svg/arrow-left';

        export { MyAdd, MyArrow };"
      `);
    });

    it('handles plain import + renamed export (`import { X }; export { X as Y };`)', () => {
      const source = [
        `import { AddFilled, ArrowLeftRegular } from '@fluentui/react-icons';`,
        ``,
        `export { AddFilled as MyAdd, ArrowLeftRegular as MyArrow };`,
      ].join('\n');

      expect(transform(source)).toMatchInlineSnapshot(`
        "import { AddFilled } from '@fluentui/react-icons/svg/add';
        import { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';

        export { AddFilled as MyAdd, ArrowLeftRegular as MyArrow };"
      `);
    });
  });

  describe('mixed indirect + direct re-exports', () => {
    it('rewrites the direct branch and leaves the indirect branch intact', () => {
      const source = [
        `import { AddFilled, bundleIcon } from '@fluentui/react-icons';`,
        ``,
        `export { AddFilled, bundleIcon };`,
        `export { ArrowLeftRegular } from '@fluentui/react-icons';`,
      ].join('\n');

      expect(transform(source)).toMatchInlineSnapshot(`
        "import { AddFilled } from '@fluentui/react-icons/svg/add';
        import { bundleIcon } from '@fluentui/react-icons/utils';

        export { AddFilled, bundleIcon };
        export { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';"
      `);
    });
  });
});
