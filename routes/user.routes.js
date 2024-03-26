const express = require('express')
const router = express.Router()
const {login,register,newUser,loginProcess,profile,registerProcess} = require('../controllers/user')
const { upload } = require('../middleware/uploadfile')
const userNoLogueado = require('../middleware/userNoLogeado')
const validate = require('../middleware/Validation/registerValidation')
router.get('/login',userNoLogueado, login)
router.post("/login",loginProcess)

router.get('/register',userNoLogueado, register)
router.post('/register',upload.single('imageProfile'),validate,registerProcess, newUser)

router.get("/perfil", userNoLogueado, profile)

module.exports = router