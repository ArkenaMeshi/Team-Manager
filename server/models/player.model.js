const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, "Name must be at least 2 characters."],
  },
  position: { type: String },
  status: {
    type: String,
    enum: ["playing", "not-playing", "undecided"],
    default: "undecided",
  },
});

module.exports = mongoose.model("Player", PlayerSchema);