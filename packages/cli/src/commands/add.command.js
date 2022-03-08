const AbstractCommand = require("./abstract.command");
const crossSpawn = require("cross-spawn");
// eslint-disable-next-line import/prefer-default-export
module.exports = class AddCommand extends AbstractCommand {
  // eslint-disable-next-line class-methods-use-this
  load(program) {
    program
      .command("add")
      .argument("<pkgName...>", "安装一个或者多个依赖包")
      .option("-D,--dev [dev]", "安装在devDependencies")
      .option("-P,--prod [prod]", "安装在dependencies个环境")
      .action((data, options) => {
        console.log("options:", options, program.opts());
        let { dev, prod } = options;
        crossSpawn.sync(
          "npm i",
          [...data, dev && "--save-dev", prod && "--production"].filter(
            Boolean
          ),
          { stdio: "inherit" }
        );
        console.log("process.execPath", process.execPath);
        console.log("run data:", data);
      });
  }
};
