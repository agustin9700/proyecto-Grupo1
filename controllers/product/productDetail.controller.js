module.exports= (req,res) => {

    const productos= require("../../database/productos.json")
    
    res.render('productDetail',{productos})
}