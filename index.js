//import { argv } from 'node:process';
import chalk from 'chalk';

//console.log(`This is a ${argv[2]} test`);

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let hexcode = '#';
  for (let i = 0; i < 6; i++) {
    hexcode += letters[Math.floor(Math.random() * 16)];
  }
  return hexcode;
}

const colorText = chalk.hex(generateRandomColor());

function generateThreeLines() {
  let lines = '';
  for (let i = 0; i < 3; i++) {
    lines += '#'.repeat(31) + '\n';
  }
  return lines;
}

function generateImage(hexcode) {
  let image = '';
  image += generateThreeLines();
  image += '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5) + '\n';
  image +=
    '#'.repeat(5) +
    ' '.repeat(7) +
    hexcode +
    ' '.repeat(7) +
    '#'.repeat(5) +
    '\n';
  image += '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5) + '\n';
  image += generateThreeLines();
  return image;
}

console.log(colorText(generateImage(generateRandomColor())));
