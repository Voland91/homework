// 4. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki request i pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). Przeróbmy tak wywołanie naszego zapytania aby wykorzystywało Promise.

// const request = require('request');

// const getUser = (id) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const user = JSON.parse(body);
//                 resolve(user);
//             }
//             else {
//                 reject('user not found! :(');
//             }
//         });
//     });
// };


// getUser(2)
//     .then(user => {
//         console.log(user.name)
//     })
//     .catch(error => {
//         console.log(error)
//     });


// 5.  Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika. Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu naszego zapytania do pogody. Analogicznie jak w zadaniu 4.
// Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

// const request = require('request');

// const getUser = (id) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const user = JSON.parse(body);
//                 resolve(user);
//             }
//             else {
//                 reject('user not found! :(');
//             }
//         });
//     });
// };

// const getWeather = (lat, lng) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const data = JSON.parse(body);
//                 resolve(data);
//             }
//             else {
//                 reject('weather not found! :(');
//             }
//         });
//     });
// };

// getUser(2)
//     .then(user => {
//         console.log(user.name);
//         return getWeather(user.address.geo.lat, user.address.geo.lng);
//     })
//     .then(weather => {
//         let celcius = (weather.main.temp - 273.15);
//         console.log(weather.main.temp, 'K, ', celcius.toFixed([2]), 'C');
//     })
//     .catch(error => {
//         console.log(error)
//     });


// 6. Zmodyfikujmy zadanie 5 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,5,7). Poinformujmy iż nasz Promise został w pełni rozwiązany.

// const request = require('request');

// const getUser = (id) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const user = JSON.parse(body);
//                 resolve(user);
//             }
//             else {
//                 reject('user not found! :(');
//             }
//         });
//     });
// };

// const ids = [2, 4, 7];

// const userPromises = ids.map(id => getUser(id));

// Promise.all(userPromises)
//     .then(users => {
//         users.forEach(user => console.log(user.name));
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('all done');
//     });


// 7. Dodajmy do zadania 5 zapis całego obiektu pogody do pliku wykorzystując wbudowany moduł fs i funkcję writeFile. Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby obsługiwała Promise.

// const fs = require('fs');
// const request = require('request');

// const getUser = (id) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const user = JSON.parse(body);
//                 resolve(user);
//             }
//             else {
//                 reject('user not found! :(');
//             }
//         });
//     });
// };

// const getWeather = (lat, lng) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (!error && response.statusCode === 200) {
//                 const data = JSON.parse(body);
//                 resolve(data);
//             }
//             else {
//                 reject('weather not found! :(');
//             }
//         });
//     });
// };

// let data = {};
// getUser(2)
//     .then(user => {
//         console.log(user.name);
//         data.name = user.name;
//         return getWeather(user.address.geo.lat, user.address.geo.lng);

//     })
//     .then(weather => {
//         let celcius = (weather.main.temp - 273.15);
//         console.log(weather.main.temp, 'K, ', celcius.toFixed([2]), 'C');

//         data.temperature = (`${weather.main.temp} K, (${celcius.toFixed([2])} C)`);
//         fs.writeFile('user.json', JSON.stringify(data), (error) => {
//             if (error) {
//                 console.log('error write');
//             }
//             else {
//                 console.log('saved!');
//             };
//         });
//     })
//     .catch(error => {
//         console.log(error)
//     });


// 8. Jak wiadomo świat JS jest bardzo rozbudowany i nie trzeba za każdym razem tworzyć od nowa konstrukcji asynchronicznych żądań do serwera. Są od tego biblioteki😊 Na stronie https://npmjs.org możemy znaleźć dużo różnych implementacji bibliotek które udostępniają już gotowe obiekty przystosowane do Promise, np.:
// axios (https://www.npmjs.com/package/axios)
// request-promise (https://www.npmjs.com/package/request-promise)
// Zadaniem 8 jest wykorzystanie biblioteki axios. Z zadania 7 podmieńmy request wraz z naszymi Promise na użycie biblioteki axios

// const axios = require('axios');
// const fs = require("fs");
// const argv = require('yargs').argv;

// const id = argv.id;

// const getUser = (userId, callback) => {
//     axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => callback(response.data))
//         .catch(error => console.log('user not found! :('))
// }

// const getWeather = (lat, lng, callback) => {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
//         .then(response => callback(response.data.weather))
//         .catch(error => console.log('weather not found! :('))
// }


// getUser(id, (user => {
//     let data = {};
//     console.log(user.name);
//     data.name = user.name;
//     getWeather(user.address.geo.lat, user.address.geo.lng, (weather => {
//         console.log(weather);
//         data.weather = weather;
//         fs.writeFile('user.json', JSON.stringify(data), (error) => {
//             if (error) {
//                 console.log('write error');
//             }
//             else {
//                 console.log('saved!');
//             }
//         });
//     }))
// }));


// 9. Zamieńmy również z zadania 8 opakowanie funkcji writeFile która została zaimplementowana na wbudowany mechanizm w NodeJS zamieniający naszą funkcję zwrotną na Promise. W tym celu powinniśmy wykorzystać wbudowany moduł util i funkcję util.promisify


const axios = require('axios');
const util = require('util');
const fs = require("fs");
const argv = require('yargs').argv;

const id = argv.id;

const getUser = (userId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => callback(response.data))
        .catch(error => console.log('user not found! :(', error))
}

const getWeather = (lat, lng, callback) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
        .then(response => callback(response.data.weather))
        .catch(error => console.log('weather not found! :(', error))
}

getUser(id, (user => {
    const writeFile = util.promisify(fs.writeFile);
    let data = {};
    console.log(user.name);
    data.name = user.name;
    getWeather(user.address.geo.lat, user.address.geo.lng, (weather => {
        console.log(weather);
        data.weather = weather;
        writeFile('user.json', JSON.stringify(data))
            .then(() => console.log('saved!'))
            .catch(error => console.log('write file error!', error))
    })
    );
}));