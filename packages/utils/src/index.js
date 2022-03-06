"use strict";

module.exports = {
  parseJson,
};

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
}
