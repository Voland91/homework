const addCommand = require("./custom_modules/add");
const listCommand = require("./custom_modules/list");
const deleteCommand = require("./custom_modules/delete");
const randomYourCommand = require("./custom_modules/random");
const filterByGroup = require("./custom_modules/filter-by-group");
const randomOutCommand = require("./custom_modules/random-out");
const fs = require("fs");

try {
  fs.readFileSync("./quotes.json");
} catch (error) {
  let data = { quotes: [] };
  fs.writeFileSync("./quotes.json", JSON.stringify(data));
}

require("yargs")
  .command(addCommand)
  .command(listCommand)
  .command(deleteCommand)
  .command(randomYourCommand)
  .command(filterByGroup)
  .command(randomOutCommand)
  .demandCommand(1, "Musisz podać przynajmniej jedno polecenie")
  .help().argv;
