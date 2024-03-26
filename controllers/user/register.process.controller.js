const { validationResult } = require('express-validator');

const registerController = (req, res, ) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next()
    }else{
        res.render('register',{ 
                errors: errors.array(),
                old : req.body
        });
    }
    console.log(errors)
    ; // Si no hay errores, pasa al siguiente middleware o controlador
};

module.exports = registerController;
