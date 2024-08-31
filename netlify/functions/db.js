const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'downloads.db'));

// Initialize the table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS downloads (
        imageId TEXT PRIMARY KEY,
        count INTEGER DEFAULT 0
    )`);
});

function getDownloadCount(imageId) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT count FROM downloads WHERE imageId = ?`, [imageId], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row ? row.count : 0);
            }
        });
    });
}

function incrementDownload(imageId) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO downloads (imageId, count)
                VALUES (?, 1)
                ON CONFLICT(imageId)
                DO UPDATE SET count = count + 1
                WHERE imageId = ?`, [imageId, imageId], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}

module.exports = {
    getDownloadCount,
    incrementDownload,
};
