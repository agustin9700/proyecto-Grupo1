const { loadData } = require("../../database")

module.exports= (req,res) => {
    const datos= loadData('basedate')
    
    
    res.render('home', {datosProductos: datos})


}