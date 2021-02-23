const Chalk = require('chalk')
module.exports = class Bookshelf{
    constructor(owner){
        this.owner = owner
        this.books = []
    }
    printBookNames(){
        this.books.forEach(printName)
    }
}

const printName = book => console.log(`${Chalk.greenBright(book.name)} by ${Chalk.yellow(book.writer)}`)