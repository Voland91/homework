// 1.Stwórzmy pierwszą aplikację z wykorzystaniem Promise. Zadaniem jest stworzeniem funkcji zwracającej Promise któym rozwiązaniem ma być wartość hello world.

// const helloPromise = new Promise((resolve) => resolve('Hello world!'));

// helloPromise
//     .then(text => {
//         console.log(text);
//     });


// 2. Zmodyfikuj zadanie 1 tak aby rozwiązanie Promise było asynchroniczne. Wykorzystajmy do tego celu funkcję setTimeout z 5 sekundowym opóźnieniem.

// const helloPromise = new Promise((resolve) => setTimeout(() => resolve('Hello world!'), 5000));

// helloPromise
//     .then(text => {
//         console.log(text);
//     });


// 3. Zadaniem kolejnym jest stworzenie funkcji odejmowania 2 licz z wykorzystaniem Promise. Stwórzmy regułę jeżeli wynik działania będzie ujemny Promise powinien zwrócić błąd, jeżeli wynik jest dodatni Promise powinien się rozwiązać poprawnie przekazując wynik działania.

const sub = (a, b) => {
    const res = a - b;
    return new Promise((resolve, reject) => {
        if (res >= 0) {
            resolve(res);
        } else {
            reject('something went wrong');
        }
    });
}


sub(5, 4)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });