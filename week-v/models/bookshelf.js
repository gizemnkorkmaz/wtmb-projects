const mongoose = require("mongoose");

const BookshelfSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
    minlength: 2,
  },
  books: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

BookshelfSchema.plugin(require("mongoose-autopopulate"));

const BookshelfModel = mongoose.model("Bookshelf", BookshelfSchema);

module.exports = BookshelfModel;
