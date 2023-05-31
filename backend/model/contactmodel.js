const mongoose = require("mongoose");

const conSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  }
});

module.exports = mongoose.model("Contact", conSchema);