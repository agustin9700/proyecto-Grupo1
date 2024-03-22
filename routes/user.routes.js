const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { upload } = require('../middleware/uploadfile')

router.get('/login', userController.login)
router.get('/register', userController.register)
router.post('/register',upload.single('imageProfile'), userController.newUser)
module.exports = router