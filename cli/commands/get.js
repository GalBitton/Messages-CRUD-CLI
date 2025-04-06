const api = require('../utils/api');
const logger = require('../utils/logger');

async function getMessage(id){
    try{
        const response = await api.get(`/messages/${id}`);
        logger.success('Message retrieved successfully');
        logger.data(response.data.data);
    }catch(err){
        logger.error('Failed to retrieve message');
        if (err.response)
            logger.error(err.response.data.error);
    }
}

module.exports = { getMessage };