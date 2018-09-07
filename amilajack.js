#!/usr/bin/env node
const { version } = require('./package.json');
const figlet = require('figlet');
const chalk = require('chalk');
const Table = require('cli-table3');

const fonts = figlet.fontsSync();
const randomFont = fonts[Math.round(Math.random() * fonts.length)];

console.log(figlet.textSync('amilajack', {
  font: randomFont
}));

const table = new Table({
  head: ['website', 'account']
});

console.log(chalk.bold('my personal w̶e̶b̶s̶i̶t̶e̶ npm module'))

const accounts = [
  ['twitter', 'https://twitter.com/amilajack'],
  ['github', 'https://github.com/amilajack'],
  ['website', 'https://amilajack.com'],
  ['email', 'amilajack@gmail.com'],
  ['resume', 'https://github.com/amilajack/resume']
];

accounts.forEach(account => table.push(account));
console.log(table.toString())
