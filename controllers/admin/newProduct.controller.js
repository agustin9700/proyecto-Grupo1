const { saveData, loadData } = require("../../database");
const products = loadData("productos")
module.exports = function(req, res) {
    const { name,category,price,discount,freeShipping,image,detail } = req.body;
   
    const newid = products[products.length - 1].id + 1;
    const newProduct = {
        id: +newid,
        category,
        name,
        price:+price,
        discount:+discount,
        freeShipping: freeShipping === "true",
        image: "/images/default.jpg",
        detail
    }
    console.log(newProduct)

    products = [...products, newProduct];

    saveData(products,"productos")

    
    
    
  
    
    return res.redirect("/admin/listProducts");
}
