const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  bookshelves: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Bookshelf",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

BookSchema.plugin(require("mongoose-autopopulate"));

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
