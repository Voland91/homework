/*
1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
*/

let myArray = [1, 6, 23, 8, 4, 8, 3, 7];

// const sumOfArray = (numbersOfArray) => {
//     let sum = 0;
//     for (let i = 0; i < numbersOfArray.length; i++) {
//         sum += myArray[i];
//     }
//     return sum;
// }

// console.log(sumOfArray(myArray));


/*
2)	Create a function that returns sum of first and last elements of given array.
*/

// const sumOfArray = (numbersOfArray) => {
//     let sum = numbersOfArray[0] + (numbersOfArray[numbersOfArray.length - 1]);
//     return sum;
// }

// console.log(sumOfArray(myArray));


/*
3)	Create a function that takes a number and return factorial of that number.
*/

// const factorial = (number) => {
//     let sum = 1;
//     for (let i = 1; i <= number; i++) {
//         sum *= i;
//     }
//     return sum
// }
// console.log(factorial(0));


/*
4)	Create a function that returns given array in reverse order. // no build in functions
*/

// let newArray = [];

// const reversOrder = (value) => {
//     for (let i = 0; i < value.length; i++) {
//         newArray.unshift(value[i]);
//     }
//     return newArray;
// }
// console.log(reversOrder(myArray));

/* other way */

// let newArray = [];

// const reversOrder = (value) => {
//     for (let i = value[value.length - 1]; i >= 0; i--) {
//         newArray.push(value[i]);
//     }
//     return newArray;
// }
// console.log(reversOrder(myArray));


/*
5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]
*/

// let newArray = [];

// const addingNumbers = (value) => {
//     let sum = 0;
//     for (let i = 0; i < value.length; i++) {
//         sum = value[i] + value[i + 1];
//         newArray.push(sum);
//         i++;
//     }
//     return newArray;
// }
// console.log(addingNumbers(myArray));


/*
6)	For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
*/

// myArray.pop()
// let strangeArray = [];

// const strangeAdding = (value) => {
//     let sum = 0;
//     for (let i = 0; i < value.length; i += 2) {
//         if (i == value.length - 1) {
//             sum = value[i] + value[i];
//             strangeArray.push(sum);
//         }
//         else {
//             sum = value[i] + value[i + 1];
//             strangeArray.push(sum);
//         }
//     }
//     return strangeArray;
// }
// console.log(strangeAdding(myArray));


/*
7)	Create a function the return one random element from given array. // use random function
*/

// const randomNumber = (value) => {
//     return value[Math.floor(Math.random() * value.length)];
// }
// console.log(randomNumber(myArray));


/*
8)	Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
*/

// let arr = [1, 6, 23, 8, 4, 8, 3, 7];

// const randomLowest = (yourArray, attempts) => {
//     let randomNumbers = [];
//     for (let i = 0; i < attempts; i++) {
//         let randomIndex = Math.floor(Math.random() * yourArray.length);
//         randomNumbers.push(yourArray[randomIndex]);
//     }
//     return Math.min(...randomNumbers);
// }
// console.log(randomLowest(arr, 3));


/*
9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.
*/

// let resultArray = [];

// const randomizeArray = (value) => {
//     for (let i = 0; i <= value.length; i++) {
//         let random = Math.floor(Math.random() * value.length);
//         resultArray.push(value[random]);
//         value.splice(random, 1);
//         i = 0
//     }
//     return resultArray;
// }
// console.log(randomizeArray(myArray));


/*
10)	Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
*/

// let operations = [-1, 1];

// const randomOperations = (value) => {

//     let sum = 0;
//     for (let i = 0; i < value.length; i++) {
//         sign = operations[Math.floor(Math.random() * operations.length)];
//         sum = sum + (value[i] * sign);
//     }
//     return sum;
// }

// console.log(randomOperations(myArray));


/*
11)	Create a function that will return the current day name in Polish.
*/

// let dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

// const returnDayName = (date) => {
//     let today = new Date;
//     let weekday = today.getDay();
//     return dayName[weekday];
// }
// console.log(returnDayName(dayName));


/*
12)	Create a function that tells us how many days till Friday :)
*/

// let howManyDays;

// const howLong = () => {
//     let today = new Date;
//     let weekday = today.getDay();

//     if (weekday <= 5) {
//         howManyDays = 5 - weekday;
//     }
//     else {
//         howManyDays = weekday;
//     }
//     return howManyDays;
// }
// console.log(howLong());


/*
13)	Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.
*/

// const calc = (a, b) => {
//     return {
//         add: a + b,
//         sub: a - b,
//         multi: a * b,
//         div: a / b
//     };
// }

// console.log(calc(2, 3));