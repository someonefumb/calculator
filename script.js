let num1 = '0';
let num2 = '';
let operatorFunc = true;
let operator = "";
let operatorSign;
let temp = '';
let temp2 = '';
let executed = false;
let order = false;
let decimal = false;

const result1 = document.querySelector('#one')
const result2 = document.querySelector('#two')
result2.textContent = 0;

const decimalBtn = document.querySelector('#decimalBtn');
decimalBtn.addEventListener('click', () => {
	if (operatorFunc === true) {
		if (decimal === true) {
			return;
		} else {
			num1 = num1 + '.';
			result2.textContent = num1;
		}
	} else if (!operatorFunc) {
		if (decimal === true) {
			return;
		} else if (num2 === '') {
			num2 = '0.';
			result2.textContent = num2;
		} else {
			num2 = num2 + '.';
			result2.textContent = num2;
		}
	}
	decimal = true;
})

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clear);

function clear() {
	num1 = '0';
	num2 = '';
	result1.textContent = '';
	result2.textContent = 0;
	operatorFunc = true;
	operator = "";
	operatorSign;
	executed = false;
	order = false;
}

const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
	if (operatorFunc === true) {
		if (num1 === '0') {
			return;
		} else if (num1.length === 1) {
			num1 = '0';
			result2.textContent = num1;
		} else if (num1 !== ''){
			num1 = num1.substring(0, num1.length-1);
			result2.textContent = num1;
		} else {
			clear();
			num1 = temp;
			result2.textContent = num1;
		}
	} else if (!operatorFunc) {
		if (num2 === '0') {
			return;
		} else if (num2.length === 1) {
			num2 = '0';
			result2.textContent = num2;
		} else {
			num2 = num2.substring(0, num2.length-1);
			result2.textContent = num2;
		}
	}
});

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
			if(num2 === '0') num2 = '';
			num2 += button.textContent;
			result2.textContent = num2;
		}
	})
})

const operBtns = document.querySelectorAll("button#operateBtn");
operBtns.forEach(function(button) {
	button.addEventListener('click', () => {
		decimal = false;
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

const equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener('click', () => {
	decimal = false;
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

const btns = document.querySelectorAll("button");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		console.log(`number1 ${num1}`);
		console.log(`number2 ${num2}`);
		console.log(`temp ${temp}`);
		console.log(`temp2 ${temp2}`);
	})
})

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
            return Math.round((+num1 + +num2) * 10**20) / 10**20;
        case "subtract":
            return Math.round((num1 - num2) * 10**20) / 10**20;
        case "multiply":
            return Math.round((num1 * num2) * 10**20) / 10**20;
        case "divide":
            return Math.round((num1 / num2) * 10**20) / 10**20;
    }
}