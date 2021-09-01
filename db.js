const db = require('mongoose');

db.Promise = global.Promise;

// Connection with DB
const connect = async (url) => {
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] Conectada con éxito');
}

module.exports = {
    connect,
}