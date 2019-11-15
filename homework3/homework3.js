// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

let myValue = null;

let iffe = (function () {

    const setValue = () => {
        return myValue;
    }

    const showValue = () => {
        if (typeof (myValue) === 'string' || typeof (myValue) === 'number') {
            return myValue;
        }
        else if (myValue === undefined || myValue === null) {
            return 'Value is incorrect';
        }
        else {
            return 'Value is not provided yet';
        }
    }

    const reverseValue = () => {
        if (typeof (myValue) === 'number') {
            return myValue * (-1);
        }
        else if (typeof (myValue) === 'string') {
            return [...myValue].reverse().join('');
        }
        else {
            return "is it even possible?...";
        }
    }

    return console.log({
        setValue: setValue(),
        showValue: showValue(),
        reverseValue: reverseValue(),
    });
})();

