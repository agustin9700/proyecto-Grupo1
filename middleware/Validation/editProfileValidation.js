const { check, body } = require('express-validator');
const path = require('path');

const validacionesEditProfile = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({ min: 3, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres'),

    check('user')
        .notEmpty().withMessage('El nombre de usuario es obligatorio'),

    check('phone')
        .optional({nullable:true})
        .isNumeric().withMessage('debes colocar un número de teléfono'),

    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debes colocar un email valido').bail()
        .normalizeEmail().bail(),

    check('province')
        .optional({nullable:true})
        .isAlphanumeric('es-ES',{ignore:" "}).withMessage('Los caracteres especiales no están permitidos'),
    
    check('city')
        .optional({nullable:true})
        .isAlphanumeric('es-ES',{ignore:" "}).withMessage('Los caracteres especiales no están permitidos'),

    check('street')
        .optional({nullable:true})
        .isAlphanumeric('es-ES',{ignore:" "}).withMessage('Los caracteres especiales no están permitidos'),

    check('num')
        .optional({nullable:true})
        .isNumeric().withMessage('debes colocar el número de tu localidad'),

    body('imageProfile')
        .custom((value, { req }) => {
            const file = req.file;
            const acceptExtensions = ['.jpg', '.png', '.jpeg'];
            if (!file) {
                throw new Error('debes subir una imagen de perfil');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones permitidas son${acceptExtensions.join(", ")}`);
                }
            }
            return true;
        })
];

module.exports = validacionesEditProfile;