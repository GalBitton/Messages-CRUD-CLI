const api = require('../utils/api');
const logger = require('../utils/logger');

async function deleteMessage(id){
    try{
        const response = await api.delete(`/messages/${id}`);
        logger.success('Message deleted successfully');
        logger.data(response.data.data);
    }catch(err){
        logger.error('Failed to delete message');
        if (err.response)
            logger.error(err.response.data.error);
    }
}

module.exports = { deleteMessage };