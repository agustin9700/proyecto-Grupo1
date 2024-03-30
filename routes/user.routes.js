const express = require('express')
const router = express.Router()
const {login,register,newUser,loginProcess,profile,PUTprofile} = require('../controllers/user')
const { upload } = require('../middleware/uploadfile')
const userNoLogueado = require('../middleware/userNoLogeado')
const userLogeado = require('../middleware/userLogeado')
const validaciones = require("../middleware/Validation/registerValidation")
const loginValidation = require("../middleware/Validation/loginValidation")
const editProfileValidation = require('../middleware/Validation/editProfileValidation')


router.get('/login',userNoLogueado, login)
router.post("/login",loginValidation ,loginProcess)

router.get('/register',userNoLogueado, register)
router.post('/register',[upload.single('imageProfile'),validaciones], newUser)


router.get("/perfil/:user", userLogeado, profile)
router.put("/perfil/:user", [userLogeado,upload.single('imageProfile'),editProfileValidation], PUTprofile)

module.exports = router