module.exports = class Book {
  constructor(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
  }
  static create({ name, author, genre }) {
    return new Book(name, author, genre);
  }
};
