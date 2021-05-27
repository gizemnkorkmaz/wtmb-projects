const Chalk = require("chalk");
module.exports = class Reader {
  constructor(name, age, favBook) {
    this.name = name;
    this.age = age;
    this.favBook = favBook;
  }
  printFavBook() {
    console.log(
      Chalk.cyan`${this.name}'s favorite book is ${this.favBook.name}`
    );
  }
  static create({ name, age, favBook }) {
    return new Reader(name, age, favBook);
  }
};
