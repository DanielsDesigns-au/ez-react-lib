const fs = require('fs');

const typesAsFileSync = fs
  .readFileSync('./src/typings/types.d.ts')
  .toString()
  .split('\n');

const exportableTypes = [];

for (i in typesAsFileSync) {
  const line = typesAsFileSync[i];
  if (line.startsWith('interface')) {
    const matches = line.match(/(?<=interface )(.*?)(?= {)/);
    if (matches[0]) exportableTypes.push(matches[0]);
  }
  if (line.startsWith('type')) {
    const matches = line.match(/(?<=type )(.*?)(?= =)/);
    if (matches[0]) exportableTypes.push(matches[0]);
  }
}

typesAsFileSync.push(''); // nice spacing
typesAsFileSync.push(`export { ${exportableTypes.join(', ')} };`);
typesAsFileSync.push(''); // always have line empty at end of file

const typesToAppend = ['', ...typesAsFileSync].join('\n');

fs.appendFileSync('./dist/index.d.ts', typesToAppend);
