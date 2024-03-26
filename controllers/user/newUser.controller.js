const {loadData, saveData} = require('../../database');
const bcrypt = require("bcrypt")
module.exports = function (req, res){  
       const imageFile = req.file;
       let users = loadData('users')
       const {name, user, email, password, tic, image} = req.body;
       const newId = users[users.length -1].id + 1; 
       const newUser ={
        id:+newId,
        name:name?.trim(),
        user:user?.trim(),
        email:email?.trim(),
        password: bcrypt.hashSync(password?.trim(), 10),
        tic: tic !== undefined ? true : false,
        image: imageFile ? imageFile.filename : ''
    } 
    
    users = [...users, newUser]

   saveData(users, 'users')
   return res.redirect('/user/login') 
  }


