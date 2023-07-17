let num1 = +prompt("NUMBER1", "");
let num2 = +prompt("NUMBER2", "");
let operator = prompt("ADD, SUBTRACT, MULTIPLY, DIVIDE", "")

function operate(operator) {
    switch (operator) {
        case "ADD":
                return num1 + num2;
        case "SUBTRACT":
                return num1 - num2;
        case "MULTIPLY":
                return num1 * num2;
        case "DIVIDE":
                return num1 / num2;
    }
}

console.log(operate(operator));