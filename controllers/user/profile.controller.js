module.exports= (req,res)=>{
     
    const userlogueado = req.session.user

    res.render("profileUser", {userlogueado})
}