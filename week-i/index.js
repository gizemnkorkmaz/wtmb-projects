class Bookshelf {
  constructor(owner) {
    this.owner = owner;
    this.bookList = [];
  }
  printBookNames() {
    console.log(
      `${this.owner.name} has ${this.bookList.length} books in his/her bookshelf!`
    );
    this.bookList.forEach(printBooks);
  }
  addToBookshelf(book) {
    this.bookList.push(book);
  }
}
class Book {
  constructor(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
  }
}

class Reader {
  constructor(name, age, favBook) {
    this.name = name;
    this.age = age;
    this.favBook = favBook;
  }
  printFavBook() {
    console.log(`${this.name}'s favorite book is ${this.favBook.name}`);
  }
}

printBooks = (books) => {
  console.log(books);
};
const dune = new Book("Dune", "Frank Herbert", "Sci-fi");
const hamlet = new Book("Hamlet", "William Shakespeare", "Tragedy");
const besna = new Reader("Besna", 26, hamlet);
const gizem = new Reader("Gizem", 29, dune);

const besnaBookshelf = new Bookshelf(besna);
const gizemBookshelf = new Bookshelf(gizem);

gizemBookshelf.addToBookshelf(dune);
gizemBookshelf.addToBookshelf(hamlet);
besnaBookshelf.addToBookshelf(besna);

gizemBookshelf.printBookNames();
besna.printFavBook();
