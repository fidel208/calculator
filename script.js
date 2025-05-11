let num1, num2, operator, result, i;


const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

const precedence = {
    '%': 3,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2
};

function calculate(a, op, b) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        default: throw new Error(`Unknown operator: ${op}`);
    }
}

function parseExpression(expression) {
    // Tokenize the expression (numbers and operators)
    const tokens = expression.match(/(\d+\.?\d*)|([+\-*/%])/g) || [];
    
    const values = [];
    const ops = [];
    
    tokens.forEach(token => {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else {
            while (ops.length > 0 && 
                   precedence[ops[ops.length - 1]] >= precedence[token]) {
                processOperation(values, ops);
            }
            ops.push(token);
        }
    });
    
    while (ops.length > 0) {
        processOperation(values, ops);
    }
    
    return values.pop();
}

function processOperation(values, ops) {
    const b = values.pop();
    const a = values.pop();
    const op = ops.pop();
    values.push(calculate(a, op, b));
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if(value === "AC") {
            input.value = "";
        }
        else if(value === "=") {
            try {
                const result = parseExpression(input.value);
                input.value = result;
                }catch(error) {
                console.error("Calculation error", error);
                input.value = "Error";
            }

        }

            if(value === "=") {
                do {
                }while(i<10);

            }
        else {
            input.value = input.value + value;
        }
    });
});