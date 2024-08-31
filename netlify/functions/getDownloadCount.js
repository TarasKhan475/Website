const { getDownloadCount } = require('./db');

exports.handler = async (event) => {
    const imageId = event.queryStringParameters.imageId;

    try {
        const count = await getDownloadCount(imageId);
        return {
            statusCode: 200,
            body: JSON.stringify({ count }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to get download count' }),
        };
    }
};
