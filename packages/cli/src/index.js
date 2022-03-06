"use strict";

const { program } = require("commander");
const { loadCommand } = require("./commands");
module.exports = booststrap;
function booststrap() {
  program
    .name("by-cli")
    .version("0.0.1", "-v, --version", "Output the current version.")
    .usage("[command] [options]")
    .helpOption("-h, --help", "Output usage information.");

  loadCommand(program);
  console.log("cwd--", process.cwd());
  program.parse();
}
