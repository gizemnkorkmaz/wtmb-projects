const mongoose = require("mongoose");

const ReaderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  favBook: {
    type: String,
    required: true,
    minlength: 2,
  },
});

const ReaderModel = mongoose.model("Reader", ReaderSchema);

module.exports = ReaderModel;
