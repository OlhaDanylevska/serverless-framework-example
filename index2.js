module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'This is our second function',
                input: event,
            },
            null,
            2
        ),
    };
};