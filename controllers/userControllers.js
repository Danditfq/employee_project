var connect = require('../utils/db')

module.exports = {
    get : function(req,res) {
        res.render('users')
    },
    post : function(req,res) {
        session = req.session
        connect.query(`SELECT * FROM user_tbs WHERE username="${req.body.username}" and password="${req.body.password}"`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            else {
                if(result.length<1) {
                    res.redirect('/users')
                }
                else{
                    req.session.username = req.body.username
                    console.log(req.session)
                    res.redirect('/')
                } 
            }
        })

    }
}