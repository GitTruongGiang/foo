const express = require("express");
const router = express.Router();
const {
  createBoo,
  getAllBoo,
  updateBoo,
} = require("../controllers/boo.controller");

router.get("/", getAllBoo);
router.post("/", createBoo);
router.put("/:targetName", updateBoo);

module.exports = router;
