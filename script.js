let displayNum = ""; //remembers user input
let operatorLock = true; //toggles operator panel ON and OFF
let numpadLock = false; //toggles numpad ON and OFF
let evaluatorLock  = false;//toggles equal button ON and OFF
let decimalLock1 = false;//toggles decimal point button ON and OFF
let decimalLock2 = false;
let zeroLock = true;//toggles zero button ON and OFF
let zerocount = 0;//keeps count of how many zeros user added before a decimal point


function recorder(input){ 
  if(numpadLock == false){//prevents user from adding numbers to the end of result number
    displayNum += input;
    document.getElementById('display').value = displayNum;
    
    operatorLock = false;
    decimalLock2 = false;
    evaluatorLock = false;
    zeroLock = false;
  } else{
    //do nothing
  }
}


function operator(input){
  if(operatorLock == false){//lets user add a operator only if an operator isn't already added
    displayNum += input;
    document.getElementById('display').value = displayNum;
    
    operatorLock = true;
    numpadLock = false;
    decimalLock1 = false;
    zeroLock = true;
    zerocount = 0;
    evaluatorLock = false;
  } else {
    //do nothing
  }
}


function decimalPoint(){
  if(decimalLock1 == false && decimalLock2 == false){
    if(displayNum == "" || operatorLock == true){ //automatically adds a zero to the front when decimal point is used without entering a number first
      displayNum += "0.";
      document.getElementById('display').value = displayNum;
    } else{ //doesnt add a zero to the front if there is already a number before hitting decimal point
      displayNum += "."; 
      document.getElementById('display').value = displayNum;
    }
    decimalLock1 = true;
    decimalLock2 = true;
    operatorLock = true;
    evaluatorLock = true;
    zeroLock = false;
    zerocount = 0;
  } else {
    //do nothing
  }
};


function zero(){
  if(numpadLock == false && zeroLock == true ){
    if(zerocount == 0){//let user add one zero before decimal point
      displayNum += "0";
      zerocount = 1;
      document.getElementById('display').value = displayNum;
    } else if(zerocount == 1){//stop user from adding further zeros before a decimal point
      //do nothing
    }
  } else if(numpadLock == false && zeroLock == false){//let user add as many zeros after entering a decimal point
    displayNum += "0";
    document.getElementById('display').value = displayNum;
  }
  operatorLock = false;
  decimalLock2 = false;
  evaluatorLock = false;
};


function evaluator(){
  if (evaluatorLock == false && displayNum != "" && !isNaN(eval(displayNum))){ //calculates result and displays it
    calcHistory();//adds the calculation to history panel
    document.getElementById('display').value = eval(displayNum);
    let result = eval(displayNum);
    displayNum = result.toString();
    
    numpadLock = true;
    operatorLock = false;
    decimalLock1 = true;
    evaluatorLock = true;
  } else if(evaluatorLock == false && displayNum == "") { //handles error:(returning undefined after evaluating empty string)
    document.getElementById('display').value = "0";
  } else if(evaluatorLock == false && isNaN(eval(displayNum))){ //handles error:(returning NaN when dividing by zero)
    displayNum = "";
    document.getElementById('display').value = "cannot divide by zero";

    numpadLock = false;
    operatorLock = true;
  }
}


function reset(){ 
  displayNum = ""; //resets variable and display
  document.getElementById('display').value = "0";
  
  numpadLock = false; //resets all the locks
  operatorLock = true;
  evaluatorLock  = false;
  decimalLock1 = false;
  decimalLock2 = false;
  zeroLock = true;
}

function calcHistory(){
  let result = eval(displayNum);
  document.getElementById('history').innerHTML += `<li>${displayNum} = ${result}</li>`;
}

