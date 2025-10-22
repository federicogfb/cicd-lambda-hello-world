const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Lambda function from AWS code version number 2',
            requestId: uuidv4(),
            timestamp: new Date().toISOString()
        }),
    };
    return response;
};