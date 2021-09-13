// @ts-check
const path = require('path');
// https://github.com/jprichardson/node-fs-extra/blob/master/docs
const fs = require('fs');
// https://www.npmjs.com/package/glob
const glob = require('glob');

const outDir = path.join(__dirname, '/lib');
// NOTE: esm comes first to increase chances of it being suggested first in auto-imports
const outTypes = ['esm', 'cjs'];

const rootInPackage = '@fluentui/react-icons/lib';
// make a top-level module declaration
const modules = [
  `declare module '@fluentui/react-icons' {
  export * from '${rootInPackage}/esm/index';
}`,
];

// make a module declaration for each .d.ts file (and delete the original)
for (const outType of outTypes) {
  // This gives a list of relative paths like 'esm/components/Accessibility16Filled.d.ts'
  const files = glob.sync(`${outType}/**/*.d.ts`, { cwd: outDir });

  files.forEach((dtsPath) => {
    const fullPath = path.join(outDir, dtsPath);
    let dtsContents = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
    fs.unlink(fullPath, (err => {
        if (err) { 
            console.log(err);
        }
    })); // delete original

    // 'esm/components/Accessibility16Filled' or 'esm/lib/index'
    const modulePath = path.posix.normalize(dtsPath).replace('.d.ts', '');
    const pathParts = modulePath.split('/');
    // no relative paths are allowed within module declarations in .d.ts, so make them absolute
    // (this could in theory be done more generically with path utilities)
    dtsContents = dtsContents
      // replace ../ with absolute path (assuming there can only be one ../ segment per path)
      .replace(/(?<=['"])\.\.\//g, `${rootInPackage}/${outType}/`)
      // replace ./ with absolute path (same assumption)
      .replace(/(?<=['"'])\.\//g, `${rootInPackage}/${pathParts.slice(0, -1).join('/')}/`)
      // remove "declare"
      .replace(/\bdeclare /gm, '');

    modules.push(`declare module '${rootInPackage}/${modulePath}' {\n${dtsContents}}`);
  });
}

const indexFile = path.join(outDir, 'index.d.ts');
fs.writeFileSync(indexFile, modules.join('\n'));