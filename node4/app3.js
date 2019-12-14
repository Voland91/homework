// 10.  Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście albumie i przypisanych do niego zdjęciach.
//     Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika.
//     Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
//     Z pobranych zdjęć wyświetlmy wszystkie tytuły.
// Lista adresów do API
//     endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/1
//     endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=1
//     endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1
//     Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek (.catch())


// const axios = require('axios');
// const argv = require('yargs').argv;

// const id = argv.id;

// const getUser = (userId, callback) => {
//     axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => callback(response.data))
//         .catch(error => console.log('user', error.message))
// };

// const getAlbum = (userAlbum, callback) => {
//     axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userAlbum}`)
//         .then(response => callback(response.data))
//         .catch(error => console.log('album', error.message))
// };

// const getPhoto = (albumPhoto, callback) => {
//     axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumPhoto}`)
//         .then(response => callback(response.data))
//         .catch(error => console.log('photo', error.message))
// };

// getUser(id, (user => {
//     console.log(`name: ${user.name}`);
//     getAlbum(user.id, (album => {
//         console.log(`Total number of albums: ${album.length}.`);
//         console.log(`First album title: ${album[0].title}.`);
//         const albumId = album[0].id;
//         getPhoto(albumId, (photo => photo.map((image, index) => console.log(`Album ${index + 1} photos title: ${photo[index].title}`))
//         )
//         );
//     }))
// }));


// 11.Dodajmy do zadania 10 zapis do pliku listy pobranych zdjęć. Plik powinniśmy nazwać zgodnie z nazwą albumu. Jeżeli nazwa albumu przekracza 10 znaków powinniśmy skrócić nazwę naszego pliku.

const axios = require('axios');
const argv = require('yargs').argv;
const util = require('util');
const fs = require("fs");

const id = argv.id;

const getUser = (userId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => callback(response.data))
        .catch(error => console.log('user', error.message))
};

const getAlbum = (userAlbum, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userAlbum}`)
        .then(response => callback(response.data))
        .catch(error => console.log('album', error.message))
};

const getPhoto = (albumPhoto, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumPhoto}`)
        .then(response => callback(response.data))
        .catch(error => console.log('photo', error.message))
};

getUser(id, (user => {
    console.log(`name: ${user.name}`);
    getAlbum(user.id, (album => {
        const albumName = album[0].title;
        console.log(`Total number of albums: ${album.length}.`);
        console.log(`First album title: ${albumName}.`);
        const albumId = album[0].id;
        getPhoto(albumId, (photo => {
            photo.map((image, index) => {
                console.log(`Album ${index + 1} photos title: ${photo[index].title}`);

                const writeFile = util.promisify(fs.writeFile);
                writeFile(`${albumName.substring(0, 10)}.json`, JSON.stringify(photo.map((image, index) => photo[index].title)))
                    .catch(error => console.log('write file error!', error))
            });
        }
        ));
    }))
}));