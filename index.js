
let zeroBtn = document.getElementById('num0');
let oneBtn = document.getElementById('num1');
let twoBtn = document.getElementById('num2');
let threeBtn = document.getElementById('num3');
let fourBtn = document.getElementById('num4');
let fiveBtn = document.getElementById('num5');
let sixBtn = document.getElementById('num6');
let sevenBtn = document.getElementById('num7');
let eightBtn = document.getElementById('num8');
let nineBtn = document.getElementById('num9');

let decimalBtn = document.getElementById('dot');
let clearBtn = document.getElementById('clear');
let clear2Btn = document.getElementById('clear2');
let backspaceBtn = document.getElementById('backspace');
let answer = document.getElementById('answer');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let numBtns = document.getElementsByClassName('numbers');
let operatorBtns = document.getElementsByClassName('fas');


let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (answer.innerText.includes('.') && btnText === '.') {
        // btnText = "";
        return;
    }

    if(displayVal === '0') 
        displayVal = '';

    displayVal += btnText;
    answer.innerText = displayVal;
}

let performOperation = (clickObj) => {
    let elementId = clickObj.target.id;
    let array = [];
    // let operator = clickObj.target.innerText;

    //we do something when we don't have innerText
    //look at our click object, see if its multiplication/division element && then special operations for those

    switch (elementId) {
        case 'plus':
            pendingVal = displayVal;
            displayVal = '0';
            answer.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case 'minus':
            pendingVal = displayVal;
            displayVal = '0';
            answer.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');    
            break;
        case 'times':
            pendingVal = displayVal;
            displayVal = '0';
            answer.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case 'divide':
            pendingVal = displayVal;
            displayVal = '0';
            answer.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case 'equals':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            answer.innerText = displayVal;
            evalStringArray = [];
            break;
        default:
            break;


    }
}

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', performOperation, false);
}


clearBtn.onclick = () => {
    displayVal = '0';   
    pendingVal = undefined;
    evalStringArray = [];
    answer.innerHTML = displayVal;
}
clear2Btn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    answer.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    displayVal = displayVal.slice(0, displayVal.length - 1);

    if(displayVal === '') {
        displayVal = '0';}
    answer.innerText = displayVal;
}

