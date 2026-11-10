import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { transformSync } from 'esbuild';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

describe('React Native SVG generation', () => {
  const styles = ['regular', 'filled', 'light', 'color'];
  let directory;
  let generated;
  let index;
  let output;
  let exports;
  let load;
  const fillerNames = [];
  const sharedData = 'M1 2h3v4h-3z'.repeat(30);

  beforeAll(() => {
    directory = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-rn-svg-'));
    const source = path.join(directory, 'source');
    output = path.join(directory, 'output');
    fs.mkdirSync(source);
    const fixtures = {
      square_20_filled: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="M1 2h3"/></svg>',
      square_24_filled: '<svg width="24" height="24" viewBox="0, 0, 24, 24"><path fill="#212121" d="M1 2h3"/></svg>',
      rectangle_24_regular: '<svg width="24" height="16" viewBox="0 0 24 16"><path d="M1 2h3"/></svg>',
      offset_20_regular: '<svg width="20" height="20" viewBox="1 2 18 17"><path d="M1 2h3"/></svg>',
      unusual_24_regular: '<svg width="24" height="24" viewBox="0 0 48 48"><path d="M1 2h3"/></svg>',
      percent_24_regular: '<svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M1 2h3"/></svg>',
      paint_20_color:
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><defs><linearGradient id="ic_fluent_paint_20_color__a"><stop stop-color="#212121"/><stop offset="1" stop-color="#ff0000"/></linearGradient></defs><path fill="url(#ic_fluent_paint_20_color__a)" d="M1 2h3"/><path fill="#212121" d="M2 3h4"/></svg>',
      nested_20_regular:
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="6" viewBox="0 0 8 6"><path d="M1 2h3"/></svg></svg>',
      mixed_20_filled:
        '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="M1 2h3"/><path fill="none" d="M2 3h4"/></svg>',
      clipped_20_filled:
        '<svg width="20" height="20" viewBox="0 0 20 20"><defs><clipPath id="clip"><path fill="#212121" d="M1 2h3"/></clipPath></defs><path clip-path="url(#clip)" fill="#212121" d="M2 3h4"/></svg>',
      shapes_20_regular:
        '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" fill-rule="evenodd" opacity=".5" d="M1 2h3"/><circle fill="#212121" cx="5" cy="5" r="2"/></svg>',
      stroke_20_regular:
        '<svg width="20" height="20" viewBox="0 0 20 20"><path stroke="#212121" fill="#212121" d="M1 2h3"/></svg>',
      shared_20_filled: `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/></svg>`,
      shared_20_color: `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/><path fill="#ff0000" d="${sharedData}"/></svg>`,
      barely_20_regular: `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${'M1 2h3v4h-3z'.repeat(5)}"/></svg>`,
      fps_120_24_filled: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" d="${sharedData}"/></svg>`,
      zzshared_20_regular: `<svg width="20" height="20" viewBox="1 2 20 20"><path fill="#212121" d="${sharedData}"/></svg>`,
      sun_20_light: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="M1 2h3"/></svg>',
      sun_24_light: '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" d="M1 2h3"/></svg>',
      // Sorts first, so the 3-component filler groups below straddle the 500-component chunk size.
      a_24_filled: '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" d="M1 2h3"/></svg>',
    };
    for (let i = 0; i < 501; i++) {
      const name = String.fromCharCode(97 + Math.floor(i / 26), 97 + (i % 26));
      fixtures[`filler_${name}_20_filled`] = fixtures.square_20_filled;
      fixtures[`filler_${name}_24_filled`] = fixtures.square_24_filled;
      const pascal = `Filler${name[0].toUpperCase()}${name[1]}`;
      fillerNames.push([`${pascal}Filled`, `${pascal}20Filled`, `${pascal}24Filled`]);
    }
    for (const [name, svg] of Object.entries(fixtures)) {
      fs.writeFileSync(path.join(source, `ic_fluent_${name}.svg`), svg);
    }
    const result = spawnSync(
      process.execPath,
      [
        '--disable-warning=MODULE_TYPELESS_PACKAGE_JSON',
        path.resolve(__dirname, 'convert-rn.js'),
        `--source=${source}`,
        `--dest=${output}`,
      ],
      { encoding: 'utf8' },
    );
    expect(result.status, result.stderr).toBe(0);
    generated = styles
      .flatMap((style) => readChunks(style))
      .map(([, code]) => code)
      .join('\n');
    index = fs.readFileSync(path.join(output, 'index.tsx'), 'utf8');
    const jsx = (type, props) => ({ type, props });
    const modules = new Map();
    load = (file) => {
      if (modules.has(file)) {
        return modules.get(file).exports;
      }
      const code = transformSync(fs.readFileSync(file, 'utf8'), {
        loader: 'tsx',
        jsx: 'automatic',
        format: 'cjs',
      }).code;
      const module = { exports: {} };
      modules.set(file, module);
      const require = (specifier) => {
        if (specifier === 'react/jsx-runtime') return { jsx, jsxs: jsx };
        if (specifier === 'react-native-svg') return new Proxy({}, { get: (_, name) => name });
        if (specifier === 'react') return { createElement: jsx };
        const resolved = path.resolve(path.dirname(file), specifier);
        const source = resolved.startsWith(path.join(output, 'utils'))
          ? path.join(__dirname, 'src', path.relative(output, resolved))
          : resolved;
        return load(
          ['.tsx', '.ts', '/index.ts'].map((extension) => source + extension).find((file) => fs.existsSync(file)),
        );
      };
      new Function('require', 'module', 'exports', code)(require, module, module.exports);
      return module.exports;
    };
    exports = load(path.join(output, 'index.tsx'));
  });

  afterAll(() => {
    if (directory) {
      fs.rmSync(directory, { recursive: true, force: true });
    }
  });

  const chunkNumber = (file) => Number(file.match(/\d+/)[0]);
  const readChunks = (style) =>
    fs
      .readdirSync(path.join(output, style))
      .filter((file) => file.startsWith('chunk-'))
      .sort((a, b) => chunkNumber(a) - chunkNumber(b))
      .map((file) => [file, fs.readFileSync(path.join(output, style, file), 'utf8')]);
  const component = (code, name) => code.match(new RegExp(`export const ${name} = [\\s\\S]*?(?=\\n\\n|$)`))?.[0];

  it('exports typed components directly with simple paths inheriting primaryFill from FluentSvg', () => {
    const icon = component(generated, 'SquareFilled');
    expect(icon).toContain('/*#__PURE__*/(props: FluentIconsProps<SvgProps>) =>');
    expect(icon).not.toContain('primaryFill');
    expect(icon).toContain('<Path d=');
    expect(generated).toContain('import { FluentSvg } from "../utils";');
    expect(generated).toContain('import type { SvgProps } from "react-native-svg";');
    expect(generated).toContain('import type { FluentIconsProps } from "../utils";');
    expect(generated).not.toMatch(/wrapIcon|displayName|const \w+Icon =|export \{/);
    expect(index).not.toContain('SquareFilled');
    expect(index).toContain("export { default as wrapIcon } from './utils/wrapIcon'");
  });

  it('generates style entry points and exports every chunk directly from the root without nested barrels', () => {
    expect(fs.readdirSync(output).sort()).toEqual(['color', 'filled', 'index.tsx', 'light', 'regular']);
    const rootExports = [];
    for (const style of styles) {
      const chunks = readChunks(style).map(([file]) => file.replace('.tsx', ''));
      rootExports.push(...chunks.map((chunk) => `export * from './${style}/${chunk}'`));
      expect(fs.readFileSync(path.join(output, style, 'index.ts'), 'utf8')).toBe(
        chunks.map((chunk) => `export * from './${chunk}'`).join('\n') + '\n',
      );
      expect(fs.readdirSync(path.join(output, style)).sort()).toEqual(
        [...chunks.map((chunk) => `${chunk}.tsx`), 'index.ts'].sort(),
      );
      const suffix = style[0].toUpperCase() + style.slice(1);
      const names = Object.keys(load(path.join(output, style, 'index.ts')));
      expect(names.length).toBeGreaterThan(0);
      for (const name of names) {
        expect(name.endsWith(suffix), `${name} is exported from the ${style} submodule`).toBe(true);
        expect(exports[name]).toBe(load(path.join(output, style, 'index.ts'))[name]);
      }
    }
    expect(index.match(/^export \* from .+$/gm)).toEqual(rootExports);
    expect(Object.keys(load(path.join(output, 'filled', 'index.ts')))).toEqual(
      expect.arrayContaining(['SquareFilled', 'Square20Filled', 'Square24Filled']),
    );
    expect(Object.keys(load(path.join(output, 'light', 'index.ts'))).sort()).toEqual([
      'Sun20Light',
      'Sun24Light',
      'SunLight',
    ]);
  });

  it('keeps every size of an icon in the same chunk, even where a chunk fills up', () => {
    const chunks = readChunks('filled');
    expect(chunks.length).toBeGreaterThan(2);
    for (const [, code] of chunks) {
      expect(code.match(/^export const /gm).length).toBeLessThanOrEqual(500);
    }
    const chunkOf = (name) =>
      chunks.filter(([, code]) => code.includes(`export const ${name} = `)).map(([file]) => file);
    for (const names of [
      ...fillerNames,
      ['SquareFilled', 'Square20Filled', 'Square24Filled'],
      ['SharedFilled', 'Shared20Filled'],
    ]) {
      expect(new Set(names.flatMap(chunkOf)).size, names.join()).toBe(1);
      expect(names.flatMap(chunkOf)).toHaveLength(names.length);
    }
  });

  it('retains literal fills, definition contexts, and primaryFill references outside fill attributes', () => {
    for (const name of ['MixedFilled', 'ClippedFilled', 'StrokeRegular']) {
      expect(component(generated, name)).toContain('const { primaryFill = "currentColor" } = props;');
    }
    expect(component(generated, 'MixedFilled')).toContain('<Path fill={primaryFill}');
    expect(component(generated, 'MixedFilled')).toContain('fill="none"');
    expect(component(generated, 'ClippedFilled')).toContain('<Path fill={primaryFill}');
    expect(component(generated, 'StrokeRegular')).toContain('stroke={primaryFill}');
    expect(component(generated, 'StrokeRegular')).not.toContain('fill={primaryFill}');
    const shapes = component(generated, 'ShapesRegular');
    expect(shapes).not.toContain('primaryFill');
    expect(shapes).toContain('fillRule="evenodd"');
    expect(shapes).toContain('opacity={0.5}');
    expect(shapes).toContain('<Circle');
  });

  it('omits default resizable geometry and uses size for conformant square sized icons', () => {
    expect(component(generated, 'SquareFilled')).toContain('<FluentSvg {...props}>');
    expect(component(generated, 'Square20Filled')).toContain('<FluentSvg size={20} {...props}>');
    expect(component(generated, 'Square24Filled')).toContain('<FluentSvg size={24} {...props}>');
  });

  it('preserves non-square dimensions, nonconformant viewBoxes, and nested SVG geometry', () => {
    expect(component(generated, 'Rectangle24Regular')).toContain(
      '<FluentSvg width={24} height={16} viewBox="0 0 24 16" {...props}>',
    );
    expect(component(generated, 'OffsetRegular')).toContain('<FluentSvg viewBox="1 2 18 17" {...props}>');
    expect(component(generated, 'Offset20Regular')).toContain('<FluentSvg size={20} viewBox="1 2 18 17" {...props}>');
    expect(component(generated, 'Unusual24Regular')).toContain('<FluentSvg size={24} viewBox="0 0 48 48" {...props}>');
    expect(component(generated, 'Percent24Regular')).toContain(
      '<FluentSvg width="100%" height="100%" viewBox="0 0 24 24" {...props}>',
    );
    expect(component(generated, 'Nested20Regular')).toContain('<Svg width={8} height={6} viewBox="0 0 8 6"');
    expect(component(generated, 'Nested20Regular')).not.toMatch(/xmlns/i);
    expect(generated).toMatch(/import \{ [^}]*\bSvg\b[^}]*\} from "react-native-svg"/);
  });

  it('preserves multicolor artwork and gradients without substituting primaryFill', () => {
    const icon = component(generated, 'PaintColor');
    expect(icon).toContain('<FluentSvg {...props}>');
    expect(icon).toContain('<Path fill="#212121"');
    expect(icon).toContain('<Path fill="url(#a)"');
    expect(icon).toContain('<LinearGradient id="a"');
    expect(icon).not.toContain('ic_fluent_');
    expect(icon).toContain('stopColor="#ff0000"');
    expect(icon).not.toContain('primaryFill');
  });

  it('shares path strings between colocated direct components without sharing JSX or adding an icon layer', () => {
    const icon = component(generated, 'SharedFilled');
    const sizedIcon = component(generated, 'Shared20Filled');
    expect(icon).toContain('d={Shared20FilledPath0}');
    expect(sizedIcon).toContain('d={Shared20FilledPath0}');
    expect(sizedIcon).toContain('<FluentSvg size={20} {...props}>');
    expect(icon).toContain('<FluentSvg {...props}>');
    expect(generated).toContain(`const Shared20FilledPath0 = "${sharedData}";`);
    for (const name of ['SharedFilled', 'Shared20Filled']) {
      const element = exports[name]({});
      expect(exports[name].name).toBe(name);
      expect(element.type.name).toBe('FluentSvg');
      expect(element.props.children.type).toBe('Path');
      expect(element.props.children.props.d).toBe(sharedData);
    }
    for (const name of ['SharedColor', 'Shared20Color']) {
      const children = exports[name]({}).props.children;
      expect(children.map((child) => child.props.d)).toEqual([sharedData, sharedData]);
      expect(children.map((child) => child.props.fill)).toEqual(['#212121', '#ff0000']);
    }
    expect(component(generated, 'Square20Filled')).toContain('d="M1 2h3"');
    expect(component(generated, 'Barely20Regular')).toContain('<Path d="');
    expect(generated).not.toContain('const Barely20RegularPath');
    expect(component(generated, 'Fps124Filled')).toContain(`d="${sharedData}"`);
    expect(component(generated, 'Fps12024Filled')).toContain(`d="${sharedData}"`);
  });

  it('resolves resizable and sized names through the submodule and root export-star barrels', () => {
    for (const [name, size] of [
      ['ZzsharedRegular', 24],
      ['Zzshared20Regular', 20],
    ]) {
      for (const module of [exports, load(path.join(output, 'regular', 'index.ts'))]) {
        const element = module[name]({});
        const svg = element.type(element.props);
        expect(svg.props.width).toBe(size);
        expect(svg.props.height).toBe(size);
        expect(svg.props.viewBox).toBe('1 2 20 20');
        expect(svg.props.children.props.d).toBe(sharedData);
      }
    }
  });

  it('preserves primaryFill precedence and geometry overrides for inherited paths', () => {
    for (const name of ['SharedFilled', 'Shared20Filled']) {
      for (const [props, fill] of [
        [{}, 'currentColor'],
        [{ fill: 'blue' }, 'currentColor'],
        [{ primaryFill: undefined, fill: 'blue' }, 'currentColor'],
        [{ primaryFill: 'red', fill: 'blue' }, 'red'],
        [{ primaryFill: null }, null],
        [{ primaryFill: 'none' }, 'none'],
      ]) {
        const element = exports[name]({ ...props, title: 'Icon', width: 30, height: 40, viewBox: '0 0 10 10' });
        const svg = element.type(element.props);
        expect(svg.props.fill).toBe(fill);
        expect(svg.props['aria-label']).toBe('Icon');
        expect(svg.props).toMatchObject({ width: 30, height: 40, viewBox: '0 0 10 10' });
        expect(svg.props.children.props).not.toHaveProperty('fill');
      }
    }
  });
});
