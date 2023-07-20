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

function decimalOper(){
	if (operatorFunc === true) {
		num1.includes('.') ? decimal = true : decimal = false;
		if (decimal === true) {
			return;
		} else {
			num1 = num1 + '.';
			result2.textContent = num1;
		}
	} else if (!operatorFunc) {
		num2.includes('.') ? decimal = true : decimal = false;
		if (decimal === true) {
			return;
		} else if (num2 === '') {
			num2 = '0.';
		} else {
			num2 = num2 + '.';
		}
		result2.textContent = num2;
	}
};

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
	temp = '';
	temp2 = '';
}

function backOper() {
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
}

function getNum(num) {
	executed = false;
	if (operatorFunc === true) {
		if(num1 === '0') num1 = '';
		num1 += num;
		result1.textContent = '';
		result2.textContent = num1;
		num2 = '';
	} else if (!operatorFunc) {
		if(num2 === '0') num2 = '';
		num2 += num;
		result2.textContent = num2;
	}
}

function getOperator(textContent, name) {
	decimal = false;
	if(num1 !== '' && num2 !== '' && order === true) {
		temp = operate(operator, num1, num2);
		num1 = temp;
		firstNumAndOp(textContent, name)
		result2.textContent = temp;
		num2 = '';
		order = false;
	} else if (executed === true) {
		num1 = temp;
		num2 = '';
		firstNumAndOp(textContent, name);
	} else if(num1 === '' && num2 === '') {
		num1 = temp;
		firstNumAndOp(textContent, name);
	} else if (num2 === '') {
		firstNumAndOp(textContent, name);
	} else {
		num2 = '';
		firstNumAndOp(textContent, name);
	}
	order = true;
}

function firstNumAndOp(textContent, name) {
	operatorFunc = false;
	operatorSign = textContent;
	result1.textContent = `${num1}  ${operatorSign} `;
	operatorName(name);
}

function operatorName(name) {return operator = name};

function equalsOper() {
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
}

const result1 = document.querySelector('#one')
const result2 = document.querySelector('#two')
result2.textContent = 0;

const decimalBtn = document.querySelector('#decimalBtn');
decimalBtn.addEventListener('click', decimalOper)

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clear);

const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', backOper);

const numBtns = document.querySelectorAll("#numberBtn");
numBtns.forEach(function(button) {
	button.addEventListener('click', () => {
		getNum(button.textContent);
	});
});

const operBtns = document.querySelectorAll("#operateBtn");
operBtns.forEach(function(button) {
	button.addEventListener('click', () => {
		getOperator(button.textContent, button.className);
	})
})

const equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener('click', () => {
	equalsOper();
})

document.addEventListener('keydown', (event) => {
	if (event.code.includes("Digit") || event.code.includes("Numpad")) {
		getNum(event.key);
	} else if (event.key === '+') {
		getOperator(event.key, "add");
	} else if (event.key === '-') {
		getOperator(event.key, "subtract");
	} else if (event.key === '*' || event.key === 'x') {
		getOperator('*', "multiply");
	} else if (event.key === '/') {
		getOperator(event.key, "divide");
	} else if (event.key === '=' || event.key === 'Enter') {
		equalsOper();
	} else if (event.key === '.') {
		decimalOper();
	} else if (event.key === 'c') {
		clear();
	} else if (event.key === 'Backspace') {
		backOper();
	}
})

function operate(operator, num1, num2) {
	operatorFunc = true;
    switch (operator) {
        case "add":
            return Math.round((+num1 + +num2) * 10**10) / 10**10;
        case "subtract":
            return Math.round((num1 - num2) * 10**10) / 10**10;
        case "multiply":
            return Math.round((num1 * num2) * 10**10) / 10**10;
        case "divide":
            return Math.round((num1 / num2) * 10**10) / 10**10;
    }
}