var config = {
    production : {
        host :"dandii-db.c2kfdi3bqt2u.ap-southeast-2.rds.amazonaws.com",
        port : "3306",
        username :"dandi",
        password :"dandi123",
        database : "dandi_db",
        dialect : "mysql",
        operationAliases : false
    }
}

module.exports = config;
