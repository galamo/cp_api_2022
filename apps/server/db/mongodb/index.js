const { MongoClient } = require('mongodb');

async function init() {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('countries');
    return collection;
}

module.exports = init