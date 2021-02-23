const Database = require('./database')

const loadedFile = Database.load('bookshelf.json')
console.log(loadedFile.owner)