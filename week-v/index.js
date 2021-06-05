const express = require("express");
const bodyParser = require("body-parser");

const bookRouter = require("./routes/book");
const readerRouter = require("./routes/reader");
const bookshelfRouter = require("./routes/bookshelf");

require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/book", bookRouter);
app.use("/reader", readerRouter);
app.use("/bookshelf", bookshelfRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening");
});
