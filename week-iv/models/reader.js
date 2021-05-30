const Chalk = require("chalk");
module.exports = class Reader {
  constructor(name, age, favBook, id) {
    this.name = name;
    this.age = age;
    this.favBook = favBook;
    this.id = id;
  }
  printFavBook() {
    console.log(
      Chalk.cyan`${this.name}'s favorite book is ${this.favBook.name}`
    );
  }
  static create({ name, age, favBook, id }) {
    return new Reader(name, age, favBook, id);
  }
};
