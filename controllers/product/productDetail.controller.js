module.exports= (req,res) => {
    const productos= require("./productos.json")
    
    res.render('productDetail',{"productos":productos})
}