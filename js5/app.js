// 1)	Show a result of Josephus Problem for 7 soldiers.

let numberOfSoldiers = 7;

let array = [];

for (let i = 1; i <= numberOfSoldiers; i++) {
    array.push(i);
}

console.log(array);

// array.forEach(soldier => {
//     let killedSoldier = soldier + 1;
//     if (killedSoldier <= numberOfSoldiers) {
//         array.splice(soldier, 1);
//         console.log(`${soldier} zabił ${killedSoldier}`);
//     }
// });

// console.log(array);


array.map(killing => {
    killing + 1
})

console.log(array)