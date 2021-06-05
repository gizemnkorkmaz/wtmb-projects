const BaseService = require("./base-service");
const BookshelfModel = require("../models/bookshelf");

class BookshelfService extends BaseService {
  model = BookshelfModel;
}

module.exports = new BookshelfService();
