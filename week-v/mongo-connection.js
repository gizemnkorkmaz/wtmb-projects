const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost/booklist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected");
}

main();
