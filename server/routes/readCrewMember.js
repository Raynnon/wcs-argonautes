const express = require("express");
const router = new express.Router();

router.get("/crew", (req, res) => {
  res.send(["Pierre", "Marion", "Roger"]);
});

module.exports = router;
