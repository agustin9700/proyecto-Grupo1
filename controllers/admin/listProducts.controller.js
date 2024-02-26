const fs = require("fs");
const path = require("path");


module.exports = (req, res) => {
  
  const productos= JSON.parse(fs.readFileSync(path.join(__dirname, "../../database/productos.json"), "utf-8"))
  
  /*Aqui solo renderizamos el contenido de la vista*/
      res.render("admin/listProducts", {productos}, (err, content) =>{
        err && res.send(err.message)
    
    // Aqui renderizamos el partials de dashboeard 
    // QUE YA VA A TENER LA VISTA INCLUIDA QUE RENDERIZAMOS ANTERIORMENTE    
        res.render("partials/dashboard", {
          views: content
        })
      })

  };

  