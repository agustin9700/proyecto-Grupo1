const {saveData, loadData} = require('../../database')
module.exports=(req,res) =>{
    const {id} = req.params;
    const products = loadData("productos")
    const productsLessOne = products.filter(p => p.id !== +id)
    saveData(productsLessOne,"productos")
    res.redirect("/admin")
}