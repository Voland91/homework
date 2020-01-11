const axios = require('axios');
var prettyjson = require('prettyjson');

const url = 'http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php';

const getRandomOutHandler = () => {
    axios.get(url)
        .then(response => (console.log(prettyjson.render(response.data, { numberColor: 'white', keysColor: 'yellow', dashColor: 'magenta' }))))
        .catch(error => (console.error(error.message)))
}

module.exports = {
    command: "random-out",
    desc: "Wyświetl losowy cytat z zewnętrznej bazy",
    handler: getRandomOutHandler
};
