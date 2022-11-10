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
        // if button is C
        if (buttons[i].textContent==="C") {
            display.innerHTML="";
            display2.innerHTML="";
        }
        // if button is +
        else if (buttons[i].textContent==="+") {
            a = parseInt(display.textContent);
            if (display2.textContent!="") {
                display2.innerHTML=operate(parseInt(display2.innerHTML),a,operator);
                operator="+";
            }
            else {
                operator = "+";
                display2.innerHTML+=a;
            }
            display.innerHTML="";
        }
        // if button is -
        else if (buttons[i].textContent==="-") {
            a = parseInt(display.textContent);
            if (display2.textContent!="") {
                display2.innerHTML=operate(parseInt(display2.innerHTML),a,operator);
                operator = "-";
            }
            else {
                operator = "-";
                display2.innerHTML+=a;
            }
            display.innerHTML="";
        }
        // if button is x
        else if (buttons[i].textContent==="x") {
            a = parseInt(display.textContent);
            if (display2.textContent!="") {
                display2.innerHTML=operate(parseInt(display2.innerHTML),a,operator);
                operator = "*";
            }
            else {
                operator = "*";
                display2.innerHTML+=a;
            }
            display.innerHTML="";
        }
        // if button is /
        else if (buttons[i].textContent==="/") {
            a = parseInt(display.textContent);
            if (display2.textContent!="") {
                display2.innerHTML=operate(parseInt(display2.innerHTML),a,operator);
                operator = "/";
            }
            else {
                operator = "/";
                display2.innerHTML+=a;
            }
            display.innerHTML="";
        }
        // if button is =
        else if (buttons[i].textContent==="=") {
            b = parseInt(display.textContent);
            let result = operate(parseInt(display2.innerHTML),b,operator);
            display2.innerHTML="";
            display.innerHTML = result;
        }
        // button is a digit
        else {
            display.innerHTML+=buttons[i].textContent;
        }
    })
}




// const operator = [];
// let j = 0;
// let k = 0;
// let a = [];
// let result =[];
// let finalresult;
// let temp;
// for(let i = 0; i<buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         if (buttons[i].textContent==="C") {
//             display.innerHTML="";
//             display2.innerHTML="";
//         }
//         else if (buttons[i].textContent==="+") {
//             a[k] = parseInt(display.textContent);
//             operator[j] = "+";
//             if (display2.textContent!="") {
//                 display2.innerHTML+=` ${operator[j]} ${a[k]}`;
//             }
//             else {
//                 display2.innerHTML+=a[k];
//             }
//             k++;
//             j++;
//             display.innerHTML="";
//         }
//         else if (buttons[i].textContent==="-") {
//             a = parseInt(display.textContent);
//             operator[j] = "-";
//             j++;
//             console.log(`operator is ${operator}`);
//             display2.innerHTML+=a;
//             display.innerHTML="";
//         }
//         else if (buttons[i].textContent==="x") {
//             a = parseInt(display.textContent);
//             operator[j] = "*";
//             j++;
//             console.log(`operator is ${operator}`);
//             display2.innerHTML+=a;
//             display.innerHTML="";
//         }
//         else if (buttons[i].textContent==="/") {
//             a = parseInt(display.textContent);
//             operator[j] = "/";
//             j++;
//             console.log(`operator is ${operator}`);
//             display2.innerHTML+=a;
//             display.innerHTML="";
//         }
//         else if (buttons[i].textContent==="=") {
//             a[k] = parseInt(display.textContent);
//             if (operator.length > 1) {
//                 // 9 + 9 + 9
//                 // a[0] + a[1] + a[2]
//                 // for l=0
//                 for (let l = 0; l<operator.length;l+=2) {
//                     result[l] = operate(a[l],a[l+1], operator[l]);
//                     if (a[l+2] === a[a.length-1]) {
//                         finalresult = operate(result[l], a[l+2],operator[l+1]);
//                         console.log(finalresult);
//                     }
//                     else {
//                         result[l+1] = operate(a[l+2],a[l+3],operator[l+1]);
//                     }
//                     if (result.length===2) {
//                         finalresult = operate(result[0], result[1], operator[operator.length-1]);
//                         console.log(finalresult);
//                     }
//                 }
//                 // a[l] + a[l+1] + a[l+2]
//                 // result[0] = operate a[l] + a[l+1]
//                 // if a[l+2] === a[a.length-1] 
//                 // then operate result[0] + a[l+2]
//                 // else result[1] = operate a[l+2] + a [l+3]
//                 // if result.length === 2
//                 //then finalresult = operate(result[0], result[1], operator[operator.length-1])
//                 display.innerHTML = finalresult;
//                 display2.innerHTML="";
//             }
//             else {
//                 let result = operate(a[0],a[1],operator[0]);
//                 display2.innerHTML="";
//                 display.innerHTML = result;
//             }
         
//         }
//         else {
//             display.innerHTML+=buttons[i].textContent;
//         }
//     })
// }

