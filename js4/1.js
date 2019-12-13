//1)	Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

// String.prototype.reversing = function () {
//     return this.split("").reverse().join("");
// }

// console.log("ABBA".reversing());


//2)	Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.

// Number.prototype.reversing = function () {
//     return this * (-1);
// }

// console.log((3).reversing());


//Create a function that will return Json from the file

let inputData = require("./Data.json");


//Create a structures to hold data from the file

let myData = [];

for (let i = 0; i < inputData.length; i++) {
    let {
        index: index,
        _id: id,
        cost: cost,
        detailsOfPayent: paymentDetails
    } = inputData[i];
    let newData = new MainEntry(index, id, cost, paymentDetails);
    myData.push(newData);
};

function DetailsOfPayent(type, company, date) {
    this.Type = type;
    this.company = company;
    let [day, month, year] = date.split("-");
    let dayOfWeek = (new Date(Date.parse([year, month, day]))).getDay();
    this.date = { year: Number(year), month: Number(month), dayOfWeek: Number(dayOfWeek) }
};

function MainEntry(index, id, cost, paymentDetails) {
    this.index = Number(index);
    this.id = id;
    this.cost = Number(cost);
    let { Type: type, company: company, date: date } = paymentDetails;
    this.paymentDetails = new DetailsOfPayent(type, company, date);
};

//How much money was spend in 2014

const only2014 = myData.filter((item) => {
    return (item.paymentDetails.date.year) == 2014;
}
);

const totalSpendIn2014 = only2014.reduce((currentTotal, item) => {
    return (parseFloat(item.cost) + currentTotal)
}, 0).toFixed(2);

console.log(`Total spend in 2014: ${totalSpendIn2014}`);
console.log(`-------------------------------------`);


//What company was earning how much

let temporaryData = [];

myData.forEach(name => {
    if (!temporaryData.includes(name.paymentDetails.company)) {
        temporaryData.push(name.paymentDetails.company)
    }
});

temporaryData.forEach(firm => {
    let earn = myData.filter((item) => (item.paymentDetails.company) == firm).reduce((currentTotal, item) => (parseFloat(item.cost) + currentTotal), 0).toFixed(2);
    console.log(`${firm} earned: ${earn}`);
});
console.log(`-------------------------------------`);


//What type on transaction was having what spending’s.
temporaryData = [];

myData.forEach(name => {
    if (!temporaryData.includes(name.paymentDetails.Type)) {
        temporaryData.push(name.paymentDetails.Type)
    }
});

temporaryData.forEach(type => {
    let spend = myData.filter((item) => (item.paymentDetails.Type) == type).reduce((currentTotal, item) => (parseFloat(item.cost) + currentTotal), 0).toFixed(2);
    console.log(`Type ${type} spend: ${spend}`);
});
console.log(`-------------------------------------`);


//Values of the spending in each month

temporaryData = [];

myData.forEach(month => {
    if (!temporaryData.includes(month.paymentDetails.date.month)) {
        temporaryData.push(month.paymentDetails.date.month)
    }
});

let monthName = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

temporaryData.forEach(month => {

    let spend = myData.filter((item) => (item.paymentDetails.date.month) == month).reduce((currentTotal, item) => (parseFloat(item.cost) + currentTotal), 0).toFixed(2);
    console.log(`${monthName[month]} spend: ${spend}`);
});
console.log(`-------------------------------------`);


//Values of the spending in each day of the week

temporaryData = [];

myData.forEach(month => {
    if (!temporaryData.includes(month.paymentDetails.date.dayOfWeek)) {
        temporaryData.push(month.paymentDetails.date.dayOfWeek)
    }
});

let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

temporaryData.forEach(day => {

    let spend = myData.filter((item) => (item.paymentDetails.date.dayOfWeek) == day).reduce((currentTotal, item) => (parseFloat(item.cost) + currentTotal), 0).toFixed(2);
    console.log(`${dayName[day]} spend: ${spend}`);
});
console.log(`-------------------------------------`);