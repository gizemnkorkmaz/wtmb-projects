const Database = require("./database");

const loadedFile = Database.load("reader.json");
console.log(loadedFile.name);
