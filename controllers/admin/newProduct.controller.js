const path = require("path");
const fs = require("fs");
let products = require("../../database/productos.json");

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

    products = JSON.stringify(products, null, 3);
    const pathProducts = path.join(__dirname, "../../database/productos.json");
    
    fs.writeFileSync(pathProducts, products, "utf-8");

    
    
    
  
    
    return res.redirect("/admin/listProducts");
}
