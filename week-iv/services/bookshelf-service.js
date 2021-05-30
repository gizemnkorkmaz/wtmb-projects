const BaseService = require("./base-service");
const BookshelfModel = require("../models/bookshelf");

class BookshelfService extends BaseService {
  constructor() {
    super(BookshelfModel, `${__dirname}/../bookshelf-database.json`);
  }
}

module.exports = new BookshelfService();
