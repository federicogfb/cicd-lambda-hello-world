exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World from AWS Lambda!',
            timestamp: new Date().toISOString()
        }),
    };
    return response;
};