const { loadData,saveData} = require("../../database");



module.exports = function(req, res) {
    let products = loadData("productos")
    const imgInfo= req.file;
    
    const { name,category,price,discount,freeShipping,detail } = req.body;
   
    const newid = products[products.length - 1].id + 1;
    const newProduct = {
        id: +newid,
        category,
        name,
        price:+price,
        discount:+discount,
        freeShipping: freeShipping === "true",
        image: imgInfo? `/images/${imgInfo.filename}` : "/images/default.jpg",
        detail
    }
    

    products = [...products, newProduct];

    saveData(products,"productos")

    
    
    
  
    
    return res.redirect("/admin");
}