// 5) Scale riddle.With 8 balls EXAM[1, 1, 1, 1, 2, 1, 1, 1].One of the items will be change to two.Indexes are t be chosen at random.Use compressions only two times.

let myArray = [1, 1, 1, 1, 2, 1, 1, 1];

// let numbersAndIndexes = myArray.map(n, i);

let numbersAndIndexes = myArray.map((number, index) => {
    return { number, index }
});

// let firstShawl = [];
// let secondShawl = [];

// for (let i = 0; i < numbersAndIndexes.length; i++) {
//     let random = Math.floor(Math.random() * numbersAndIndexes.length);

//     function ifRandom(number, index) {
//         return index != random
//     };
//     if (firstShawl.length == 3 && secondShawl.length == 3) {
//         break;
//     }
//     else if ([firstShawl.index].includes(random) && firstShawl.length < 3) {
//         firstShawl.push(numbersAndIndexes[random]);
//     }
//     else if ([secondShawl.index].includes(random) && secondShawl.length < 3) {
//         secondShawl.push(numbersAndIndexes[random]);
//     }
// }


// if (firstShawl.length == 3 && secondShawl.length == 3) {
//     break;
// }

console.log(numbersAndIndexes.index);

