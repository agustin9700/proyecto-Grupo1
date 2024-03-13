module.exports= (req,res) => {

    const productos= require("../../database/productos.json")
    
    res.render('detail',{'p':productos,})
}