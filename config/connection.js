const mysql = require('mysql2');
const dataConfig = require('./dataConfig');

const connection = mysql.createPool( {...dataConfig , connectionLimit: 5 })

module.exports = connection;