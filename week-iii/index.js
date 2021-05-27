const Database = require("./database");
const Bookshelf = require("./bookshelf");
const Reader = require("./reader");
const Book = require("./book");

Database.load("bookshelf.json", (err, loadedFile) => {
  const besnaBookshelf = Bookshelf.create(loadedFile);
  besnaBookshelf.printBookNames();
});
