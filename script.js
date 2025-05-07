let num1, num2, operator, result;

function add() {
    result = num1 + num2;
}
add();

function subtract() {
    result = num1 - num2;
}
subtract();

function multiply() {
    result = num1 * num2;
}
multiply();

function divide() {
    result = num1 / num2;
}
divide();
function modulus() {
    result = num1 % num2;
}
modulus();

function operate() {
    if(operator === "+") {
        return add();
    }
    else if(operator === "-") {
        return subtract();
    }
    else if(operator === "*") {
        return multiply()
    }
    else if(operator === "/") {
        return divide();
    }
    else if(operator === "%") {
        return modulus();
    }
    else {
        console.log("Invalid operator");
    }
}