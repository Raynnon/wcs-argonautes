const mongoose = require("mongoose");

const crewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Crew = mongoose.model("Crew", crewSchema);

module.exports = Crew;
