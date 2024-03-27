const express = require('express')
const router = express.Router()
const {login,register,newUser,loginProcess,profile} = require('../controllers/user')
const { upload } = require('../middleware/uploadfile')
const userNoLogueado = require('../middleware/userNoLogeado')
const userLogeado = require('../middleware/userLogeado')
const validaciones = require("../middleware/Validation/registerValidation")



router.get('/login',userNoLogueado, login)
router.post("/login",loginProcess)

router.get('/register',userNoLogueado, register)
router.post('/register',[upload.single('imageProfile'),validaciones], newUser)


router.get("/perfil", userLogeado, profile)

module.exports = router