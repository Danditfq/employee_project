var connect = require('../utils/db')
var mc = require('../utils/memcached')

module.exports = function(req, res){
    connect.query('SELECT namaLengkap, jabatan FROM karyawan_tbs', (err, result)=>{
        if(err){
            console.log(err)
        }
        else {
            mc.setMc('data', result)
            console.log(req.session)
            req.session.destroy()
            res.redirect('/')
        }
    })
}