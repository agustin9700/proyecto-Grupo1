const fs = require("fs");
const path = require("path");

module.exports = function (req, res) {
  let productos = require("../../database/productos.json"); // Cambiado de const a let

  const id = req.params.id;

  const { category, name, price, discount, freeShipping, image, detail } =
    req.body;

  const productsMap = productos.map((p) => {
    if (p.id === +id) {
        const productEdit = {
            ...p,
            category: category ? category.trim() : category,
            name: name ? name.trim() : name ,
            price: +price,
            discount: +discount ,
            freeShipping: freeShipping === "true",
            image: image ? image : "/images/default.jpg",
            detail: detail ? detail.trim(): detail ,
          };
      

      return productEdit;
    }

    return p;
  });

  const productosString = JSON.stringify(productsMap, null, 3);

  const pathProducts = path.join(__dirname, "../../database/productos.json");
  fs.writeFileSync(pathProducts, productosString, "utf-8");

  res.redirect("/admin/");
};
