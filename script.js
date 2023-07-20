let num1 = '0';
let num2 = '';
let operatorFunc = true;
let operator = "";
let operatorSign;
let temp = '';
let temp2 = '';
let executed = false;
let order = false;

const result1 = document.querySelector('#one')
const result2 = document.querySelector('#two')
result2.textContent = 0;

const numBtns = document.querySelectorAll("button#numberBtn");
numBtns.forEach(function(button) {
	button.addEventListener('click', () => {
		executed = false;
		if (operatorFunc === true) {
			if(num1 === '0') num1 = '';
			num1 += button.textContent;
			result1.textContent = '';
			result2.textContent = num1;
			num2 = '';
		} else if (!operatorFunc) {
			num2 += button.textContent;
			result1.textContent = `${num1}  ${operatorSign} ${num2}`;
			result2.textContent = num2;
		}
	})
})

const operBtns = document.querySelectorAll("button#operateBtn");
operBtns.forEach(function(button) {
	button.addEventListener('click', () => {
		if(num1 !== '' && num2 !== '' && order === true) {
			temp = operate(operator, num1, num2);
			num1 = temp;
			firstNumAndOp(button.textContent, button.className);
			result2.textContent = temp;
			num2 = '';
			order = false;
		} else if (executed === true) {
			num1 = temp;
			num2 = '';
			firstNumAndOp(button.textContent, button.className);
		} else if(num1 === '' && num2 === '') {
			num1 = temp;
			firstNumAndOp(button.textContent, button.className);
		} else if (num2 === '') {
			firstNumAndOp(button.textContent, button.className);
		} else {
			num2 = '';
			firstNumAndOp(button.textContent, button.className);
		}
		order = true;
	})
})

const equalBtn = document.querySelectorAll("#equalBtn");
equalBtn.forEach(function(button) {
	button.addEventListener('click', () => {
		if (!operatorSign) {
			result1.textContent = `${num1} =`;
			result2.textContent = num1;
			return;
		} else if (executed === true){
			num2 = temp2;
			result1.textContent = `${temp}  ${operatorSign} ${num2} =`;
			result2.textContent = operate(operator, temp, num2);
			temp = result2.textContent;
			num1 = '';
			return;
		} else if(num2 === '') {
			num2 = num1;
			temp2 = num2;
			result1.textContent = `${num1}  ${operatorSign} ${num2} =`;
			result2.textContent = operate(operator, num1, num2);
			temp = result2.textContent;
			num1 = '';
			executed = true;
			return;
		} else {
			result1.textContent = `${num1}  ${operatorSign} ${num2} =`;
			result2.textContent = operate(operator, num1, num2);
			temp = result2.textContent;
			temp2 = num2;
			num1 = '';
			num2 = '';
			executed = true;
		}
	})
})

const btns = document.querySelectorAll("button");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		console.log(`number1 ${num1}`);
		console.log(`number2 ${num2}`);
		console.log(`temp ${temp}`);
		console.log(`temp2 ${temp2}`);
	})
})

const clearBtn = document.querySelector('#clearBtn');

function firstNumAndOp(textContent, name) {
	operatorFunc = false;
	operatorSign = textContent;
	result1.textContent = `${num1}  ${operatorSign} `;
	getOperator(name);
}

function getOperator(name) {return operator = name};

function operate(operator, num1, num2) {
	operatorFunc = true;
    switch (operator) {
        case "add":
            return +num1 + +num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    }
}