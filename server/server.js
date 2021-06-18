const express = require("express");
const cors = require("cors");
const addCrew = require("./routes/addCrewMember");
const readCrew = require("./routes/readCrewMember");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(addCrew);
app.use(readCrew);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
