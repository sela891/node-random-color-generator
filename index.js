import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const hue = argv[2];
const luminosity = argv[3];

const myColor = randomcolor({
  luminosity: luminosity,
  hue: hue,
});

const colorBox = chalk.hex(myColor);

function generateBox(myColor) {
  let fullLines = Array(3).fill('#'.repeat(31)).join('\n') + '\n';
  let halfLines = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5) + '\n';
  let middleLine =
    '#'.repeat(5) +
    ' '.repeat(7) +
    myColor +
    ' '.repeat(7) +
    '#'.repeat(5) +
    '\n';
  return [fullLines, halfLines, middleLine, halfLines, fullLines].join('');
}
console.log(colorBox(generateBox(myColor)));
