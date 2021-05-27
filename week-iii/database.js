const fs = require("fs");

const save = function (filename, data) {
  fs.writeFile(filename, JSON.stringify(data));
};

const load = function (filename, handler) {
  fs.readFile(filename, "utf-8", (err, file) => {
    if (err) {
      console.log("there is an error", err);
      handler(err);
      return;
    } else {
      handler(null, JSON.parse(file));
    }
  });
};

module.exports = { save, load };
