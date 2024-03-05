const { loadData, saveData } = require("../../database");

module.exports = (req, res)=> {
  
  const {id} = req.params;

  const { category, name, price, discount, freeShipping, image, detail } =
    req.body;

  const productos = loadData()

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

  saveData(productsMap);

  res.redirect('/admin');
};
