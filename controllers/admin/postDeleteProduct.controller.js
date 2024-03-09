const {saveData, loadData} = require('../../database')
const path = require('path')
const fs = require('fs')
module.exports=(req,res) =>{
    const {id} = req.params;
    const products = loadData("productos")
    const productsLessOne = products.filter(p => p.id !== +id)
    const productDeleted = products.find(p => p.id === +id)
    const filePath= path.join(__dirname, `../../public${productDeleted.image}`)
    console.log(productDeleted.image)
    const existFile = fs.existsSync(filePath)
    if(existFile){
        fs.unlinkSync(filePath)
    }
    saveData(productsLessOne,"productos")
    res.redirect("/admin")
}