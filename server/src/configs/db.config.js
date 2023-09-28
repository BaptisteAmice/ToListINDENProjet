require('dotenv').config();
const env = process.env;

const fs = require('fs');
const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    url: 'mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority',
    /*ssl: {
      mode: 'VERIFY_IDENTITY',
      ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
    }*/
};

console.log(db.url);
module.exports = db;