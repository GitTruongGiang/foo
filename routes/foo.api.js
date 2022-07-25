const express = require("express");
const router = express.Router();
const {
  createFoo,
  getAllFoo,
  updateFoo,
  deleteFoo,
} = require("../controllers/foo.controllers");

router.get("/", getAllFoo);
router.post("/", createFoo);
router.put("/:id", updateFoo);
router.delete("/:id", deleteFoo);

module.exports = router;
