// eslint-disable-next-line import/prefer-default-export
module.exports = class AbstractCommand {
    constructor(action) {
        if (!action || typeof action !== 'object') {
            throw new Error(' 必须是action 类实例后的对象');
        }
        this.action = action;
    }

    // eslint-disable-next-line class-methods-use-this
    load() {
        throw new Error(' 必须实现类方法');
    }

    static create(...arg) {
        return new this(...arg);
    }
};
