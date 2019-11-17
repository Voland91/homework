// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

let myValue = "undefined";

let iffe = (function() {
  const setValue = () => {
    return myValue;
  };

  const showValue = () => {
    if (typeof myValue === "string" || typeof myValue === "number") {
      return myValue;
    } else if (myValue === undefined || myValue === null) {
      return "value is incorrect";
    } else {
      return "value is not provided yet";
    }
  };

  const reverseValue = () => {
    if (typeof myValue === "number") {
      return myValue * -1;
    } else if (typeof myValue === "string") {
      return [...myValue].reverse().join("");
    } else {
      return "is it even possible?...";
    }
  };

  return console.log({
    setValue: setValue(),
    showValue: showValue(),
    reverseValue: reverseValue()
  });
})();

//2

const add = function(x, y) {
  return x + y;
};
const subtract = function(x, y) {
  return x - y;
};
const multiply = function(x, y) {
  return x * y;
};
const divide = function(x, y) {
  return x / y;
};

const calculator = (function() {
  let x, y, operator;
  return {
    setOperation: function(setX, setY, setOperator) {
      x = setX;
      y = setY;
      operator = setOperator;
    },
    calculate: function() {
      return `Calculation result: ${operator(x, y)}`;
    }
  };
})();

calculator.setOperation(5, 2, multiply);
console.log(calculator.calculate());

//3

let arr = [
  { x: 5, y: 2 },
  { x: 9, y: -1 },
  { x: 23, y: 123 },
  { x: 476, y: 0 }
];

let BaseObject = {
  x: 0,
  y: 0,
  sum: function() {
    return this.x + this.y;
  }
};

arr.forEach(function(element) {
  let sum = BaseObject.sum.bind(element);
  console.log(sum());
});

//4

let arr = [
  {
    x: 1,
    y: " object one value",
    operation: function() {
      return "operation one prefix " + this.x + this.y;
    }
  },
  {
    x: 2,
    y: " object two value",
    operation: function() {
      return "operation two prefix " + this.x + this.y;
    }
  },
  {
    x: 3,
    y: " object three value",
    operation: function() {
      return "operation three prefix " + this.x + this.y;
    }
  }
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].operation.call(arr[(i + 1) % 3]));
}
