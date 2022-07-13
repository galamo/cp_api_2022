const mysql2 = require("mysql2/promise");

const {
    MYSQL_DB_HOST: host,
    MYSQL_DB_PORT: port,
    MYSQL_DB_USER: user,
    MYSQL_DB_PASS: password,
    MYSQL_DB_SCHEMA: database,
} = process.env;

let connection = null;
let counter = 0
async function initDB() {
    counter++;
    try {
        connection = await mysql2.createConnection({
            host,
            port,
            user,
            password,
            database,
        });
    } catch (error) {
        console.log(error);
        console.log("Application shut down due to MySQL connection error");
        if (counter >= 3) process.exit(1)
        setTimeout(() => {
            initDB()
        }, 30000);
    }
}

function getConnection() {
    return connection;
}

module.exports = { initDB, getConnection };
