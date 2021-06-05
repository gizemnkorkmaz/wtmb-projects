const BaseService = require("./base-service");
const BookModel = require("../models/book");

class BookService extends BaseService {
  model = BookModel;

  async addToTheBookshelf(book, bookshelf) {
    book.bookshelves.push(bookshelf);
    bookshelf.books.push(book);
    await book.save();
    await bookshelf.save();
  }
}

module.exports = new BookService();
