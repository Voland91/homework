const fs = require("fs");
var prettyjson = require('prettyjson');

const getListHandler = () => {
  fs.readFile("./quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log("There is no saved quotes yet!\n", error.message);
    } else {
      console.log(prettyjson.render(JSON.parse(data), { numberColor: 'white', keysColor: 'yellow', dashColor: 'magenta' }));
    }
  });
};

module.exports = {
  command: "list",
  desc: "Wyświetl wszystkie cytaty",
  handler: getListHandler
};
