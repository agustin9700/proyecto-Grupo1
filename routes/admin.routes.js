const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const { upload } = require("../middleware/uploadfile");

// "/admin"
router.get("/", adminController.admin);
router.get("/listProducts", adminController.admin);


router.get("/crearProduct",adminController.crear)
router.post("/crearProduct", adminController.newProduct);

// "/admin"
router.get("/editar/:id", adminController.editProduct);
router.put("/editar/:id", upload.single('image'), adminController.updateProduct)

// "/admin"
router.get("/eliminar-producto",adminController.deleteProduct)
router.delete("/eliminar-producto/:id",adminController.putDeleteProduct)

module.exports = router;