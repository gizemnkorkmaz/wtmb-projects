const Chalk = require("chalk");
const Book = require("./book");

module.exports = class Bookshelf {
  constructor(owner, bookList = []) {
    this.owner = owner;
    this.bookList = bookList;
  }
  printBookNames() {
    console.log(
      Chalk.yellow`${this.owner.name} has ${this.bookList.length} books in his/her bookshelf: `
    );
    this.bookList.forEach(printBooks);
  }
  addToBookshelf(book) {
    this.bookList.push(book);
  }

  static create({ owner, bookList }) {
    const bookshelf = new Bookshelf(owner, bookList);

    bookshelf.bookList = bookList.map(Book.create);
    return bookshelf;
  }
};

printBooks = (books) => {
  console.log(Chalk.yellowBright`${books.name}`);
};
