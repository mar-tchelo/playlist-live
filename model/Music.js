const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: true,
  },
  author: {
    type: "string",
    require: true,
  },
  linkImage: {
    type: "string",
    require: true,
  },
  LinkMusic: {
    type: "string",
    require: true,
  },
});

module.exports = mongoose.model("Music", musicSchema);
