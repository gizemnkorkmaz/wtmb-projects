const BookService = require("./services/book-service");
const ReaderService = require("./services/reader-service");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

//Shows all books in book-database.json
app.get("/book/all", async (req, res) => {
  const books = await BookService.findAll();
  res.render("book", { books });
});

//Shows books with their unique ids
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await BookService.find(id);
  res.send(book);
});

//Adds books to the database using axios.post
app.post("/book", async (req, res) => {
  const book = BookService.add(req.body);
  res.send(book);
});

//Deletes books from the database using axios.delete
app.delete("/book/:id", async (req, res) => {
  await BookService.del(req.params.id);
  res.send("ok");
});

//Shows all readers in the reader-database.json
app.get("/reader/all", async (req, res) => {
  const readers = await ReaderService.findAll();
  res.render("reader", { readers });
});

//Shows readers with their unique ids
app.get("/reader/:id", async (req, res) => {
  const id = req.params.id;
  const reader = await ReaderService.find(id);
  res.send(reader);
});

//Adds readers to the database using axios.post
app.post("/reader", async (req, res) => {
  const reader = ReaderService.add(req.body);
  res.send(reader);
});

//Deletes readers from the database using axios.delete
app.delete("/reader/:id", async (req, res) => {
  await ReaderService.del(req.params.id);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server listening");
});
