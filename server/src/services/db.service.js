const mongoose = require('mongoose');
const config = require('../configs/db.config');


async function testDatabase() {
    try {
        await mongoose.connect(config.url);
        console.log("Connected to the database");
    }
    catch (err) {
        console.log("Cannot connect to the database!", err);
        process.exit();
    }
}

module.exports = {
    testDatabase: testDatabase
}