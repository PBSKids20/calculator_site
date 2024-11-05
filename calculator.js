const display= document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
} 

document.addEventListener('keydown', function(event) {
    // Get the pressed key
    const key = event.key; 
  
    // Do something with the key
    if (key === '1') {
        display.value += "1";
    }
    if (key === '2') {
        display.value += "2";
    }
    if (key === '3') {
        display.value += "3";
    }
    if (key === '4') {
        display.value += "4";
    } 
    if (key === '5') {
        display.value += "5";
    }
    if (key === '6') {
        display.value += "6";
    }
    if (key === '7') {
        display.value += "7";
    }
    if (key === '8') {
        display.value += "8";
    }
    if (key === '9') {
        display.value += "9";
    }
    if (key === '0') {
        display.value += "0";
    } 
    if (key === '=') {
        display.value += "+";
    }
    if (key === '+') {
        display.value += "+";
    }
    if (key === '-') {
        display.value += "-";
    }
    if (key === '*') {
        display.value += "*";
    }
    if (key === '/') {
        display.value += "/";
    }
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'c') {
        clearDisplay();
    }
});

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
