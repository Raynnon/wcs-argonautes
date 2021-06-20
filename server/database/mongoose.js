const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://raynnon:takemeinyourschool@cluster0.logd0.mongodb.net/test";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
