module.exports= (req,res) => {

    const productos= require("../../database/productos.json")
    const userlogueado = req.session.user
    
    res.render('listProducts',{productos, userlogueado})
}