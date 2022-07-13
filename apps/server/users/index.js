const { getConnection } = require("../db/mysql")
async function getUsersHandler() {
    const query = `SELECT id,user_name,first_name,last_name FROM users`;
    const [result] = await getConnection().execute(query);
    return result[0];
}

module.exports = { getUsersHandler }