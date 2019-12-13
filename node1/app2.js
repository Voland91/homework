// 4. Stwórz aplikację która pobierze informację o użytkowniku podając jego id z API i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.
//     Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie ID to identyfikator użytkownika.
//     Endpoint z przykładowym ID: https://jsonplaceholder.typicode.com/users/2
//     Wynik w konsoli:
//     Ervin Howell
//     lat -43.9509
//     lng -34.4618
const request = require('request');
// const url = 'https://jsonplaceholder.typicode.com/users/2';

// request(url, (error, response, body) => {
//     const user = JSON.parse(body);
//     console.log(user.name);
//     console.log('lat:', user.address.geo.lat);
//     console.log('lng:', user.address.geo.lng);
// });

// 5. Rozszerzmy zadanie 4 tak aby nasza aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie. (link do opisu funkcji zwrotnej modułu request)

// request(url, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         console.log(user.name);
//         console.log('lat:', user.address.geo.lat);
//         console.log('lng:', user.address.geo.lng);
//     }
//     else {
//         console.log('user not found! :(')
//     }

// });


// 6. Dodajmy do zadania 5 możliwość dynamicznego wprowadzania ID poprzez użycie zewnętrznej biblioteki yargs.

// Przykład uruchomienia aplikacji
// node app.js --id=2
// Wynik w konsoli
// Ervin Howell
// lat -43.9509
// lng -34.4618
// node app.js --id=20

const argv = require('yargs').argv;
const userId = argv.id
// const url = `https://jsonplaceholder.typicode.com/users/${userId}`;


// request(url, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         console.log(user.name);
//         console.log('lat:', user.address.geo.lat);
//         console.log('lng:', user.address.geo.lng);
//     }
//     else {
//         console.log('user not found! :(')
//     }

// });


// 7.  Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego użytkownika. Pamiętajmy o odpowiednim zabezpieczeniu naszej aplikacji w przypadku błędu API(podobnie jak w z zadaniu 5).
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika

// const getUser = (id, callback) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     request(url, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             const user = JSON.parse(body);
//             callback(user);
//         }
//         else {
//             console.log('user not found! :(')
//         }
//     })
// };

// const getWeather = (lat, lng, callback) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//     request(url, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             const data = JSON.parse(body);
//             callback(data);
//         }
//         else {
//             console.log('weather not found! :(')
//         }
//     })
// };

// getUser(userId, (user) => {
//     console.log(user.name);
//     console.log('lat:', user.address.geo.lat);
//     console.log('lng:', user.address.geo.lng);
//     getWeather(user.address.geo.lat, user.address.geo.lng, (weather) => {
//         let celcius = (weather.main.temp - 32) / 1.8
//         console.log(weather.main.temp, 'F, ', celcius, 'C');
//     })
// })


// 8. Podzielmy naszą aplikację z punktu 7 na moduły odpowiednio:
// app2.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu user.js
// user.js – plik z pobieraniem danych użytkownika
// weather.js – plik z pobieraniem danych o prognozie pogody

// const getUser = require('./user');
// const getWeather = require('./weather');

// getUser(userId, (user) => {
//     console.log(user.name);
//     console.log('lat:', user.address.geo.lat);
//     console.log('lng:', user.address.geo.lng);
//     getWeather(user.address.geo.lat, user.address.geo.lng, (weather) => {
//         let celcius = (weather.main.temp - 32) / 1.8;
//         console.log(weather.main.temp, 'F, ', celcius, 'C');
//     })
// });


// 9. Dodajmy do zadania 8 zapis do pliku obiektu składającego się z nazwy użytkownika oraz pobranej temperatury.

const getUser = require('./user');
const getWeather = require('./weather');
const fs = require('fs');

getUser(userId, (user) => {
    console.log(user.name);
    console.log('lat:', user.address.geo.lat);
    console.log('lng:', user.address.geo.lng);
    getWeather(user.address.geo.lat, user.address.geo.lng, (weather) => {
        let celcius = (weather.main.temp - 32) / 1.8;
        console.log(weather.main.temp, 'F, ', celcius, 'C');
        let data = {
            name: user.name,
            temperature: weather.main.temp
        }
        fs.writeFile('user.json', JSON.stringify(data), (error) => {
            if (error) {
                console.log('error write')
            }
            else {
                console.log('done!')
            }
        });
    })
});