const Chalk = require("chalk");

module.exports = class Bookshelf {
  constructor(owner, bookList = [], id) {
    this.owner = owner;
    this.bookList = bookList;
    this.id = id;
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

  static create({ owner, bookList, id }) {
    return new Bookshelf(owner, bookList, id);
  }
};

printBooks = (books) => {
  console.log(Chalk.yellowBright`${books.name}`);
};
