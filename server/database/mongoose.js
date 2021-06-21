const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGODB_PATH;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
