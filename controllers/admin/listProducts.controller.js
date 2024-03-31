const { loadData } = require("../../database")

module.exports = (req, res) => {
  
  const productos= loadData("productos");
  const users = loadData("users")
  const user = req.session.user
  const userlogin = users.find((u => u.user === user.user))
  //const userlogin = req.session.user;
  /*Aqui solo renderizamos el contenido de la vista*/
      res.render("admin/listProducts", {productos}, (err, content) =>{
        err && res.send(err.message)

        
    // Aqui renderizamos el partials de dashboeard 
    // QUE YA VA A TENER LA VISTA INCLUIDA QUE RENDERIZAMOS ANTERIORMENTE    
        res.render("partials/dashboard", {
          userlogin,
          views: content
          
        })
      })
  }



  