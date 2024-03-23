const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { upload } = require('../middleware/uploadfile')
const userNoLogueado = require('../middleware/userNoLogeado')

router.get('/login',userNoLogueado, userController.login)
router.post("/login",userController.loginProcess)

router.get('/register',userNoLogueado, userController.register)
router.post('/register',upload.single('imageProfile'), userController.newUser)

router.get("/perfil", userNoLogueado, userController.profile)

module.exports = router