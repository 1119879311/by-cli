const AbstractCommand = require("./abstract.command");
const utils = require("@by-cli/utils");
// eslint-disable-next-line import/prefer-default-export
module.exports = class RunCommand extends AbstractCommand {
  // eslint-disable-next-line class-methods-use-this
  load(program) {
    program
      .command("run")
      .argument("[mode]", "运行环境")
      .option(
        "-c,--conifg [config]",
        "指定运行的webpac配置文件,相对于当前工作目录"
      )
      .option("--eslint [eslint]", "是否开启eslint", false)
      // .option('-m,--mode [mode]', '运行环境', 'none')
      .option("-p,--port <port>", "端口", 8080)
      .option("-e,--env [env]", "环境参数")
      .action((mode, options, command) => {
        this.action.handler(mode, program.opts());
        console.log("run data:", program.opts(), options, mode);
        console.log("env:", utils.parseJson(options.env));
      });
  }
};
