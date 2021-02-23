
module.exports = class Bookshelf{
    constructor(owner, books = []){
        this.owner = owner
        this.books = books
    }
    printBookNames(){
        this.books.forEach(printName)
    }

    static create({ owner, books }){
        return new Bookshelf(owner, books)
    }
}

const printName = book => console.log(`${book.name} by ${book.writer}`)