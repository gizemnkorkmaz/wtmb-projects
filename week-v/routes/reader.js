const express = require("express");
const router = express.Router();

const ReaderService = require("../services/reader-service");

router.get("/all", async (req, res) => {
  const readers = await ReaderService.findAll();
  res.render("list", { items: readers });
});

router.get("/:id", async (req, res) => {
  const reader = await ReaderService.find(req.params.id);
  res.render("data", { data: reader });
});

router.post("/", async (req, res) => {
  const reader = await ReaderService.add(req.body);
  res.send(reader);
});

router.delete("/:id", async (req, res) => {
  const reader = await ReaderService.del(req.params.id);
  res.send(reader);
});

module.exports = router;
