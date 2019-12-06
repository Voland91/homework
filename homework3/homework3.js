// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

// let myValue = "undefined";

// let iffe = (function () {

//     const setValue = () => {
//         return myValue;
//     }

//     const showValue = () => {
//         if (typeof (myValue) === 'string' || typeof (myValue) === 'number') {
//             return myValue;
//         }
//         else if (myValue === undefined || myValue === null) {
//             return 'value is incorrect';
//         }
//         else {
//             return 'value is not provided yet';
//         }
//     }

//     const reverseValue = () => {
//         if (typeof (myValue) === 'number') {
//             return myValue * (-1);
//         }
//         else if (typeof (myValue) === 'string') {
//             return [...myValue].reverse().join('');
//         }
//         else {
//             return "is it even possible?...";
//         }
//     }

//     return console.log({
//         setValue: setValue(),
//         showValue: showValue(),
//         reverseValue: reverseValue(),
//     });
// })();


//2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y) and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value. 

//3) Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
