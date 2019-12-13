const pokerSymbols = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K',];

const ranks = [
    'Royal flush',
    'Straight flush',
    'Four of a kind',
    'Full house',
    'Flush',
    'Straight',
    'Three of a kind',
    'Two pairs',
    'Pair',
    'High card',
]

// var Helper = {
//     numberCount: (hand) => {
//         let cardDenoms = {};

//         cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
//             if (pokerSymbols.includes(ele)) {
//                 typeof cardDenoms[ele] === "undefined"
//                     ? (cardDenoms[ele] = 1)
//                     : cardDenoms[ele]++;
//             }
//         });
//         return cardDenoms;
//     },

consecutiveNumbersCheck = () => {
    let sortedIndexes = [1, 2, 3, 4, 5];
    let consecutiveNumbers = true;

    // cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
    //     indexes.push(pokerSymbols.indexOf(ele));
    // });

    // const sortedIndexes = indexes.sort((a, b) => a - b);

    for (let i = 1; i < sortedIndexes.length; i++) {
        if (sortedIndexes[i - 1] != sortedIndexes[i] - 1) {
            consecutiveNumbers = false;
        }
    }
    return consecutiveNumbers;
};

console.log(consecutiveNumbersCheck());

    // sameSuitsCheck: (hand) => {
    //     const suitsInHand = cardNumbers.getHandSuits(hand.split(" "));
    //     const suit = suitsInHand.shift();
    //     let count = 0;

    //     suitsInHand.map(ele => {
    //         if (ele === suit) {
    //             count++;
    //         }
    //     });

    //     return count === 4 ? true : false;
    // },
    // getHighCard: (hand) => {
    //     let highIndex = 0;

    //     cardNumbers.getHandDenominations(hand.split(" ")).map(ele => {
    //         if (pokerSymbols.indexOf(ele) > highIndex) {
    //             highIndex = pokerSymbols.indexOf(ele);
    //         }
    //     });

    //     return pokerSymbols[highIndex];
    // },
//     getResult: (hand) => {
//         const denoms = cardNumbers.getHandDenominations(hand.hand.split(" "));

//         // Royal flush         A => 10 same suit
//         if (
//             denoms.includes("A") &&
//             hand.breakdown.consecutiveNumbers &&
//             hand.breakdown.sameSuits
//         ) {
//             return ranks[0];
//         }

//         // Straight flush      5 consecutive numbers same suit
//         if (hand.breakdown.consecutiveNumbers && hand.breakdown.sameSuits) {
//             return ranks[1];
//         }

//         // Four of a kind      Four cards the same
//         let duplicates = [];

//         for (const prop in hand.breakdown.numberCount) {
//             if (hand.breakdown.numberCount[prop] === 4) {
//                 return ranks[2];
//             } else {
//                 duplicates.push(hand.breakdown.numberCount[prop]);
//             }
//         }

//         // Full house          3 cards same denomination + a pair
//         if (
//             (duplicates[0] === 3 && duplicates[1] === 2) ||
//             (duplicates[1] === 3 && duplicates[0] === 2)
//         ) {
//             return ranks[3];
//         }

//         // Flush               5 cards same suit
//         if (hand.breakdown.sameSuits) {
//             return ranks[4];
//         }

//         // Straight            Any 5 cards in sequence
//         if (hand.breakdown.consecutiveNumbers) {
//             return ranks[5];
//         }

//         // Three of a kind     3 cards same denomination
//         for (const prop in hand.breakdown.numberCount) {
//             if (hand.breakdown.numberCount[prop] === 3) {
//                 return ranks[6];
//             }
//         }

//         // Two pairs           2 sets of 2 cards same denomination
//         // One Pair            2 cards same denomination
//         let pairs = [];
//         denoms.map((ele, i) => {
//             if (denoms[i] === denoms[i + 1]) {
//                 pairs.push(denoms[i]);
//             }
//         });

//         if (pairs.length === 2) {
//             return ranks[7];
//         } else if (pairs.length === 1) {
//             return ranks[8];
//         }

//         // High card           Highest card if no other combination
//         return ranks[9];
//     }
// };

