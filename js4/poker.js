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

//pushing Ace to the end of figures, just for situation when the Ace is highest card
figures.push('A');

// shiffling cards and picking 5 on your hand
let yourHand = [];
for (let i = 0; i <= 4; i++) {
    let card = Math.floor(Math.random() * deck.length);
    yourHand.push(deck[card]);
    deck.splice(card, 1);
}

// control hand
// let yourHand = [{ figure: 'A', color: 'spade', index: 0 }, { figure: '10', color: 'spade', index: 0 }, { figure: 'J', color: 'spade', index: 11 }, { figure: 'Q', color: 'spade', index: 11 }, { figure: 'K', color: 'heart', index: 11 }]

// sorting from lowest to highest card
yourHand.sort(compare = (a, b) => a.index - b.index);

// logging cards on your hand
yourHand.forEach(card => console.log(`${card.figure} of ${card.color}s`));

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
let royalPosibility = false;

for (let i = 1; i < yourHandIndexes.length; i++) {
    if (yourHandIndexes[i - 1] != yourHandIndexes[i] - 1) {
        strit = false;
    }
}
if (strit == false && yourHandIndexes[0] == 0 && yourHandIndexes[1] != 0) {
    let straight = yourHandIndexes;
    straight[0] = 13
    straight.push(straight[0]);
    straight.splice(0, 1);
    strit = true;
    royalPosibility = true;
    for (let i = 1; i < straight.length; i++) {
        if (straight[i - 1] != straight[i] - 1) {
            strit = false;
            royalPosibility = false;
        }
    }
}

// checking for duplicates fo pari, two pairs, three of kind, foru of kind and full house
let duplicates = [];
yourHandIndexes.forEach(x => duplicates[x] = (duplicates[x] || 0) + 1);

let pair = false;
let three = false;
let twoPairs = false;
let four = false;
let fullHouse = false;

let array = [];

duplicates.forEach((x, i) => {
    switch (true) {
        case x == 4:
            four = true;
            array.push(i);
            break;
        case x == 3:
            three = true;
            array.push(i);
            break;
        case x == 2:
            pair = true;
            array.push(i);
            break;
    }
});

console.log("-------------------");

// checking hihgest combination from the best to the just highest card
switch (true) {
    //Royal flush 
    case flush == true && strit == true && royalPosibility == true:
        console.log(`Congratulations you have Royal Flush ${yourHand[0].figure} to ${yourHand[4].figure} all ${yourHand[0].color}s!`);
        break;
    //Straight flush 
    case flush == true && strit == true:
        console.log(`Congratulations you have Straight Flush ${yourHand[0].figure} to ${yourHand[4].figure} all ${yourHand[0].color}s!`);
        break;
    // Four of a kind  
    case four == true:
        console.log(`Congratulations you have Quads of ${figures[array[0]]}s!`);
        break;
    // // Full house  
    case three == true && pair == true:
        console.log(`Congratulations you have Full house ${figures[array[0]]}s on ${figures[array[1]]}s`);
        break;
    //Flush 
    case flush == true:
        console.log(`Congratulations you have Flush (${yourHand[0].color}s)!`);
        break;
    //Straight 
    case strit == true:
        console.log(`Congratulations you have Straight ${yourHand[0].figure} to ${yourHand[4].figure}!`);
        break;
    // Three of a kind  
    case three == true:
        console.log(`Congratulations you have Three of a ${figures[array[0]]}s!`);
        break;
    //Two pairs 
    case pair == true && array.length == 2:
        console.log(`Congratulations you have Two Pairs: ${figures[array[0]]}s and ${figures[array[1]]}s!`);
        break;
    //Pair 
    case pair == true:
        console.log(`Congratulations you have Pair of ${figures[array[0]]}s!`);
        break;
    default:
        //Highest card
        let high = yourHandIndexes[4];
        console.log(`Your highest card is ${figures[high]}!`);
}  