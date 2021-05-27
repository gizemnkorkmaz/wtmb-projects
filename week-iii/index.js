const Bookshelf = require("./models/bookshelf");
const Reader = require("./models/reader");
const Book = require("./models/book");

const BookshelfService = require("./services/bookshelf-service");
const ReaderService = require("./services/reader-service");
const BookService = require("./services/book-service");

console.log("hey");

async function main() {
  const macbeth = new Book("Macbeth", "William Shakespeare", "Tragedy");
  const tempest = new Book("The Tempest", "William Shakespeare", "Comedy");
  const serpil = new Reader("Serpil", 29, macbeth);
  const serpilBookshelf = new Bookshelf(serpil);

  serpilBookshelf.addToBookshelf(macbeth);
  serpilBookshelf.addToBookshelf(tempest);

  await ReaderService.add(serpil);
  await BookService.add(macbeth);

  const books = await BookService.findAll();

  console.log(books[0].name);

  await BookService.del(1);

  const newBooks = await BookService.findAll();
  console.log(newBooks[0].name);
}

main();
