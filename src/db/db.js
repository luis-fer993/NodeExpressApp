const { createPool } = require("mysql2/promise")

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require("../config")

// Create the connection pool. The pool-specific settings are the defaults
const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})



module.exports = {pool};