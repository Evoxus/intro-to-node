const chalk = require('chalk-animation');

const validMethods = [ `glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow` ];
const scriptArg = process.argv[2]

const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';

function animateString(string) {
  const animation = chalk[method](string)

  setTimeout(() => animation.stop(), 5000)
}

module.exports = { animateString: animateString }