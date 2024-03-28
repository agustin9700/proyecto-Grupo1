const {loadData, saveData} = require('../../database');
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");

module.exports = function (req, res){ 
    let errors = validationResult(req);
     
   
    if(errors.isEmpty()){
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
         image: imageFile ? imageFile.filename : '',
         phone: "",
        province: "",
        city: "",
        street: "",
        num: ""
     } 
     
     users = [...users, newUser]
     saveData(users, 'users')
        res.redirect('/user/login') 
    }else{
        res.render("register", {errors: errors.array(),
        old:req.body})
    }
   
    
  }


