let operatorFunc = true;
let num1 = 0;
let num2 = 0;
let operator = "";

const btns = document.querySelectorAll("button#number");
btns.forEach(function(button) {
	button.addEventListener('click', () => {
		console.log(button.className);
		if (operatorFunc === true) {
			num1 = getNum();
		} else {
			num2 = getNum();
		}

		function getNum() {
			switch(button.className){
				case "zero":
					return "0";
				case "one":
					return "1";
				case "two":
					return "2";
				case "three":
					return "3";
				case "four":
					return "4";
				case "five":
					return "5";
				case "six":
					return "6";
				case "seven":
					return "7";
				case "eight":
					return "8";
				case "nine":
					return "9";
			}
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