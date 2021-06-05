const BaseService = require("./base-service");
const ReaderModel = require("../models/reader");

class ReaderService extends BaseService {
  model = ReaderModel;
}

module.exports = new ReaderService();
