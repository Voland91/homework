// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck. After that the solution is to tell us what is the best poker set. EXAM


let figures = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let colors = ['diamond', 'heart', 'spade', 'club'];


//creating playing deck
let deck = [];
figures.forEach((figure, i) => {
    colors.forEach(color => {
        deck.push({ figure: figure, color: color, index: i });
    })
})


//shiffling cards and picking 5 on your hand
// let yourHand = [];
// for (let i = 0; i <= 4; i++) {
//     let card = Math.floor(Math.random() * deck.length);
//     yourHand.push(deck[card]);
//     deck.splice(card, 1);
// }


let yourHand = [{ figure: 'A', color: 'spade', index: 1 }, { figure: '10', color: 'spade', index: 1 }, { figure: 'J', color: 'spade', index: 2 }, { figure: 'Q', color: 'spade', index: 3 }, { figure: 'K', color: 'spade', index: 4 }]

// sorting from lowest to highest card
yourHand.sort(compare = (a, b) => a.index - b.index);
console.log(yourHand);


// checking for flush
let flush = false;
colors.forEach(col => {
    let colorCheck = yourHand.filter((cardColor) => cardColor.color == col);
    colorCheck.length == 5 ? flush = true : null;
});


// checking for straight
let yourHandIndexes = [];
yourHand.forEach(card =>
    yourHandIndexes.push(card.index));

let strit = true;
let stritCheck = () => {
    for (let i = 1; i < yourHandIndexes.length; i++) {
        if (yourHandIndexes[i - 1] != yourHandIndexes[i] - 1) {
            strit = false;
        }
    }
    if (strit == false && yourHandIndexes[0] == 0) {
        yourHandIndexes[0] = 13;
        yourHandIndexes.push(yourHandIndexes[0]);
        yourHandIndexes.splice(0, 1);
        strit = true;
        for (let i = 1; i < yourHandIndexes.length; i++) {
            if (yourHandIndexes[i - 1] != yourHandIndexes[i] - 1) {
                strit = false;
            }
        }
    }
    return strit;
};


if (stritCheck() == true) {
    console.log(`Congratulations you have Straight ${yourHand[0].figure} to ${yourHand[4].figure}`)
};









// let combinations = { flush, strit };
// switch (combinations) {
//     case combinations.flush:
//         console.log(`Congratulations you have Flush ${yourHand[0].color}s`);
//         break;
//     case strit == true:
//         console.log(`Congratulations you have Straight ${yourHand[0].figure} to ${yourHand[4].figure} `);
//         break;

//     default:
//         console.log(`Your highest card is ${yourHand[4].figure}`);
// }
