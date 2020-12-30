
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operator(operator, n1, n2) {
    if (operator === "+") {
        return add(n1, n2);
    } else if (operator === "-") {
        return subtract(n1, n2);
    } else if (operator === "*") {
        return multiply(n1, n2);
    } else if (operator === "/") {
        return divide(n1. n2);
    }
}

function updateDisplay(numberKeys) {
    const display = document.querySelector(".display");
    let number = document.createTextNode(numberKeys);
    display.innerHTML = "";
    display.appendChild(number);
}


let numberKeys = 9;
while (numberKeys > 0) {
    const key = document.querySelector(`.\\${numberKeys}`); 
    key.addEventListener("click", function() {
        updateDisplay(numberKeys);
    });
}