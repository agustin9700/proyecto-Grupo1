module.exports=(req,res)=>{
    const {id,name,imgD} = req.query
    
    res.render("admin/deleteProduct", {id, name,imgD}, (err,content) => {
        err && res.send(err.message)
        res.render("partials/dashboard",{ views: content})
    })
}