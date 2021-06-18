const express = require("express");
const router = new express.Router();

router.post("/addCrew", (req, res) => {
  res.send(req.body.members);
});

module.exports = router;
