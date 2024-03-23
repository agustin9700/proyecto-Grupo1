const bcrypt = require("bcrypt");
const { loadData } = require("../../database");


module.exports = function(req, res) {
    const users = loadData("users");
    const datoEntrantes = req.body;

    const userCorrecto = users.find(user => 
        user.user === datoEntrantes.user && bcrypt.compareSync(datoEntrantes.password, user.password));

    if (userCorrecto ===undefined) {
        res.redirect("/user/login")
       
        
    } else {
        req.session.user = userCorrecto;
        if(req.body.recordarme != undefined){
            res.cookie("recordarme",userCorrecto.user, {maxAge: 30000}) 
        }
        res.redirect("/admin")
        
    }
}
