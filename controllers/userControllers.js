var connect = require('../utils/db')
var mc = require('../utils/memcached')

module.exports = {
    get : function(req,res) {
        res.render('users')
    },
    post : function(req,res) {
        session = req.session
        connect.query(`SELECT * FROM user_tbs WHERE username="${req.body.username}" and password="${req.body.password}"`, (err, result1)=>{
            if(err){
                console.log(err)
                return
            }
            else {
                if(result1.length<1) {
                    res.redirect('/users')
                }
                else{
                    req.session.username = req.body.username
                    console.log(req.session)
                    connect.query('SELECT namaLengkap, jabatan FROM karyawan_tbs', (err, result2)=>{
                        if(err){
                            console.log(err)
                        }
                        else {
                            mc.setMc('data', result2)
                            res.redirect('/')
                        }
                    })
                } 
            }
        })
    }
}