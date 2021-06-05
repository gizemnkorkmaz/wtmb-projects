const express = require("express");
const router = express.Router();

const BookshelfService = require("../services/bookshelf-service");

router.get("/all", async (req, res) => {
  const bookshelves = await BookshelfService.findAll();
  res.render("list", { items: bookshelves });
});

router.get("/:id", async (req, res) => {
  const bookshelf = await BookshelfService.find(req.params.id);
  res.render("data", { data: bookshelf });
});

router.post("/", async (req, res) => {
  const bookshelf = await BookshelfService.add(req.body);
  res.send(bookshelf);
});

router.delete("/:id", async (req, res) => {
  const bookshelf = await BookshelfService.del(req.params.id);
  res.send(bookshelf);
});

module.exports = router;
