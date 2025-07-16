const fs = require('node:fs/promises');
const path = require('node:path');

main()

function main(){
  console.log('Unfilling SVGs in the intermediate directory...');
  unfillSvgs().then(_=>{console.log('Unfilling complete')}).catch(console.error);
}

async function unfillSvgs(dir = './intermediate') {
  async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });


    const promises = entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        return processDirectory(fullPath);
      }

      if (entry.isFile() &&
          entry.name.endsWith('.svg') &&
          !entry.name.includes('_color')) {

        const content = await fs.readFile(fullPath, 'utf8');
        const updated = content.replace(/fill="none"/g, '');

        if (content !== updated) {
          await fs.writeFile(fullPath, updated);
          console.log(`Processed: ${fullPath}`);
        } else {
          console.log(`Skipped (no changes): ${fullPath}`);
        }
      }
    });

    await Promise.all(promises);
  }

  await processDirectory(path.join(__dirname, dir));
}

