const express = require("express");
const Crew = require("../models/crew");
const router = new express.Router();

router.post("/addCrew", async (req, res) => {
  try {
    if (req.body.member.length > 20) {
      res.status(413).send("Request is too long (20 char max).");
    } else if (req.body.member.length < 2) {
      res.status(400).send("Request is too short (2 char min).");
    } else if (req.body.member.match(/[0-9]/g) || !req.body.member) {
      res.status(400).send("Request cannot contain numbers or be empty.");
    } else {
      const crew = new Crew({ name: req.body.member });
      await crew.save().catch((e) => console.log(e));

      res.send(req.body.member);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
