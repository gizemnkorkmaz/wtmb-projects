const Chalk = require("chalk");
module.exports = class Bookshelf {
  constructor(owner) {
    this.owner = owner;
    this.bookList = [];
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
};

printBooks = (books) => {
  console.log(Chalk.yellowBright`${books.name}`);
};
