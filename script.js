//create a funtion to dispay digits on screen.(check)
//make the inputBox to not erase the number each time you enter a new number

var newLine = true;

function digitBtnPressed(button) {
    if(newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else{
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

//setting up the event handler for the Ac btn.
//The aim is to set input box back to 0.


function btnAcPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

//Creating event handlers for operator btns.

var value1;
var currentOperator;

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true
}

//creating event handler for the dot button 
function dotBtn() {
    var floatNum = parseFloat(document.getElementById("inputBox").value);
    var dotFloat = '.'
    document.getElementById("inputBox").value = floatNum + dotFloat;    
}

function posNegBtn() {
    var positiveNum = parseInt(document.getElementById("inputBox").value);

    document.getElementById("inputBox").value = '-' + positiveNum;
}

//event handler for the brackets.
//keep the on-scrren value concatinate with the open bracket concatinate the second value
//finally close the bracket.

function bracketBtnPressed(openBrac, closeBrac) {
    var num1 = document.getElementById("inputBox").value;
    var openBrac = '(';
    var closeBrac = ')';
    var num2 = document.getElementById("inputBox").value;

    document.getElementById("inputBox").value = num1 + openBrac + num2 + closeBrac;
}




function equalsToBtn() {
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch(currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;

        case "-":
            finalTotal = value1 - value2;
            break;

        case "x":
            finalTotal = value1 * value2;
            break;

        case "/":
            finalTotal = value1 / value2;
            break;
        
        case "%":
            finalTotal = value1 / 100;
            break;

        case "^2": 
            finalTotal = value1 **2;
            break;
        
        case "^3":
            finalTotal = value1 **3;
            break;
            
        case "√":
            finalTotal = value1**(1/2);  
            break; 
            
        case '*y':
            finalTotal = value1 **  value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;
    value1 = 0;
    newLine = true;
}