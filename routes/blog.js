const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogControlle.index);
router.post("/", blogControlle.add);
router.put("/:id", blogControlle.update);
router.delete("/:id", blogControlle.remove);

module.exports = router;
