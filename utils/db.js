const mysql = require('mysql');
const { production } = require('../config');

const connect = mysql.createConnection({
    host : production.host,
    port : production.port,
    user : production.username,
    password : production.password,
    database : production.database
})

connect.connect((err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('Connected to DB')
})

module.exports = connect