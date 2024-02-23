module.exports= (req,res) => {
    const datos= require("./basedate.json")
    
    
    res.render('home',{"datosProductos":datos})


}