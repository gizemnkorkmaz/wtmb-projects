module.exports = class Reader{
    constructor(name, age, favBook){
        this.name = name
        this.age = age
        this.favBook = favBook
    }
    sayFavBook(reader){
        console.log(`Hello ${reader.name}. My favorite book is ${this.favBook}`)
    }
}
