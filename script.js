let num1 = '0';
let num2 = '';
let operatorFunc = true;
let operator = "";
let operatorSign;
let temp = '';

const result1 = document.querySelector('#one')
const result2 = document.querySelector('#two')
result2.textContent = 0;

const numBtns = document.querySelectorAll("button#numberBtn");
numBtns.forEach(function(button) {
	button.addEventListener('click', () => {
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
		if(num1 === '' && num2 === '') {
			num1 = temp;
			firstNumAndOp(button.textContent);
			getOperator(button.className);
		} else if (num2 === '') {
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
			num1 = '';
		} else if(num2 === '') {
			result1.textContent = `${num1}  ${operatorSign} ${num1} =`;
			result2.textContent = operate(operator, num1, num1);
			num1 = '0';
			operatorSign = '';
		} else {
			result1.textContent = `${num1}  ${operatorSign} ${num2} =`;
			result2.textContent = operate(operator, num1, num2);
			temp = result2.textContent;
		}
		num1 = '';
		num2 = '';
	})
})

function firstNumAndOp(textContent) {
	operatorFunc = false;
	operatorSign = textContent;
	result1.textContent = `${num1}  ${operatorSign} `;
}

function getOperator(name) {
	switch(name) {
		case "add":
			return operator = "add"
		case "subtract":
			return operator = "subtract";
		case "multiply":
			return operator = 'multiply';
		case "divide":
			return operator = "divide";
	}
}

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