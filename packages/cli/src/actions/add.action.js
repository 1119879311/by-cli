const AbstractAction = require("./abstract.action");

module.exports = class AddAction extends AbstractAction {
  handler(...args) {
    console.log("handler", ...args);
  }
};
