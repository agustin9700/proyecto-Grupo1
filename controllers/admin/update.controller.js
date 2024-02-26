module.exports = (req, res) => {
    const productos= require("../../database/productos.json")
      res.render("admin/update", {productos}, (err, content) =>{
        err && res.send(err.message)

        res.render("partials/dashboard", {
          views: content
        })
      })

  };