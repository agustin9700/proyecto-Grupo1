const { loadData } = require("../../database")

module.exports= (req,res)=>{
    const users = loadData("users")
    const userr = req.params.user
    const userlogueado = users.find((u => u.user === userr))

    res.render("profileUser", {userlogueado})
}