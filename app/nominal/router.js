var express = require("express");
var router = express.Router();
const {
  index,
  viewCreate,
  activeCategory,
  viewEdit,
  activeEdit,
  activeDelete,
} = require("./controller");

router.get("/", index);
router.get("/create", viewCreate);
router.post("/create", activeCategory);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", activeEdit);
router.delete("/delete/:id", activeDelete);

module.exports = router;
