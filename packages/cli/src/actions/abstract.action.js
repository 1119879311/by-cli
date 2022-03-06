module.exports = class AbstractAction {
  handler() {
    throw new Error(" 必须实现类方法");
  }

  static create(...arg) {
    return new this(...arg);
  }
};
