const colors = require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log(colors.cyan("========================================"));
  console.log(colors.cyan("=        EVM AUTO Transfer Bot         ="));
  console.log(colors.cyan("========================================"));
  console.log(colors.cyan("=      https://t.me/FreeDropLink       ="));
  console.log(colors.cyan("========================================"));
  console.log();
}

module.exports = displayHeader;
