#!/usr/bin/env node --experimental-vm-modules --experimental-import-meta-resolve
import figlet from "figlet";
import chalk from "chalk";
import Table from "cli-table3";
import updateNotifier from "update-notifier";
import pkg from "./package.json" assert { type: "json" };

const fonts = figlet.fontsSync();
const randomFont = fonts[Math.round(Math.random() * fonts.length)];

console.log(
  figlet.textSync("amilajack", {
    font: randomFont,
  })
);

const table = new Table({
  head: [chalk.bold("Website"), chalk.bold("Account")],
});

console.log(chalk.bold("my personal w̶e̶b̶s̶i̶t̶e̶ npm module"));

const accounts = [
  ["github", "https://github.com/amilajack"],
  ["website/blog", "https://amilajack.com"],
  ["email", "amilajack@gmail.com"],
  ["twitter", "https://twitter.com/amilajack"],
  ["linkedin", "https://www.linkedin.com/in/amilajack/"],
  ["resume", "https://github.com/amilajack/resume"],
  ["paypal donations", "https://paypal.me/amilajack"],
  ["venmo donations", "https://venmo.com/amilajack"],
];

accounts.forEach((account) => table.push(account));
console.log(table.toString());

updateNotifier({ pkg }).notify();
