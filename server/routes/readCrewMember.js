const express = require("express");
const Crew = require("../models/crew");
const router = new express.Router();

router.get("/crew", async (req, res) => {
  try {
    const crewList = await Crew.find({});
    res.send(crewList);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
