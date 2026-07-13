import { describe, it, expect } from 'vitest';
import { transformSource } from '../src/transform';
import type { IconVariant } from '../src/modules';

const transform = (source: string, iconVariant: IconVariant = 'svg', fallbackVariant?: IconVariant) =>
  transformSource(source, { iconVariant, fallbackVariant, path: 'input.js' }).code;

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

  describe('@fluentui/react-brand-icons', () => {
    it('rewrites an unsized brand icon import to its atomic svg path', () => {
      expect(transform(`import { CalendarTaskbarFilled } from '@fluentui/react-brand-icons';`)).toBe(
        `import { CalendarTaskbarFilled } from '@fluentui/react-brand-icons/svg/calendar-taskbar';`,
      );
    });

    it('rewrites a sized brand icon import to its atomic svg path', () => {
      expect(transform(`import { CalendarTaskbar20Filled } from '@fluentui/react-brand-icons';`)).toBe(
        `import { CalendarTaskbar20Filled } from '@fluentui/react-brand-icons/svg/calendar-taskbar';`,
      );
    });

    it('rewrites a color brand icon import to its atomic svg path', () => {
      expect(transform(`import { ProjectColor } from '@fluentui/react-brand-icons';`)).toBe(
        `import { ProjectColor } from '@fluentui/react-brand-icons/svg/project';`,
      );
    });

    it('routes brand utility bindings to /utils', () => {
      expect(transform(`import { bundleIcon, createFluentIcon } from '@fluentui/react-brand-icons';`)).toBe(
        [
          `import { bundleIcon } from '@fluentui/react-brand-icons/utils';`,
          `import { createFluentIcon } from '@fluentui/react-brand-icons/utils';`,
        ].join('\n'),
      );
    });

    it('preserves local aliases on brand icon imports', () => {
      expect(transform(`import { ProjectColor as MyProject } from '@fluentui/react-brand-icons';`)).toBe(
        `import { ProjectColor as MyProject } from '@fluentui/react-brand-icons/svg/project';`,
      );
    });

    it('rewrites direct brand re-exports', () => {
      expect(transform(`export { ProjectColor } from '@fluentui/react-brand-icons';`)).toBe(
        `export { ProjectColor } from '@fluentui/react-brand-icons/svg/project';`,
      );
    });

    it('always resolves brand icons to svg regardless of iconVariant', () => {
      expect(transform(`import { ProjectColor } from '@fluentui/react-brand-icons';`, 'fonts', 'svg')).toBe(
        `import { ProjectColor } from '@fluentui/react-brand-icons/svg/project';`,
      );
    });

    it('rewrites system and brand icons in the same module independently', () => {
      const source = [
        `import { AddFilled } from '@fluentui/react-icons';`,
        `import { ProjectColor } from '@fluentui/react-brand-icons';`,
      ].join('\n');

      expect(transform(source, 'fonts', 'svg')).toBe(
        [
          `import { AddFilled } from '@fluentui/react-icons/fonts/add';`,
          `import { ProjectColor } from '@fluentui/react-brand-icons/svg/project';`,
        ].join('\n'),
      );
    });
  });

  describe('headless option', () => {
    const transformHeadless = (source: string, iconVariant: IconVariant = 'svg', fallbackVariant?: IconVariant) =>
      transformSource(source, { iconVariant, fallbackVariant, headless: true, path: 'input.js' }).code;

    it('rewrites icon imports to the headless svg atomic path', () => {
      expect(transformHeadless(`import { AddFilled } from '@fluentui/react-icons';`)).toBe(
        `import { AddFilled } from '@fluentui/react-icons/headless/svg/add';`,
      );
    });

    it('rewrites icon imports to the headless fonts atomic path', () => {
      expect(transformHeadless(`import { AddFilled } from '@fluentui/react-icons';`, 'fonts')).toBe(
        `import { AddFilled } from '@fluentui/react-icons/headless/fonts/add';`,
      );
    });

    it('routes utility bindings to /headless/utils', () => {
      expect(transformHeadless(`import { bundleIcon } from '@fluentui/react-icons';`)).toBe(
        `import { bundleIcon } from '@fluentui/react-icons/headless/utils';`,
      );
    });

    it('routes provider bindings to the shared /providers (not headless)', () => {
      expect(transformHeadless(`import { useIconContext } from '@fluentui/react-icons';`)).toBe(
        `import { useIconContext } from '@fluentui/react-icons/providers';`,
      );
    });

    it('rewrites direct re-exports to headless paths', () => {
      expect(transformHeadless(`export { AddFilled } from '@fluentui/react-icons';`)).toBe(
        `export { AddFilled } from '@fluentui/react-icons/headless/svg/add';`,
      );
    });

    it('degrades headless svg-sprite to the standard sprite with a warning', () => {
      const { code, diagnostics } = transformSource(`import { AddFilled } from '@fluentui/react-icons';`, {
        iconVariant: 'svg-sprite',
        headless: true,
        path: 'input.js',
      });

      expect(code).toBe(`import { AddFilled } from '@fluentui/react-icons/svg-sprite/add';`);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
      expect(diagnostics[0].message).toContain('headless');
    });

    it('rewrites brand icons to the headless svg atomic path', () => {
      const { code, diagnostics } = transformSource(`import { ProjectColor } from '@fluentui/react-brand-icons';`, {
        iconVariant: 'svg',
        headless: true,
        path: 'input.js',
      });

      expect(code).toBe(`import { ProjectColor } from '@fluentui/react-brand-icons/headless/svg/project';`);
      expect(diagnostics).toEqual([]);
    });

    it('routes brand utility bindings to /headless/utils', () => {
      expect(transformHeadless(`import { bundleIcon } from '@fluentui/react-brand-icons';`)).toBe(
        `import { bundleIcon } from '@fluentui/react-brand-icons/headless/utils';`,
      );
    });

    it('keeps both system and brand icons headless in the same module', () => {
      const source = [
        `import { AddFilled } from '@fluentui/react-icons';`,
        `import { ProjectColor } from '@fluentui/react-brand-icons';`,
      ].join('\n');

      const { code } = transformSource(source, { iconVariant: 'svg', headless: true, path: 'input.js' });

      expect(code).toBe(
        [
          `import { AddFilled } from '@fluentui/react-icons/headless/svg/add';`,
          `import { ProjectColor } from '@fluentui/react-brand-icons/headless/svg/project';`,
        ].join('\n'),
      );
    });
  });

  describe('color icons (SVG-only fallback)', () => {
    it('reroutes a color icon from fonts to svg (no font color glyphs)', () => {
      const { code, diagnostics } = transformSource(`import { AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'fonts',
        path: 'input.js',
      });

      expect(code).toBe(`import { AddCircleColor } from '@fluentui/react-icons/svg/add-circle';`);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
      expect(diagnostics[0].message).toContain('color icons are SVG-only');
    });

    it('reroutes a sized color icon from fonts to svg', () => {
      expect(transform(`import { AddCircle20Color } from '@fluentui/react-icons';`, 'fonts')).toBe(
        `import { AddCircle20Color } from '@fluentui/react-icons/svg/add-circle';`,
      );
    });

    it('honors a color-capable fallbackVariant (svg-sprite) for color icons under fonts', () => {
      const { code, diagnostics } = transformSource(`import { AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'fonts',
        fallbackVariant: 'svg-sprite',
        path: 'input.js',
      });

      expect(code).toBe(`import { AddCircleColor } from '@fluentui/react-icons/svg-sprite/add-circle';`);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
    });

    it('falls back to svg when neither iconVariant nor fallbackVariant is color-capable', () => {
      expect(transform(`import { AddCircleColor } from '@fluentui/react-icons';`, 'fonts', 'fonts')).toBe(
        `import { AddCircleColor } from '@fluentui/react-icons/svg/add-circle';`,
      );
    });

    it('leaves color icons untouched when iconVariant is svg-sprite (sprites support color)', () => {
      const { code, diagnostics } = transformSource(`import { AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'svg-sprite',
        path: 'input.js',
      });

      expect(code).toBe(`import { AddCircleColor } from '@fluentui/react-icons/svg-sprite/add-circle';`);
      expect(diagnostics).toEqual([]);
    });

    it('leaves color icons on svg when iconVariant is svg', () => {
      const { code, diagnostics } = transformSource(`import { AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'svg',
        path: 'input.js',
      });

      expect(code).toBe(`import { AddCircleColor } from '@fluentui/react-icons/svg/add-circle';`);
      expect(diagnostics).toEqual([]);
    });

    it('routes color and non-color specifiers in the same statement independently', () => {
      const { code } = transformSource(`import { AddFilled, AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'fonts',
        path: 'input.js',
      });

      expect(code).toBe(
        [
          `import { AddFilled } from '@fluentui/react-icons/fonts/add';`,
          `import { AddCircleColor } from '@fluentui/react-icons/svg/add-circle';`,
        ].join('\n'),
      );
    });

    it('reroutes color icons in direct re-exports too', () => {
      expect(transform(`export { AddCircleColor } from '@fluentui/react-icons';`, 'fonts')).toBe(
        `export { AddCircleColor } from '@fluentui/react-icons/svg/add-circle';`,
      );
    });

    it('resolves the headless svg build for color icons under headless fonts', () => {
      const { code, diagnostics } = transformSource(`import { AddCircleColor } from '@fluentui/react-icons';`, {
        iconVariant: 'fonts',
        headless: true,
        path: 'input.js',
      });

      expect(code).toBe(`import { AddCircleColor } from '@fluentui/react-icons/headless/svg/add-circle';`);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].message).toContain('color icons are SVG-only');
    });

    it('emits the color warning only once per module', () => {
      const source = [
        `import { AddCircleColor } from '@fluentui/react-icons';`,
        `import { AlbumColor } from '@fluentui/react-icons';`,
      ].join('\n');

      const { diagnostics } = transformSource(source, { iconVariant: 'fonts', path: 'input.js' });

      expect(diagnostics).toHaveLength(1);
    });
  });

  describe('diagnostics', () => {
    it('does not diagnose a module that only appears in a comment', () => {
      const source = [
        `// see @fluentui/react-brand-icons for product icons`,
        `import { AddFilled } from '@fluentui/react-icons';`,
      ].join('\n');

      const { code, diagnostics } = transformSource(source, {
        iconVariant: 'fonts',
        path: 'input.js',
      });

      expect(diagnostics).toEqual([]);
      expect(code).toBe(
        [
          `// see @fluentui/react-brand-icons for product icons`,
          `import { AddFilled } from '@fluentui/react-icons/fonts/add';`,
        ].join('\n'),
      );
    });

    it('does not diagnose a module that only appears in a string literal', () => {
      const source = [
        `const docs = '@fluentui/react-brand-icons';`,
        `import { AddFilled } from '@fluentui/react-icons';`,
      ].join('\n');

      const { diagnostics } = transformSource(source, { iconVariant: 'fonts', path: 'input.js' });

      expect(diagnostics).toEqual([]);
    });

    it('emits an error diagnostic for a referenced module that cannot honor the variant', () => {
      const { diagnostics } = transformSource(`import { ProjectColor } from '@fluentui/react-brand-icons';`, {
        iconVariant: 'fonts',
        path: 'input.js',
      });

      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('error');
      expect(diagnostics[0].message).toContain('@fluentui/react-brand-icons');
      expect(diagnostics[0].message).toContain('fallbackVariant');
    });

    it('leaves a module untouched when it produces an error diagnostic', () => {
      const source = `import { ProjectColor } from '@fluentui/react-brand-icons';`;

      const { code } = transformSource(source, { iconVariant: 'fonts', path: 'input.js' });

      expect(code).toBe(source);
    });

    it('emits a warning and degrades to svg when fallbackVariant is also unsupported', () => {
      const { code, diagnostics } = transformSource(`import { ProjectColor } from '@fluentui/react-brand-icons';`, {
        iconVariant: 'fonts',
        fallbackVariant: 'svg-sprite',
        path: 'input.js',
      });

      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
      expect(code).toBe(`import { ProjectColor } from '@fluentui/react-brand-icons/svg/project';`);
    });

    it('resolves and diagnoses each referenced module only once', () => {
      const source = [
        `import { ProjectColor } from '@fluentui/react-brand-icons';`,
        `import { CalendarTaskbarFilled } from '@fluentui/react-brand-icons';`,
      ].join('\n');

      const { diagnostics } = transformSource(source, { iconVariant: 'fonts', path: 'input.js' });

      expect(diagnostics).toHaveLength(1);
    });
  });

  describe('dynamic imports (cannot be atomized)', () => {
    it('warns and leaves a dynamic barrel import untouched', () => {
      const source = `const icons = await import('@fluentui/react-icons');`;

      const { code, diagnostics } = transformSource(source, { iconVariant: 'svg', path: 'input.js' });

      expect(code).toBe(source);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
      expect(diagnostics[0].message).toMatchInlineSnapshot(
        `"dynamic import of the "@fluentui/react-icons" barrel cannot be atomized, so the entire icon set will be bundled into the async chunk. Import an atomic path directly instead, e.g. import('@fluentui/react-icons/svg/add')."`,
      );
    });

    it('warns for a dynamic brand-icons barrel import', () => {
      const { diagnostics } = transformSource(`import('@fluentui/react-brand-icons').then(m => m.ProjectColor);`, {
        iconVariant: 'svg',
        path: 'input.js',
      });

      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
      expect(diagnostics[0].message).toMatchInlineSnapshot(
        `"dynamic import of the "@fluentui/react-brand-icons" barrel cannot be atomized, so the entire icon set will be bundled into the async chunk. Import an atomic path directly instead, e.g. import('@fluentui/react-brand-icons/svg/add')."`,
      );
    });

    it('does not warn for a dynamic import of an atomic path', () => {
      const source = `const { AddFilled } = await import('@fluentui/react-icons/svg/add');`;

      const { code, diagnostics } = transformSource(source, { iconVariant: 'svg', path: 'input.js' });

      expect(code).toBe(source);
      expect(diagnostics).toEqual([]);
    });

    it('does not warn for a dynamic import of a subpath barrel (not a supported bare module)', () => {
      const { diagnostics } = transformSource(`const m = await import('@fluentui/react-icons/svg');`, {
        iconVariant: 'svg',
        path: 'input.js',
      });

      expect(diagnostics).toEqual([]);
    });

    it('does not warn for a dynamic import with a non-static specifier', () => {
      const source = [`const pkg = '@fluentui/react-icons';`, `const m = await import(pkg);`].join('\n');

      const { diagnostics } = transformSource(source, { iconVariant: 'svg', path: 'input.js' });

      expect(diagnostics).toEqual([]);
    });

    it('warns once per dynamic barrel and still rewrites sibling static imports', () => {
      const source = [
        `import { AddFilled } from '@fluentui/react-icons';`,
        `const lazy = () => import('@fluentui/react-icons');`,
      ].join('\n');

      const { code, diagnostics } = transformSource(source, { iconVariant: 'svg', path: 'input.js' });

      expect(code).toBe(
        [
          `import { AddFilled } from '@fluentui/react-icons/svg/add';`,
          `const lazy = () => import('@fluentui/react-icons');`,
        ].join('\n'),
      );
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
    });
  });

  describe('allowDynamicImports', () => {
    const rewrite = (source: string, extra: Partial<Parameters<typeof transformSource>[1]> = {}) =>
      transformSource(source, { iconVariant: 'svg', allowDynamicImports: true, path: 'input.js', ...extra });

    describe('await destructure', () => {
      it('rewrites a single-name await destructure to the atomic import', () => {
        const { code, diagnostics } = rewrite(`const { AddRegular } = await import('@fluentui/react-icons');`);
        expect(code).toBe(`const { AddRegular } = await import('@fluentui/react-icons/svg/add');`);
        expect(diagnostics).toEqual([]);
      });

      it('groups multiple names from the same atom into one import', () => {
        const { code } = rewrite(`const { AddFilled, AddRegular } = await import('@fluentui/react-icons');`);
        expect(code).toBe(`const { AddFilled, AddRegular } = await import('@fluentui/react-icons/svg/add');`);
      });

      it('splits names from different atoms into a positional Promise.all', () => {
        const { code } = rewrite(`const { AddFilled, ArrowLeftRegular } = await import('@fluentui/react-icons');`);
        expect(code).toBe(
          `const [{ AddFilled }, { ArrowLeftRegular }] = await Promise.all([import('@fluentui/react-icons/svg/add'), import('@fluentui/react-icons/svg/arrow-left')]);`,
        );
      });

      it('preserves renamed bindings', () => {
        const { code } = rewrite(`const { AddFilled: myAdd } = await import('@fluentui/react-icons');`);
        expect(code).toBe(`const { AddFilled: myAdd } = await import('@fluentui/react-icons/svg/add');`);
      });

      it('routes utility bindings to /utils alongside icons', () => {
        const { code } = rewrite(`const { AddFilled, bundleIcon } = await import('@fluentui/react-icons');`);
        expect(code).toBe(
          `const [{ AddFilled }, { bundleIcon }] = await Promise.all([import('@fluentui/react-icons/svg/add'), import('@fluentui/react-icons/utils')]);`,
        );
      });

      it('honors the fonts variant', () => {
        const { code } = rewrite(`const { AddFilled } = await import('@fluentui/react-icons');`, {
          iconVariant: 'fonts',
        });
        expect(code).toBe(`const { AddFilled } = await import('@fluentui/react-icons/fonts/add');`);
      });

      it('reroutes color icons off fonts per name', () => {
        const { code } = rewrite(`const { AddFilled, AddCircleColor } = await import('@fluentui/react-icons');`, {
          iconVariant: 'fonts',
        });
        expect(code).toBe(
          `const [{ AddFilled }, { AddCircleColor }] = await Promise.all([import('@fluentui/react-icons/fonts/add'), import('@fluentui/react-icons/svg/add-circle')]);`,
        );
      });
    });

    describe('.then destructure', () => {
      it('rewrites the specifier for a single-atom .then object pattern', () => {
        const { code, diagnostics } = rewrite(`import('@fluentui/react-icons').then(({ AddFilled }) => AddFilled);`);
        expect(code).toBe(`import('@fluentui/react-icons/svg/add').then(({ AddFilled }) => AddFilled);`);
        expect(diagnostics).toEqual([]);
      });

      it('rewrites a multi-atom .then into Promise.all with a positional param', () => {
        const { code } = rewrite(
          `import('@fluentui/react-icons').then(({ AddFilled, ArrowLeftRegular }) => AddFilled);`,
        );
        expect(code).toBe(
          `Promise.all([import('@fluentui/react-icons/svg/add'), import('@fluentui/react-icons/svg/arrow-left')]).then(([{ AddFilled }, { ArrowLeftRegular }]) => AddFilled);`,
        );
      });
    });

    describe('bail cases (left untouched, still warn)', () => {
      it('does not rewrite a namespace binding', () => {
        const source = `const icons = await import('@fluentui/react-icons');`;
        const { code, diagnostics } = rewrite(source);
        expect(code).toBe(source);
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].level).toBe('warning');
      });

      it('does not rewrite a `.then(m => m.X)` namespace access', () => {
        const source = `import('@fluentui/react-icons').then((m) => m.AddFilled);`;
        const { code, diagnostics } = rewrite(source);
        expect(code).toBe(source);
        expect(diagnostics).toHaveLength(1);
      });

      it('does not rewrite a rest element', () => {
        const source = `const { AddFilled, ...rest } = await import('@fluentui/react-icons');`;
        const { code, diagnostics } = rewrite(source);
        expect(code).toBe(source);
        expect(diagnostics).toHaveLength(1);
      });

      it('does not rewrite a defaulted property', () => {
        const source = `const { AddFilled = null } = await import('@fluentui/react-icons');`;
        const { code } = rewrite(source);
        expect(code).toBe(source);
      });

      it('leaves atomic dynamic imports untouched (no warning)', () => {
        const source = `const { AddFilled } = await import('@fluentui/react-icons/svg/add');`;
        const { code, diagnostics } = rewrite(source);
        expect(code).toBe(source);
        expect(diagnostics).toEqual([]);
      });
    });

    it('is off by default — barrel dynamic imports only warn', () => {
      const source = `const { AddFilled } = await import('@fluentui/react-icons');`;
      const { code, diagnostics } = transformSource(source, { iconVariant: 'svg', path: 'input.js' });
      expect(code).toBe(source);
      expect(diagnostics).toHaveLength(1);
      expect(diagnostics[0].level).toBe('warning');
    });
  });
});
