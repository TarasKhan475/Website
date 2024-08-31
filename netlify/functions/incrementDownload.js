const { incrementDownload } = require('./db');

exports.handler = async (event) => {
    const { imageId } = JSON.parse(event.body);

    try {
        const newCount = await incrementDownload(imageId);
        return {
            statusCode: 200,
            body: JSON.stringify({ newCount }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to increment download count' }),
        };
    }
};
