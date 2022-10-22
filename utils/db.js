const mysql = require('mysql')

const connect = mysql.createConnection({
    host :'database-dandi.c2kfdi3bqt2u.ap-southeast-2.rds.amazonaws.com',
    port : '3306',
    user :'dandi',
    password :'dandi123',
    database : 'dandi_db'
})

connect.connect((err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('connect')
})

module.exports = connect