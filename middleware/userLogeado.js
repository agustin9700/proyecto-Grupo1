function userLogeado(req, res, next) {
    if (req.session.user!= undefined) {
      next();
    } else {
      res.send("Esta página es solo para usuarios");
    }
  }
  
  module.exports = userLogeado;
  