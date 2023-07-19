let operatorFunc = true;
let num1 = '';
let num2 = '';
let operator = "";
let operatorSign;

const result1 = document.querySelector('#one')
const result2 = document.querySelector('#two')
result2.textContent = 0;

const btns = document.querySelectorAll("button");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		if (button.id === "operateBtn" && !num2) {
			operatorFunc = false;
			operatorSign = button.textContent;
			result1.textContent = `${num1}  ${operatorSign} `;
			switch(button.className) {
				case "add":
					return operator = "add"
				case "subtract":
					return operator = "subtract";
				case "multiply":
					return operator = 'multiply';
				case "divide":
					return operator = "divide";
			}
		} else if (button.id === "numberBtn" && operatorFunc === true) {
			num1 += button.textContent;
			result1.textContent = num1;
			result2.textContent = num1;
		} else if (button.id === "numberBtn" && !operatorFunc) {
			num2 = button.textContent;
			result1.textContent += num2;
			result2.textContent = num2;
		}
	})
})


function operate(operator) {
	operatorFunc = true;
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    }
}