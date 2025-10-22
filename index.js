const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World from AWS Lambda!',
            requestId: uuidv4(),
            timestamp: new Date().toISOString()
        }),
    };
    return response;
};