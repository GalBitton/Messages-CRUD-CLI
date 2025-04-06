const api = require('../utils/api');
const logger = require('../utils/logger');
const inquirer = require('inquirer');

async function updateMessage(id) {
    try{
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'content',
                message: 'Enter the new message content:',
                validate: input => input.length >= 0
            }
        ]);

        const response = await api.put(`/messages/${id}`, { content: answers.content });
        logger.success('Message updated successfully');
        logger.data(response.data.data);
    }catch(err){
        logger.error('Failed to update message');
        if (err.response)
            logger.error(err.response.data.error);
    }
}

module.exports = { updateMessage };