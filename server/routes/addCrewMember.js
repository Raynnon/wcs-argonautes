const express = require("express");
const Crew = require("../models/crew");
const router = new express.Router();

router.post("/addCrew", async (req, res) => {
  try {
    const crew = new Crew({ name: req.body.member });
    await crew.save().catch((e) => console.log(e));

    res.send(req.body.member);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
