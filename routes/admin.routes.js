const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/", adminController.admin); 











// "/admin"
router.get("/editar", adminController.update);

module.exports = router;