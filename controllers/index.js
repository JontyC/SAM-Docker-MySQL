const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name
});

function status(req, res) {

    return res.json({ status: 'running', config });
}

function query(req, res) {

    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) {
            return res.sendStatus(500);
        };

        res.json({ solution: results[0].solution });
    });

    connection.end();

}

module.exports = { status, query };
