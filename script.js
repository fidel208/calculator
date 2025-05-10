let num1, num2, operator, result, i;

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
function dot() {
    result = num1 + "." + num2;
}
dot();

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
    else if(operator === ".") {
        return dot();
    }
    else {
        console.log("Invalid operator");
    }
}

const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        input.value = input.value + value;

        for(i = 0; i<10; i++) {
            if(value === "=") {
                const expression = input.value.slice(0, -1);
                const parts = expression.split(/([+\-*/%])/);
                num1 = parseFloat(parts[0]);
                operator = parts[1];
                num2 = parseFloat(parts[2]);

                operate();
                input.value = result;

            }
        }

    });
});