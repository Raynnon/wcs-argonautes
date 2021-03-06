const express = require("express");
const cors = require("cors");
const addCrewMember = require("./routes/addCrewMember");
const readCrewMember = require("./routes/readCrewMember");
const deleteCrew = require("./routes/deleteCrew");
require("./database/mongoose");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(addCrewMember);
app.use(readCrewMember);
app.use(deleteCrew);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
