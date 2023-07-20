let num1 = '0';
let num2 = '';
let operatorFunc = true;
let operator = "";
let operatorSign;
let temp = '';
let temp2 = '';
let executed = false;

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
		if (executed === true) {
			num1 = temp;
			num2 = '';
			firstNumAndOp(button.textContent);
			getOperator(button.className);
		} else if(num1 === '' && num2 === '') {
			num1 = temp;
			firstNumAndOp(button.textContent);
			getOperator(button.className);
		} else if (num2 === '') {
		firstNumAndOp(button.textContent);
		getOperator(button.className);
		} else {
			num2 = '';
			firstNumAndOp(button.textContent);
			getOperator(button.className);
		}
	})
})

const equalBtn = document.querySelectorAll("button#equalBtn");
equalBtn.forEach(function(button) {
	button.addEventListener('click', () => {
		if (!operatorSign) {
			result1.textContent = `${num1} =`;
			result2.textContent = num1;
			temp = result2.textContent;
			return;
		} else if (executed === true){
			num2 = temp2;
			result1.textContent = `${temp}  ${operatorSign} ${num2} =`;
			result2.textContent = operate(operator, temp, num2);
			temp = result2.textContent;
			return;
		} else if(num2 === '') {
			result1.textContent = `${num1}  ${operatorSign} ${num1} =`;
			result2.textContent = operate(operator, num1, num1);
			temp = result2.textContent;
			num1 = '';
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

function firstNumAndOp(textContent) {
	operatorFunc = false;
	operatorSign = textContent;
	result1.textContent = `${num1}  ${operatorSign} `;
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