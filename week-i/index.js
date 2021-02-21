//Create Reader Class
class Reader{
    constructor(name, age, favBook){
        this.name = name
        this.age = age
        this.favBook = favBook
    }
    sayFavBook(reader){
        console.log(`Hello ${reader.name}. My favorite book is ${this.favBook}`)
    }
}

//Create New Readers
const gizem = new Reader('Gizem', 29, 'The Fountainhead')
const besna = new Reader('Besna', 26, 'Emma') 

//Create Book Class
class Book{
    constructor(name, writer){
        this.name = name
        this.writer = writer
    }
    addToBookshelf(bookshelf){
        this.bookshelf = bookshelf.owner
        bookshelf.books.push(this)
    }
}

//Create New Books
const fountainhead = new Book('The Fountainhead', 'Ayn Rand')
const emma = new Book('Emma', 'Jane Austen')
const collector = new Book('The collector', 'John Fowles')

//Create Bookshelf Class
class Bookshelf{
    constructor(owner){
        this.owner = owner
        this.books = []
    }
    printBookNames(){
        this.books.forEach(printName)
    }
}
//Create New Bookshelves using Reader Class
const gizemBookshelf = new Bookshelf(gizem)
const besnaBookshelf = new Bookshelf(besna)

//Use Book Class' 'addBookshelf' method with Bookshelf Classes
fountainhead.addToBookshelf(gizemBookshelf)
emma.addToBookshelf(besnaBookshelf)
collector.addToBookshelf(gizemBookshelf)

//printBookNames Function
const printName = book => console.log(`${book.name} by ${book.writer}`)


//printBookNames method with Bookshelf Classes
gizemBookshelf.printBookNames()
besnaBookshelf.printBookNames()