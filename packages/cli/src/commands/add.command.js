const AbstractCommand = require("./abstract.command");
const crossSpawn = require("cross-spawn");
const ora = require("ora");
const path = require("path");
// eslint-disable-next-line import/prefer-default-export
module.exports = class AddCommand extends AbstractCommand {
  // eslint-disable-next-line class-methods-use-this
  load(program) {
    program
      .command("add")
      .argument("<pkgName...>", "安装一个或者多个依赖包")
      .option("-D,--dev [dev]", "安装在devDependencies")
      .option("-P,--prod [prod]", "安装在dependencies个环境")
      .action(async (data, options) => {
        console.log("options:", options, program.opts());
        let { dev, prod } = options;
        console.log("cwd：----", path.join(process.cwd(), "src"));
        let proceWorkDir = path.join(process.cwd(), "src");

        console.log("进程目录-0---", proceWorkDir);
        process.chdir(proceWorkDir);
        console.log("进程目录--1--", process.cwd());
        const progress = ora({ text: "安装中" });
        progress.start();

        let runner = await crossSpawn.sync(
          "npm",
          [
            "install",
            ...data,
            dev && "--save-dev",
            prod && "--production",
          ].filter(Boolean),
          { stdio: "inherit" }
        );
        progress.succeed("安装成功");
        console.log("回到初始目录", path.dirname(proceWorkDir));
        process.chdir(path.dirname(proceWorkDir));
        console.log("runner", runner);
        console.log("process.execPath", process.execPath);
        console.log("run data:", data);
      });
  }
};
