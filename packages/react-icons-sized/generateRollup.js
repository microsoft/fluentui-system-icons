// @ts-check
const path = require('path');
// https://github.com/jprichardson/node-fs-extra/blob/master/docs
const fs = require('fs');
// https://www.npmjs.com/package/glob
const glob = require('glob');

const outDir = path.join(__dirname, '/lib');
const outDirCjs = path.join(__dirname, '/lib-cjs');

const rootInPackage = '@fluentui/react-icons-sized/lib';
const rootInPackageCjs = '@fluentui/react-icons-sized/lib-cjs';
// make a top-level module declaration
const modules = [
  `declare module '@fluentui/react-icons-sized' {
  export * from '${rootInPackage}/index';
}`,
];

// make a module declaration for each .d.ts file (and delete the original)
// This gives a list of relative paths like 'lib//Accessibility16Filled.d.ts'
const filesEsm = glob.sync(`**/*.d.ts`, { cwd: outDir });

filesEsm.forEach((dtsPath) => {
  const fullPath = path.join(outDir, dtsPath);
  let dtsContents = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  fs.unlink(fullPath, (err => {
      if (err) { 
          console.log(err);
      }
  })); // delete original

  const modulePath = path.posix.normalize(dtsPath).replace('.d.ts', '');
  const pathParts = modulePath.split('/');
  // no relative paths are allowed within module declarations in .d.ts, so make them absolute
  // (this could in theory be done more generically with path utilities)
  dtsContents = dtsContents
    // replace ./ with absolute path (same assumption)
    .replace(/(?<=['"'])\.\//g, `${rootInPackage}/${pathParts.slice(0, -1).join('/')}/`)
    // remove "declare"
    .replace(/\bdeclare /gm, '');
  dtsContents = path.posix.normalize(dtsContents);
  if(dtsContents.includes("<reference types")) {
    dtsContents = dtsContents.replace('/ <reference types="react" />', '/// <reference types="react" />')
  }
  modules.push(`declare module '${rootInPackage}/${modulePath}' {\n${dtsContents}}`);
});

const filesCjs = glob.sync(`**/*.d.ts`, { cwd: outDirCjs });
filesCjs.forEach((dtsPath) => {
  if(dtsPath.includes("index")) {
    return
  }
  const fullPath = path.join(outDirCjs, dtsPath);
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
    .replace(/(?<=['"'])\.\//g, `${rootInPackageCjs}/${pathParts.slice(0, -1).join('/')}/`)
    // remove "declare"
    .replace(/\bdeclare /gm, '');
  dtsContents = path.posix.normalize(dtsContents);
  if(dtsContents.includes("<reference types")) {
    dtsContents = dtsContents.replace('/ <reference types="react" />', '/// <reference types="react" />')
  }
  modules.push(`declare module '${rootInPackageCjs}/${modulePath}' {\n${dtsContents}}`);
});

fs.writeFileSync(path.join(__dirname, 'index.d.ts'), modules.join('\n'));