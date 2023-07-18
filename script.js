let operatorFunc = true;
let num1 = 0;
let num2 = 0;
let operator = "";

const bod = document.querySelector('body')
const output = document.createElement('p')
bod.appendChild(output);
const output2 = document.createElement('p')
bod.appendChild(output2);
const output3 = document.createElement('p')
bod.appendChild(output3);

const btns = document.querySelectorAll("button");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		if (button.id === "numberBtn") {
			if (operatorFunc === true) {
				num1 = button.textContent;
				output.textContent += num1;
				num1 = +output.textContent;
			} else {
				num2 = button.textContent;
				output2.textContent += num2;
				num2 = +output2.textContent;
			}
		} else if (button.id === 'equals') {
				output3.textContent = output.textContent + output2.textContent + `=${operate(operator)}`;
		} else {
			switch(button.className) {
				case "add":
					operatorFunc = false;
					output.textContent += '+';
					return operator = "ADD"
				case "subtract":
					operatorFunc = false;
					output.textContent += '-';
					return operator = "SUBTRACT"
				case "multiply":
					operatorFunc = false;
					output.textContent += '*';
					return operator = "MULTIPLY"
				case "divide":
					operatorFunc = false;
					output.textContent += '/';
					return operator = "DIVIDE"
			}
		}
	})
})

function operate(operator) {
    switch (operator) {
        case "ADD":
			operatorFunc = true;
            return num1 + num2;
        case "SUBTRACT":
			operatorFunc = true;
            return num1 - num2;
        case "MULTIPLY":
			operatorFunc = true;
            return num1 * num2;
        case "DIVIDE":
			operatorFunc = true;
            return num1 / num2;
    }
}