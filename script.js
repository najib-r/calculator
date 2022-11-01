function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {

    return a / b;
}

function operate(a,b,operator) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }     
}

let operator;
const display = document.getElementById('display');
//const display2 = document.getElementById('display');
const buttons = document.querySelectorAll("button");
console.log(buttons);

for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent==="C") {
            display.innerHTML="";
            display2.innerHTML="";
        }
        else if (buttons[i].textContent==="+") {
            a = parseInt(display.textContent);
            operator = "+";
            console.log(`operator is ${operator}`);
            display2.innerHTML+=a;
            display.innerHTML="";
            console.log(`a is ${a}`);
        }
        else if (buttons[i].textContent==="-") {
            a = parseInt(display.textContent);
            operator = "-";
            console.log(`operator is ${operator}`);
            display2.innerHTML+=a;
            display.innerHTML="";
            console.log(`a is ${a}`);
        }
        else if (buttons[i].textContent==="x") {
            a = parseInt(display.textContent);
            operator = "*";
            console.log(`operator is ${operator}`);
            display2.innerHTML+=a;
            display.innerHTML="";
            console.log(`a is ${a}`);
        }
        else if (buttons[i].textContent==="/") {
            a = parseInt(display.textContent);
            operator = "/";
            console.log(`operator is ${operator}`);
            display2.innerHTML+=a;
            display.innerHTML="";
            console.log(`a is ${a}`);
        }
        else if (buttons[i].textContent==="=") {
            b = parseInt(display.textContent);
            console.log(`Calculating ${a} ${operator} ${b}`);
            let result = operate(a,b,operator);
            console.log(result);
            display2.innerHTML="";
            display.innerHTML = result;
        }
        else {
            display.innerHTML+=buttons[i].textContent;
        }
    })
}

