/*
1)	From years in array check for leap years
*/
// let years = [1974, 1900, 1985, 2000, 2020, 2021];
// let year;
// for (let i = 0; i < years.length; i++) {
//     year = years[i];

//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         if (year > 2019) {
//             console.log(year + " will be a leap year");
//         }
//         else {
//             console.log(year + " was a leap year");
//         }

//     }
//     else {
//         if (year > 2019) {
//             console.log(year + " won't be a leap year");
//         }
//         else {
//             console.log(year + " wasn't a leap year");
//         }
//     }
// }


/*
2)	Calculate factorial of 7
*/
// let myNumber = 7;
// let factorial = 1;
// for (let i = 1; i <= myNumber; i++) {
//     factorial *= i;
// }
// console.log("The factorial of number " + myNumber + " is: " + factorial);


/*
3)	Calculate the sum of the odd items
*/
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < items.length; i++) {
//     if (items[i] % 2 !== 0) {
//         sum += items[i];
//     }
// }
// console.log("Teh sum of all odd numbers is: " + sum);


/*
4)	Choose highest and lowest values from the given array
*/
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let highest = items[0];
// let lowest = items[0];
// for (let i = 0; i < items.length; i++) {
//     if (lowest > items[i]) {
//         lowest = items[i];
//     }
//     else if (highest < items[i]) {
//         highest = items[i];
//     }
// }
// console.log("In this array the highest number is: " + highest + " and the lowest number is: " + lowest);


/*
5)	Choose longest string from the array.
*/
// let items = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let longest = items[0];
// let shortest = items[0];
// for (let i = 0; i < items.length; i++) {

//     if (shortest.length > items[i].length) {
//         shortest = items[i];
//     }
//     else if (longest.length < items[i].length) {
//         longest = items[i];
//     }
// }
// console.log("In this array the longest string is: " + longest + " and the shortest string is: " + shortest);


/*
6)	Choose all the indexes on the highest value from the given array.
*/
let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let itemsIndex = [];
let highest = 0;
for (let i = 0; i < items.length; i++) {
    if (highest >= items[i]) {
        if (highest == items[i]) {
            itemsIndex.push(i);
        }
    }
    else {
        highest = items[i];
        itemsIndex = [];
        itemsIndex.push(i);
    }
}
console.log("In this array the highest number is: " + highest + " and his indexes are " + itemsIndex);


/*
7)	Calculate average value from the given array for even numbers
*/
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let itemsEven = [];
// let sum = 0;
// for (let i = 0; i < items.length; i++) {
//     if (items[i] % 2 === 0) {
//         itemsEven.push(items[i]);
//     }
// }
// for (let i = 0; i < itemsEven.length; i++) {
//     sum += itemsEven[i];
// }
// console.log("In this array average value of all even numbers is " + (sum / itemsEven.length).toFixed(1));


/*
8)	Calculate average value of items at even indexes. Zero is not considered to be even number
*/
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let itemsEven = [];
// let sum = 0;
// for (let i = 0; i < items.length; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         itemsEven.push(items[i]);
//     }
// }
// for (let i = 0; i < itemsEven.length; i++) {
//     sum += itemsEven[i];
// }
// console.log("In this array average value of items at all even indexes is " + (sum / itemsEven.length).toFixed(1));


/*
9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones
*/
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < items.length; i++) {
//     if (items[i] % 2 === 0) {
//         sum += items[i];
//     }
//     else {
//         sum -= items[i];
//     }
// }
// console.log("In this array the sum of adding even and substracting odd items is: " + sum);