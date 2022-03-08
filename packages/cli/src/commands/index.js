const AddCommand = require("./add.command");
const RunCommand = require("./run.command");
const { AddAction, RunAction } = require("../actions");

const loadCommand = (program) => {
  new AddCommand(AddAction.create()).load(program);
  new RunCommand(RunAction.create()).load(program);
};

exports.loadCommand = loadCommand;
