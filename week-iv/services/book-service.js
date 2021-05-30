const BaseService = require("./base-service");
const BookModel = require("../models/book");

class BookService extends BaseService {
  constructor() {
    super(BookModel, `${__dirname}/../book-database.json`);
  }
}

module.exports = new BookService();
