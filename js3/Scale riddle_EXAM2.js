// 5) Scale riddle.With 8 balls EXAM[1, 1, 1, 1, 2, 1, 1, 1].One of the items will be change to two.Indexes are t be chosen at random.Use compressions only two times.

let myArray = [1, 1, 1, 1, 2, 1, 1, 1];

let numbersAndIndexes = myArray.map((number, index) => {
    return { number, index }
});

console.log(numbersAndIndexes);



