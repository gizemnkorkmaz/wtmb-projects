const express = require("express");
const router = express.Router();

const BookService = require("../services/book-service");
const BookshelfService = require("../services/bookshelf-service");

router.get("/all", async (req, res) => {
  const books = await BookService.findAll();
  res.render("list", { items: books });
});

router.get("/:id", async (req, res) => {
  const book = await BookService.find(req.params.id);
  res.render("data", { data: book });
});

router.post("/", async (req, res) => {
  const book = await BookService.add(req.body);
  res.send(book);
});

router.delete("/:id", async (req, res) => {
  const book = await BookService.del(req.params.id);
  res.send(book);
});

router.post("/:id/bookshelves", async (req, res) => {
  const book = await BookService.find(req.params.id);
  const bookshelf = await BookshelfService.find(req.body.bookshelf);
  await BookService.addToTheBookshelf(book, bookshelf);
  res.send(book);
});

module.exports = router;
