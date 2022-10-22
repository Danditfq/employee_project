
var connect = require('../utils/db')
var session
module.exports = {
    get : function(req,res) {
        session = req.session
        connect.query('SELECT * FROM karyawan_tbs', (err,result) => {
            if(err){
                console.log(err)
                return
            }
            else {
                res.render('index', {result, session : session.username})
            } 
        })
    },
    post : function(req,res) {
        var sql = `INSERT INTO karyawan_tbs(namaLengkap, email, noHandphone, alamat, jabatan, photoUrl) VALUES(?, ?, ?, ?, ?,?)`
        connect.query(sql, [req.body.nama, req.body.email, req.body.phone, req.body.alamat, req.body.jabatan, req.file.filename], (err, result)=> {
            if(err){
                req.flash('msg', "error occured")
                res.redirect('/')
            }
            else{
                req.flash('msg', 'data berhasil diinput')
                res.redirect('/')
            }
        })
    },
    delete : function(req,res) {
        var sql = `DELETE FROM karyawan_tbs WHERE id = ${req.body.id_karyawan};`
        console.log(req.body.id_karyawan)
        connect.query(sql,(err,result) =>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/')
            }
        })
    }
}