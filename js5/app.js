// 1)	Show a result of Josephus Problem for 7 soldiers.

let numberOfSoldiers = 7;
let array = [];

for (let i = 1; i <= numberOfSoldiers; i++) {
    array.push(i);
}

for (let i = 0; array.length != 1;) {
    killedSoldier = i + 1
    console.log(`${array[i]} zabił ${array[killedSoldier]}`);
    array.splice(killedSoldier, 1);
    array.push(array[i]);
    array.splice(i, 1);
};

console.log(`${array[0]} popełnił samobójstwo`);