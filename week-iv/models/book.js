module.exports = class Book {
  constructor(name, author, genre, id) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.id = id;
  }
  static create({ name, author, genre, id }) {
    return new Book(name, author, genre, id);
  }
};
