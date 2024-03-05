let productEdit= require("../../database/productos.json")




module.exports = (req,res) => {
    const {id} = req.params;
    
    const findProductEdit = productEdit.find(p => p.id === +id)

    res.render("admin/editProduct", {"productEdit" : findProductEdit},(err, content) =>{
        err && res.send(err.message)
    
        res.render("partials/dashboard", {
          views: content
        });
})

}