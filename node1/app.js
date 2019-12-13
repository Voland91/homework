
// 1. Stwórzmy aplikację która pozwoli na zapisanie całego obiektu do pliku. W tym celu powinniśmy wykorzystać wbudowany moduł fs oraz funkcję pozwalającą na przekonwertowanie obiektu na postać tekstową(JSON.stringify).
// Obiekt do zapisu:
// const user = {
//     name: 'Jan',
//     lastName: 'Nowak'
// };

const fs = require('fs');

const user = {
    name: 'Krzysztof',
    lastName: 'Nowak'
};

let parsed = JSON.stringify(user);


fs.writeFile('user.json', parsed, (error) => {
    if (error) {
        console.log('error')
    }
    else {
        console.log('done!')
    }
});


// 2. Rozszerzmy aplikację z zadania 1 o wprowadzanie dynamiczne danych które chcemy zapisać do pliku. W zadaniu tym może być pomocny zewnętrzny moduł yargs.
// Przykład uruchomienia aplikacji
// node app.js --name=Adam --lastName=Mickiewicz
// Wprowadzane dane powinny być zapisane do pliku.

// const fs = require('fs');
// const argv = require('yargs').argv;

// const user = {
//     name: argv.name,
//     lastName: argv.lastName
// };

// let parsed = JSON.stringify(user);

// fs.writeFile('user.json', parsed, (error) => {
//     if (error) {
//         console.log('error')
//     }
//     else {
//         console.log('done!')
//     }
// });


// 3. Dodajmy do naszej aplikacji z zadania 2 przed nadpisaniem nowymi wartościami, wczytanie już wcześniej zapisanego obiektu. W konsoli wypiszmy jedynie imię wczytanego użytkownika.

// const fs = require('fs');
// const argv = require('yargs').argv;

// const user = {
//     name: argv.name,
//     lastName: argv.lastName
// };

// let parsed = JSON.stringify(user);

// fs.readFile('user.json', 'utf-8', (error, data) => {
//     if (error) {
//         console.log('error read')
//     }
//     else {
//         const userFromData = JSON.parse(data);
//         console.log(userFromData.name);
//     }

//     fs.writeFile('user.json', parsed, (error) => {
//         if (error) {
//             console.log('error write')
//         }
//         else {
//             console.log('done!')
//         }
//     });
// });