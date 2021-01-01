
let n1 = null;
let n2 = null;
let oper = null;
let clearNumbers = false;
const display = document.querySelector(".display");

function add(n1, n2) {
    return (+n1) + (+n2);
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === "0") {
        return "lol";
    }
    return n1 / n2;
}

function operator(operator, n1, n2) {
    if (operator === "add") {
        return add(n1, n2);
    } else if (operator === "subtract") {
        return subtract(n1, n2);
    } else if (operator === "multiply") {
        return multiply(n1, n2);
    } else if (operator === "divide") {
        return divide(n1, n2);
    }
}

function updateDisplay(num) {
    if (display.textContent !== "0" && display.textContent.length < 12) {
        const displayNum = document.createTextNode(num);
        display.appendChild(displayNum);
    }
}

function storeValues() {
    if (oper == null) {
        n1 = display.textContent;
    } else {
        n2 = display.textContent;
    }

    if (oper !== null && n2 !== null) {
        equals();
    }
    clearNumbers = true;

}

function equals() {
    let result = operator(oper, n1, n2);
    if (result !== "lol") {
        result = Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
    }
    if (result.toString().length > 12) {
        result = result.toExponential(6);
        console.log(result)
    }


    display.innerHTML = "";
    n2 = null;
    n1 = result;
    updateDisplay(result);
}


let numberKeys = 9;
while (numberKeys >= 0) {
    let currentKey = numberKeys;
    const key = document.getElementsByClassName(`${numberKeys}`);
    key[0].addEventListener("click", function () {
        if (clearNumbers === true) {
            display.innerHTML = "";
            clearNumbers = false;
        }
        updateDisplay(currentKey);
    });
    numberKeys--;
}

let misc = ["divide", "multiply", "subtract", "add"];
for (let i = 0; i < misc.length; i++) {
    const key = document.querySelector(`.${misc[i]}`);
    key.addEventListener("click", function () {
        storeValues();
        oper = misc[i];
    });
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function () {
    display.innerHTML = "";
    oper = null;
    n1 = null;
    n2 = null;
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", function () {
    storeValues();
    oper = null;
    n1 = null;
});