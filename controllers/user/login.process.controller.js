const bcrypt = require("bcrypt");
const { loadData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = function(req, res) {
    const errors = validationResult(req);
    const users = loadData("users");
    const datoEntrantes = req.body;

    if (errors.isEmpty()) {
        const userCorrecto = users.find(user => 
            user.user === datoEntrantes.user && bcrypt.compareSync(datoEntrantes.password, user.password));

        if (userCorrecto === undefined) {
            // Usuario o contraseña incorrecta
            return res.render("login", { error: "Datos invalidos" });
        } else {
            req.session.user = userCorrecto;
            if (req.body.recordarme !== undefined) {
                res.cookie("recordarme", userCorrecto.user, { maxAge: 30000 });
            }
            return res.redirect("/admin");
        }
    } else {
        // Renderizar la página de inicio de sesión con mensajes de error
        return res.render("login", { errors: errors.array() });
    }
}
