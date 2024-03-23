function recordarmeCookie(req, res, next) {
    if (req.cookies.recordarme && !req.session.user) {
        const usersDatos = require("../database/users.json");
        const usuarioCorrecto = usersDatos.find(user => user.user === req.cookies.recordarme);
        
        if (usuarioCorrecto) {
            req.session.user = usuarioCorrecto;
        }
    }

    next(); 
}

module.exports = recordarmeCookie;
