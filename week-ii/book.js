module.exports = class Book{
    constructor(name, writer){
        this.name = name
        this.writer = writer
    }
    addToBookshelf(bookshelf){
        this.bookshelf = bookshelf.owner
        bookshelf.books.push(this)
    }
}
