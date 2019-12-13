// 10.  Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście albumie i przypisanych do niego zdjęciach.
//     Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika.
//     Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
//     Z pobranych zdjęć wyświetlmy wszystkie tytuły.
// Lista adresów do API
//     endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/1
//     endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=1
//     endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1
//     Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek (.catch())


const axios = require('axios');
const util = require('util');
const fs = require("fs");
const argv = require('yargs').argv;

const id = argv.id;

const getUser = (userId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => callback(response.data))
        .catch(error => console.log('user not found! :(', error))
};

const getAlbum = (userAlbum, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userAlbum}`)
        .then(response => callback(response.data.title))
        .catch(error => console.log('album not found! :(', error))
};

const getPhoto = (albumPhoto, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${albumPhoto}`)
        .then(response => callback(response.data.thumbnailUrl))
        .catch(error => console.log('photo not found! :(', error))
};

getUser(id, (user => {
    console.log(`name: ${user.name}`);
    getAlbum(id, (album => console.log(`first album: ${album}`)));
    getPhoto(id, (photo => console.log(`albums photo: ${photo}`)));
}
));