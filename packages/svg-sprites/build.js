#!/usr/bin/env node

const {readFile, writeFile, access, unlink} = require('fs/promises')
const {resolve, basename} = require('path')
const {promisify} = require('util')
const svgstore = require('svgstore')
const glob = promisify(require('glob'))

const cwd = process.cwd()

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help')
  .command('bundle', 'Bundle selected icons into a single sprite.')
  // .command('all', 'Build all icons into one sprite each to use as a fallback.', all)
  .option('i', {
    alias: 'iconsfile',
    describe: 'The icons manifest file to use when bundling a sprite.',
    nargs: 1,
    default: './icons.json'
  })
  .option('s', {
    alias: 'svgs',
    describe: 'The directory containing the individual non-sprite SVG files.',
    nargs: 1,
    default: './icons/'
  })
  .option('o', {
    alias: 'out',
    describe: 'The path and filename to save the sprite as.',
    nargs: 1,
    default: './icons.svg'
  })
  // .option('c', {
  //   alias: 'concurrency',
  //   describe: 'The number of SVG assets to process concurrently when transforming all icons into individual sprites.',
  //   nargs: 1,
  //   default: '4'
  // })
  .argv

function globSection (values) {
  return values.length > 1 ? `{${values.join(',')}}` : values[0]
}

async function bundle() {

  const manifest = await readFile(resolve(cwd, argv.iconsfile)).then(JSON.parse)
  const out = resolve(cwd, argv.out)

  await access(out).then(function(){return unlink(out)})

  const fallbackSizes = manifest.sizes ? globSection(manifest.sizes)  : '*'
  const fallbackStyles = manifest.styles ? globSection(manifest.styles) : '*'

  const sprites = svgstore()

  await Promise.all(Object.keys(manifest.include).map(async function(id){

    const sizes = manifest.include[id].sizes ? globSection(manifest.include[id].sizes) : fallbackSizes
    const styles = manifest.include[id].styles ? globSection(manifest.include[id].styles) : fallbackStyles

    const svgs = await glob(resolve(cwd, argv.svgs, `${id}_${sizes}_${styles}.svg`))

    return await Promise.all(svgs.map(async function(svg){
      const id = basename(svg, '.svg')
      const svgFile = await readFile(svg, 'utf8')
      console.log('📥', id)
      return sprites.add(id, svgFile)
    }))

  }))

  console.log('📦', argv.out);

  await writeFile(out, sprites.toString())

  console.log('Done ✨')

}

// async function all() {
//   const concurrency = parseInt(argv.concurrency)
// }

switch(argv._[0]) {
  case 'bundle': return bundle();
}
