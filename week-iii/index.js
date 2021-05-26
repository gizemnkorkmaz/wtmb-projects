const Database = require("./database");
const Bookshelf = require("./bookshelf");

const loadedFile = Database.load("bookshelf.json");

const besnaBookshelf = Bookshelf.create(loadedFile);
besnaBookshelf.printBookNames();
