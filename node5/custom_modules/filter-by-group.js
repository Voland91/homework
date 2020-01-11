const fs = require("fs");
var prettyjson = require('prettyjson');

const filterByGroup = args => {
    fs.readFile("./quotes.json", "utf-8", (err, data) => {
        if (err) throw err.message;

        let file = JSON.parse(data);

        let filteredQuotes = file.quotes.filter(elem => elem.group == args.group);

        if (filteredQuotes == false) {
            console.log("Sorry, this group doesn't exist");
        } else {
            console.log(`Filtered Quotes by group: ${args.group}`);
            console.log(prettyjson.render(filteredQuotes, { numberColor: 'white', keysColor: 'yellow', dashColor: 'magenta' }));
        }
    });
};

module.exports = {
    command: "filter <group>",
    desc: "Filtrowanie po grupie",
    handler: filterByGroup
};