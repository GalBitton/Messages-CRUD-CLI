const axios = require('axios');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const API_URL = process.env.API_URL || 'http://localhost:8080/api/v1/messages';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

module.exports = api;