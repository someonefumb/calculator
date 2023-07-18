let operatorFunc = true;
let num1 = 0;
let num2 = 0;
let operator = "";

const bod = document.querySelector('body')
const output = document.createElement('p')
bod.appendChild(output);

const btns = document.querySelectorAll("button#numberBtn");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		if (operatorFunc === true) {
			num1 = button.textContent;
			output.textContent += num1;
			num1 = +output.textContent;
		} else {
			num2 = button.textContent;
			output.textContent += num2;
			num2 = +output.textContent;
		}
	})
})

const add = document.querySelectorAll("button.add");
const subtract = document.querySelectorAll("button.subtract");
const multiply = document.querySelectorAll("button.multiply");
const divide = document.querySelectorAll("button.divide");

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