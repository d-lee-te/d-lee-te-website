const axios = require('axios');
const fs = require('fs');
const readline = require('readline');

const API_BASE_URL = 'http://localhost:3000/api';
const LOG_FILE = 'script.log';


function logMessage(message) {
    fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - ${message}\n`);
}


function promptUser(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(question, answer => {
        rl.close();
        resolve(answer);
    }));
}

async function getAuthCode() {
    try {
        logMessage('Please open the following URL in your browser to authorize the application:');
        const authUrl = `${API_BASE_URL}/spotify/auth`;
        logMessage(authUrl);
        const authCode = await promptUser('Enter the authorization code: ');
        return authCode;
    } catch (error) {
        logMessage(`Error getting authorization code: ${error.message}`);
        throw error;
    }
}

async function authenticate() {
    try {
        logMessage('Authenticating...');
        const authCode = await getAuthCode();
        
        const response = await axios.post(`${API_BASE_URL}/spotify/callback`, {
            code: authCode
        });
        logMessage('Authentication successful');

        return response.data.accessToken;
    } catch (error) {
        logMessage(`Error authenticating: ${error.message}`);
        throw error;
    }
}

async function fetchData(authToken) {
    try {
        logMessage('Fetching data...');
        const response = await axios.post(`${API_BASE_URL}/spotify/get`, {
            accessToken: authToken
        });
        logMessage('Data fetched successfully');
        return response.data;
    } catch (error) {
        logMessage(`Error fetching data: ${error.message}`);
        throw error;
    }
}

async function storeData(data) {
    try {
        logMessage('Storing data...');
        //const jsonData = JSON.stringify(data);
        logMessage(jsonData);
        await axios.post(`${API_BASE_URL}/spotify/store`, data);
        logMessage('Data stored successfully');
    } catch (error) {
        logMessage(`Error storing data: ${error.message}`);
        throw error;
    }
}

async function updateSpotifyData() {
    try {
        const authToken = await authenticate();
        const data = await fetchData(authToken);
        
        await storeData(data);
        logMessage('Database update completed.');
    } catch (error) {
        logMessage(`Error updating database: ${error.message}`);
    }
}

updateSpotifyData();
