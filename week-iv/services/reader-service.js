const BaseService = require("./base-service");
const ReaderModel = require("../models/reader");

class ReaderService extends BaseService {
  constructor() {
    super(ReaderModel, `${__dirname}/../reader-database.json`);
  }
}

module.exports = new ReaderService();
