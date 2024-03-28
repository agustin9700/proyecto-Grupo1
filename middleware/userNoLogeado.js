function userNoLogueado(req, res, next) {
    if (req.session.user === undefined) {
      next();
    } else {
      res.send("ya estas logueado con la cuenta "+req.cookies.recordarme);
      
    }
  }
  
  module.exports = userNoLogueado;
  