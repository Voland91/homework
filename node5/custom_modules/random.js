const fs = require('fs');
var prettyjson = require('prettyjson');

const url = 'http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php';

const getYourRandomHandler = () => {
    fs.readFile("./quotes.json", "utf-8", (err, data) => {
        if (err) {
            console.log("There is no saved quotes yet!\n", error.message)
        };
        let yourQuotes = JSON.parse(data);
        let random = Math.floor(Math.random() * yourQuotes.quotes.length);
        console.log(prettyjson.render(yourQuotes.quotes[random], { numberColor: 'white', keysColor: 'yellow', dashColor: 'magenta' }));
    }
    )
};

module.exports = {
    command: "random",
    desc: "Wyświetl swój losowy cytat",
    handler: getYourRandomHandler
};
