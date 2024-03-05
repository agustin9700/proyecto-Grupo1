module.exports=(req,res)=>{
    const {id,title} = req.query
    
    res.render("admin/deleteProduct", {id, title}, (err,content) => {
        err && res.send(err.message)
        res.render("partials/dashboard",{ views: content})
    })
}