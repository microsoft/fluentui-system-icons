import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { transformSync } from 'esbuild';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { generateIconComponents } from './src/codegen/index.ts';

describe('React Native SVG conversion', () => {
  const convert = (name, svg) => generateIconComponents({ name, svg });
  const sharedData = 'M1 2h3v4h-3z'.repeat(10);

  it('inherits simple fills and preserves shape attributes', () => {
    expect(
      convert(
        'shapes_20_regular',
        '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" fill-rule="evenodd" opacity=".5" d="M1 2h3"/><circle fill="#212121" cx="5" cy="5" r="2"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const ShapesRegular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path fillRule="evenodd" opacity={0.5} d="M1 2h3" /><Circle cx={5} cy={5} r={2} /></FluentSvg>;
      ",
        "
      export const Shapes20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path fillRule="evenodd" opacity={0.5} d="M1 2h3" /><Circle cx={5} cy={5} r={2} /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves mixed literal and primary fills', () => {
    expect(
      convert(
        'mixed_20_filled',
        '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="M1 2h3"/><path fill="none" d="M2 3h4"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const MixedFilled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg {...props}><Path fill={primaryFill} d="M1 2h3" /><Path fill="none" d="M2 3h4" /></FluentSvg>;
      };
      ",
        "
      export const Mixed20Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg size={20} {...props}><Path fill={primaryFill} d="M1 2h3" /><Path fill="none" d="M2 3h4" /></FluentSvg>;
      };
      ",
      ]
    `);
  });

  it('preserves fills in definition contexts', () => {
    expect(
      convert(
        'clipped_20_filled',
        '<svg width="20" height="20" viewBox="0 0 20 20"><defs><clipPath id="clip"><path fill="#212121" d="M1 2h3"/></clipPath></defs><path clip-path="url(#clip)" fill="#212121" d="M2 3h4"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const ClippedFilled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg {...props}><Defs><ClipPath id="clip"><Path fill={primaryFill} d="M1 2h3" /></ClipPath></Defs><Path clipPath="url(#clip)" fill={primaryFill} d="M2 3h4" /></FluentSvg>;
      };
      ",
        "
      export const Clipped20Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg size={20} {...props}><Defs><ClipPath id="clip"><Path fill={primaryFill} d="M1 2h3" /></ClipPath></Defs><Path clipPath="url(#clip)" fill={primaryFill} d="M2 3h4" /></FluentSvg>;
      };
      ",
      ]
    `);
  });

  it('preserves primaryFill references outside fill attributes', () => {
    expect(
      convert(
        'stroke_20_regular',
        '<svg width="20" height="20" viewBox="0 0 20 20"><path stroke="#212121" fill="#212121" d="M1 2h3"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const StrokeRegular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg {...props}><Path stroke={primaryFill} d="M1 2h3" /></FluentSvg>;
      };
      ",
        "
      export const Stroke20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg size={20} {...props}><Path stroke={primaryFill} d="M1 2h3" /></FluentSvg>;
      };
      ",
      ]
    `);
  });

  it('omits default geometry for resizable and sized icons', () => {
    expect(
      convert(
        'square_20_filled',
        '<svg width="20" height="20" viewBox="0, 0, 20, 20"><path fill="#212121" d="M1 2h3"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const SquareFilled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
        "
      export const Square20Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves non-square dimensions', () => {
    expect(convert('rectangle_24_regular', '<svg width="24" height="16" viewBox="0 0 24 16"><path d="M1 2h3"/></svg>'))
      .toMatchInlineSnapshot(`
      [
        "
      export const Rectangle24Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg width={24} height={16} viewBox="0 0 24 16" {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves offset viewBoxes', () => {
    expect(convert('offset_20_regular', '<svg width="20" height="20" viewBox="1 2 18 17"><path d="M1 2h3"/></svg>'))
      .toMatchInlineSnapshot(`
      [
        "
      export const OffsetRegular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg viewBox="1 2 18 17" {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
        "
      export const Offset20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} viewBox="1 2 18 17" {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves nonconformant viewBoxes', () => {
    expect(convert('unusual_24_regular', '<svg width="24" height="24" viewBox="0 0 48 48"><path d="M1 2h3"/></svg>'))
      .toMatchInlineSnapshot(`
      [
        "
      export const Unusual24Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={24} viewBox="0 0 48 48" {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves percentage dimensions', () => {
    expect(
      convert('percent_24_regular', '<svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M1 2h3"/></svg>'),
    ).toMatchInlineSnapshot(`
      [
        "
      export const Percent24Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg width="100%" height="100%" viewBox="0 0 24 24" {...props}><Path d="M1 2h3" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('preserves sized nested SVG geometry while removing namespaces', () => {
    expect(
      convert(
        'nested_20_regular',
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="6" viewBox="0 0 8 6"><path d="M1 2h3"/></svg></svg>',
      )[1],
    ).toMatchInlineSnapshot(`
      "
      export const Nested20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Svg width={8} height={6} viewBox="0 0 8 6" {...props}><Path d="M1 2h3" /></Svg></FluentSvg>;
      "
    `);
  });

  it('preserves color artwork and gradients while shortening IDs', () => {
    expect(
      convert(
        'paint_20_color',
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><defs><linearGradient id="ic_fluent_paint_20_color__a"><stop stop-color="#212121"/><stop offset="1" stop-color="#ff0000"/></linearGradient></defs><path fill="url(#ic_fluent_paint_20_color__a)" d="M1 2h3"/><path fill="#212121" d="M2 3h4"/></svg>',
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const PaintColor = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Defs><LinearGradient id="a"><Stop stopColor="#212121" /><Stop offset={1} stopColor="#ff0000" /></LinearGradient></Defs><Path fill="url(#a)" d="M1 2h3" /><Path fill="#212121" d="M2 3h4" /></FluentSvg>;
      ",
        "
      export const Paint20Color = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Defs><LinearGradient id="a"><Stop stopColor="#212121" /><Stop offset={1} stopColor="#ff0000" /></LinearGradient></Defs><Path fill="url(#a)" d="M1 2h3" /><Path fill="#212121" d="M2 3h4" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('shares long paths between resizable and sized components', () => {
    expect(
      convert(
        'shared_20_filled',
        `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/></svg>`,
      ),
    ).toMatchInlineSnapshot(`
      [
        "const Shared20FilledPath0 = "M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z";

      export const SharedFilled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path d={Shared20FilledPath0} /></FluentSvg>;
      ",
        "
      export const Shared20Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path d={Shared20FilledPath0} /></FluentSvg>;
      ",
      ]
    `);
  });

  it('shares repeated paths in color artwork', () => {
    expect(
      convert(
        'shared_20_color',
        `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/><path fill="#ff0000" d="${sharedData}"/></svg>`,
      ),
    ).toMatchInlineSnapshot(`
      [
        "const Shared20ColorPath0 = "M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z";

      export const SharedColor = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path fill="#212121" d={Shared20ColorPath0} /><Path fill="#ff0000" d={Shared20ColorPath0} /></FluentSvg>;
      ",
        "
      export const Shared20Color = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path fill="#212121" d={Shared20ColorPath0} /><Path fill="#ff0000" d={Shared20ColorPath0} /></FluentSvg>;
      ",
      ]
    `);
  });

  it('keeps short paths inline when sharing would increase size', () => {
    expect(
      convert(
        'barely_20_regular',
        `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${'M1 2h3v4h-3z'.repeat(5)}"/></svg>`,
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const BarelyRegular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path d="M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z" /></FluentSvg>;
      ",
        "
      export const Barely20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path d="M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z" /></FluentSvg>;
      ",
      ]
    `);
  });

  it('does not share paths with legacy aliases for names containing 20', () => {
    expect(
      convert(
        'fps_120_24_filled',
        `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" d="${sharedData}"/></svg>`,
      ),
    ).toMatchInlineSnapshot(`
      [
        "
      export const Fps124Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg viewBox="0 0 24 24" {...props}><Path d="M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z" /></FluentSvg>;
      ",
        "
      export const Fps12024Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={24} {...props}><Path d="M1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3zM1 2h3v4h-3z" /></FluentSvg>;
      ",
      ]
    `);
  });
});

describe('React Native SVG generation', () => {
  const styles = ['regular', 'filled', 'light', 'color'];
  let directory;
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
      shared_20_filled: `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/></svg>`,
      shared_20_color: `<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="${sharedData}"/><path fill="#ff0000" d="${sharedData}"/></svg>`,
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

  it('renders shared paths in direct components', () => {
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
