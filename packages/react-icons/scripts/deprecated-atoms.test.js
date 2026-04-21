// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { handleDeprecatedColorAtoms, handleDeprecatedTextColorAtoms } from './deprecated-atoms';

describe(`deprecated-atoms`, () => {
  const tmpDest = path.join(__dirname, 'tmp-deprecated-atoms-test');

  beforeEach(() => {
    fs.mkdirSync(tmpDest, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(tmpDest)) {
      fs.rmSync(tmpDest, { recursive: true, force: true });
    }
  });

  describe(`handleDeprecatedColorAtoms`, () => {
    it(`should skip if color.tsx does not exist`, () => {
      // No color.tsx file created - should skip gracefully
      handleDeprecatedColorAtoms(tmpDest, 'svg');

      // Should not create any new files
      const files = fs.readdirSync(tmpDest);
      expect(files).toHaveLength(0);
    });

    it(`should create individual deprecated atom files for each export in color.tsx`, () => {
      const colorFileContent = `"use client";
import { createFluentIcon } from "../utils/createFluentIcon";

export const ColorRegular = /*#__PURE__*/ createFluentIcon("ColorRegular", []);
export const ColorFilled = /*#__PURE__*/ createFluentIcon("ColorFilled", []);
export const Color16Filled = /*#__PURE__*/ createFluentIcon("Color16Filled", []);
export const Color24Regular = /*#__PURE__*/ createFluentIcon("Color24Regular", []);
`;

      fs.writeFileSync(path.join(tmpDest, 'color.tsx'), colorFileContent, 'utf8');

      handleDeprecatedColorAtoms(tmpDest, 'svg');

      const files = fs.readdirSync(tmpDest);

      expect(files).toContain('color-regular.tsx');
      expect(files).toContain('color-filled.tsx');
      expect(files).toContain('color-16-filled.tsx');
      expect(files).toContain('color-24-regular.tsx');
    });

    it(`should include correct export with deprecation message with type in generated files`, () => {
      const colorFileContent = `"use client";
import { createFluentIcon } from "../utils/createFluentIcon";

export const Color16Filled = /*#__PURE__*/ createFluentIcon("Color16Filled", []);
`;

      fs.writeFileSync(path.join(tmpDest, 'color.tsx'), colorFileContent, 'utf8');

      handleDeprecatedColorAtoms(tmpDest, 'svg');

      const generatedContent = fs.readFileSync(path.join(tmpDest, 'color-16-filled.tsx'), 'utf8');
      expect(generatedContent).toMatchInlineSnapshot(`
        ""use client";
        import { createFluentIcon } from "../utils/createFluentIcon";

        /** @deprecated use \`@fluentui/svg/color\` import. This was generated for backward compatibility and will be removed in next major release */
        export const Color16Filled = /*#__PURE__*/ createFluentIcon("Color16Filled", []);
        "
      `);
    });

    it(`should not overwrite color.tsx`, () => {
      const originalContent = `"use client";
import { createFluentIcon } from "../utils/createFluentIcon";

export const Color16Filled = /*#__PURE__*/ createFluentIcon("Color16Filled", []);
`;

      fs.writeFileSync(path.join(tmpDest, 'color.tsx'), originalContent, 'utf8');

      handleDeprecatedColorAtoms(tmpDest, 'svg');

      // Original color.tsx should remain unchanged
      const colorContent = fs.readFileSync(path.join(tmpDest, 'color.tsx'), 'utf8');
      expect(colorContent).toBe(originalContent);
    });
  });

  describe(`handleDeprecatedTextColorAtoms`, () => {
    it(`should skip if text-color.tsx does not exist`, () => {
      // Create text.tsx but no text-color.tsx
      fs.writeFileSync(path.join(tmpDest, 'text.tsx'), '"use client";\n', 'utf8');

      handleDeprecatedTextColorAtoms(tmpDest, 'svg');

      // text.tsx should remain unchanged
      const textContent = fs.readFileSync(path.join(tmpDest, 'text.tsx'), 'utf8');
      expect(textContent).toBe('"use client";\n');
    });

    it(`should append deprecated exports from text-color.tsx to text.tsx`, () => {
      const textColorFileContent = `"use client";
import { createFluentIcon } from "../utils/createFluentIcon";

export const TextColor16Filled = /*#__PURE__*/ createFluentIcon("TextColor16Filled", []);
export const TextColor24Regular = /*#__PURE__*/ createFluentIcon("TextColor24Regular", []);
`;
      const textFileContent = `"use client";
import { createFluentIcon } from "../utils/createFluentIcon";

export const Text16Filled = /*#__PURE__*/ createFluentIcon("Text16Filled", []);
`;

      fs.writeFileSync(path.join(tmpDest, 'text-color.tsx'), textColorFileContent, 'utf8');
      fs.writeFileSync(path.join(tmpDest, 'text.tsx'), textFileContent, 'utf8');

      handleDeprecatedTextColorAtoms(tmpDest, 'svg');

      const updatedTextContent = fs.readFileSync(path.join(tmpDest, 'text.tsx'), 'utf8');
      expect(updatedTextContent).toMatchInlineSnapshot(`
        ""use client";
        import { createFluentIcon } from "../utils/createFluentIcon";

        export const Text16Filled = /*#__PURE__*/ createFluentIcon("Text16Filled", []);

        /** @deprecated use \`@fluentui/svg/text-color\` import. This was generated for backward compatibility and will be removed in next major release */
        export const TextColor16Filled = /*#__PURE__*/ createFluentIcon("TextColor16Filled", []);
        /** @deprecated use \`@fluentui/svg/text-color\` import. This was generated for backward compatibility and will be removed in next major release */
        export const TextColor24Regular = /*#__PURE__*/ createFluentIcon("TextColor24Regular", []);
        "
      `);
    });
  });
});
