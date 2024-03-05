const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/", adminController.admin);
router.get("/listProducts", adminController.admin);


router.get("/crearProduct",adminController.crear)
router.post("/crearProduct", adminController.newProduct);

// "/admin"
router.get("/editar/:id", adminController.editProduct);
router.put("/editar/:id", adminController.updateProduct)

module.exports = router;