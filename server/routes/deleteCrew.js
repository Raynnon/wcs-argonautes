const express = require("express");
const Crew = require("../models/crew");
const router = new express.Router();

router.delete("/deleteCrew", async (req, res) => {
  try {
    await Crew.deleteMany({});
    res.send("Data successfully deleted");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
