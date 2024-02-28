module.exports = (req, res) => {
    id = req.params.id ;
    
    const productos= require("../../database/productos.json")
    const product = productos.find((p) => p.id === +id); 
    
    res.render("admin/updateProduct", {product}, (err, content) =>{
        err && res.send(err.message)

        res.render("partials/dashboard", {
          views: content
        })
      })

  };