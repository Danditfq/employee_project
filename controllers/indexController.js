var connect = require('../utils/db')
var memjs = require('memjs');

var mcLib = memjs.Client.create('127.0.0.1:11211');

var session

module.exports = {
    get : function(req,res) {
        session = req.session
        if (session.username === undefined){
            var result = []
            mcLib.get('data', function (err, value, key){
                values = value.toString()
                values = values.replace('[','')
                values = values.replace(']','')
                values = values.split(',{')
                values[0] = values[0].replace('{','')
                for (let i = 0; i < values.length; i++) {
                    values[i] = values[i].replace(`"namaLengkap":`, '')
                    values[i] = values[i].replace(`"jabatan":`, '')
                    values[i] = values[i].replace(`}`,'')
                    values[i] = values[i].replaceAll(`"`,'')
                    valuez = values[i]
                    valuez = valuez.split(',')
                    resultObj = {
                        'namaLengkap': valuez[0],
                        'jabatan': valuez[1]
                    }
                    result.push(resultObj)
                }
                res.render('index', {result, session : session.username})
            })
        }else{
            connect.query('SELECT * FROM karyawan_tbs', (err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                else {
                    res.render('index', {result, session : session.username})
                } 
            })
        }
    },
    post : function(req,res) {
        var sql = `INSERT INTO karyawan_tbs(namaLengkap, email, noHandphone, alamat, jabatan, namaReferral) VALUES(?, ?, ?, ?, ?, ?)`
        connect.query(sql, [req.body.nama, req.body.email, req.body.phone, req.body.alamat, req.body.jabatan, req.body.referral], (err, result)=> {
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
        if (req.session.username === undefined) {
            console.log("Tidak boleh delete")
        }else{
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
}