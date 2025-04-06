const api = require('../utils/api');
const logger = require('../utils/logger');
const inquirer = require('inquirer');

async function createMessage(id) {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'content',
                message: 'Enter the message content:',
                validate: input => input.length >= 0
            }
        ])

        const response = await api.post('/messages', {content: answers.content});
        logger.success('Message created successfully');
        logger.data(response.data.data);

    } catch (err) {
        logger.error('Failed to create message');
        if (err.response)
            logger.error(err.response.data.error);
    }
}

module.exports = { createMessage };