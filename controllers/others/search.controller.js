module.exports = function(req, res) {
    let productos = require("../home/basedate.json");
    let busqueda = req.query.productoBuscado.toLowerCase(); // Convertir a minúsculas

    let resultadosBusqueda = [];

    for (let i = 0; i < productos.length; i++) {
        let nombreProducto = productos[i].name.toLowerCase();
        let categoriaProducto = productos[i].category.toLowerCase();

        if (nombreProducto.includes(busqueda) || categoriaProducto.includes(busqueda)) {
            resultadosBusqueda.push(productos[i]);
        }
    }

    res.render("search",{resultadosBusqueda});
};
