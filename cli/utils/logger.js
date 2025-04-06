const chalk = require('chalk');

const logger = {
    success: (message) => console.log(chalk.green('SUCCESS ' + message)),
    error: (message) => console.log(chalk.red('ERROR ' + message)),
    info: (message) => console.log(chalk.blue('INFO' + message)),
    warn: (message) => console.log(chalk.yellow('WARN' + message)),
    data: (data) => console.log(chalk.cyan(JSON.stringify(data, null, 2)))
};

module.exports = logger;