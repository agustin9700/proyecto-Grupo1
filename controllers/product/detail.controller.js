const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {loadData} = require('../../database')
module.exports= (req,res) => {
    const {id} = req.params
    const products = loadData("productos")
    const productFind = products.find(p => p.id === +id)
    const userlogueado = req.session.user

    res.render('detail',{p:productFind,toThousand, userlogueado})
}