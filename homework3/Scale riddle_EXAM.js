// 5) Scale riddle.With 8 balls EXAM[1, 1, 1, 1, 2, 1, 1, 1].One of the items will be change to two.Indexes are t be chosen at random.Use compressions only two times.

let myArray = [1, 1, 2, 1, 1, 1, 1, 1];
let firstShawl = [];
let firstShawlIndex = [];
let secondShawl = [];
let secondShawlIndex = [];
let noChosenOne = [];
let noChosenOneIndex = [];

// putting random 3 balls on the first shawl, 3 another on the second shawl and the 2 other to the "no chosen" box, their indexes goes to the special arrays in same way
for (let i = 0; i <= myArray.length; i++) {
    let random = Math.floor(Math.random() * myArray.length);
    if (firstShawl.length < 3) {
        if (firstShawlIndex.includes(random)) {
            i = 0;
            continue;
        }
        firstShawl.push(myArray[random]);
        firstShawlIndex.push(random);
    } else if (secondShawl.length < 3) {
        if (firstShawlIndex.includes(random) || secondShawlIndex.includes(random)) {
            i = 0;
            continue;
        }
        secondShawl.push(myArray[random]);
        secondShawlIndex.push(random);
    } else if (noChosenOne.length < 2) {
        if (firstShawlIndex.includes(random) || secondShawlIndex.includes(random) || noChosenOneIndex.includes(random)) {
            i = 0;
            continue;
        }
        noChosenOne.push(myArray[random]);
        noChosenOneIndex.push(random);
    }
}

// firstable check if all balls on shawls have same wage, if true, throw away balls from shawl and put random ball from "no chosen" box on first shawl and another ball from box on the second shawl, then go to final weighting, their indexes goes to the special arrays in same way
if ((firstShawl[0] + firstShawl[1] + firstShawl[2]) === (secondShawl[0] + secondShawl[1] + secondShawl[2])) {
    firstShawl = [];
    firstShawlIndex = [];
    secondShawl = [];
    secondShawlIndex = [];
    for (let i = 0; i <= noChosenOne.length; i++) {
        let random = Math.floor(Math.random() * noChosenOne.length);
        if (firstShawl.length < 1) {
            firstShawl.push(noChosenOne[random]);
            firstShawlIndex.push(noChosenOneIndex[random]);
            noChosenOne.splice(random, 1);
            noChosenOneIndex.splice(random, 1);
        } else if (secondShawl.length < 1) {
            secondShawl.push(noChosenOne[random]);
            secondShawlIndex.push(noChosenOneIndex[random]);
            noChosenOne.splice(random, 1);
            noChosenOneIndex.splice(random, 1);
        }
    }
}

// if balls on the first shawl are heavier than the balls on the second shawl, throw away balls from second shawl, put 1 random ball from first shawl to the second shawl and 1 random ball to the "no chosen" box, then go to the final weighting, their indexes goes to the special arrays in same way
else if ((firstShawl[0] + firstShawl[1] + firstShawl[2]) > (secondShawl[0] + secondShawl[1] + secondShawl[2])) {
    secondShawl = [];
    secondShawlIndex = [];
    noChosenOne = [];
    noChosenOneIndex = []
    for (let i = 0; i <= firstShawl.length; i++) {
        let random = Math.floor(Math.random() * firstShawl.length);
        if (secondShawl.length < 1) {
            secondShawl.push(firstShawl[random]);
            secondShawlIndex.push(firstShawlIndex[random]);
            firstShawl.splice(random, 1);
            firstShawlIndex.splice(random, 1);
        } else {
            noChosenOne.push(firstShawl[random]);
            noChosenOneIndex.push(firstShawlIndex[random]);
            firstShawl.splice(random, 1);
            firstShawlIndex.splice(random, 1);
        }
    }
}

// if balls on the second shawl are heavier than the balls on the first shawl, throw away balls from firs shawl, put 1 random ball from second shawl to the first shawl and 1 random ball to the "no chosen" box, then go to the final weighting, their indexes goes to the special arrays in same way
else {
    firstShawl = [];
    firstShawlIndex = [];
    noChosenOne = [];
    noChosenOneIndex = [];
    for (let i = 0; i <= secondShawl.length; i++) {
        let random = Math.floor(Math.random() * secondShawl.length);
        if (firstShawl.length < 1) {
            firstShawl.push(secondShawl[random]);
            firstShawlIndex.push(secondShawlIndex[random]);
            secondShawl.splice(random, 1);
            secondShawlIndex.splice(random, 1);
        } else {
            noChosenOne.push(secondShawl[random]);
            noChosenOneIndex.push(secondShawlIndex[random]);
            secondShawl.splice(random, 1);
            secondShawlIndex.splice(random, 1);
        }
    }
}

// final weighting shows on what index is the heaviest ball
if (firstShawl[0] > secondShawl[0]) {
    console.log(firstShawlIndex[0]);
}

else if (firstShawl[0] < secondShawl[0]) {
    console.log(secondShawlIndex[0]);
}

else {
    console.log(noChosenOneIndex[0]);
}