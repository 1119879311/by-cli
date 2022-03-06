const AbstractCommand = require("./abstract.command");

// eslint-disable-next-line import/prefer-default-export
module.exports = class AddCommand extends AbstractCommand {
  // eslint-disable-next-line class-methods-use-this
  load(program) {
    program
      .command("add")
      .argument("<pkgName...>", "安装一个或者多个依赖包")
      .option("-s,--save [mode]", "安装在哪个环境")
      .action((data, options) => {
        console.log("action", this.action.handler(data, program.opts()));
        console.log("run data:", data);
      });
  }
};
