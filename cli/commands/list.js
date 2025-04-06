const api = require('../utils/api');
const logger = require('../utils/logger');

async function listMessages(){
    try{
        const response = await api.get('/messages');
        logger.success('Messages retrieved successfully');
        logger.data(response.data.data);
    }catch(err){
        logger.error('Failed to retrieve list of all messages');
        if (err.response)
            logger.error(err.response.data.error);
    }
}

module.exports = { listMessages };