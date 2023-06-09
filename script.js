let displayNum = ""; //remembers user input
let operatorLock = true; //toggles operator panel ON and OFF
let numpadLock = false; //toggles numpad ON and OFF
let evaluatorLock  = false;
let decimalLock1 = false;
let decimalLock2 = false;

let zeroLock = true; //its on at first
let zerocount = 0;

//Displays user input numbers
function recorder(input){ 
  if(numpadLock == false){
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

//prevent stacking multiple operators & displays operators
function operator(input){
  if(operatorLock == false){
    displayNum += input;
    document.getElementById('display').value = displayNum;
    
    operatorLock = true;
    numpadLock = false;
    decimalLock1 = false;
    zeroLock = true;
    zerocount = 0;
  } else {
    //do nothing
  }
}

//prevent stacking multiple decimalpoints & displays decimal points
function decimalPoint(){
  if(decimalLock1 == false && decimalLock2 == false){
    if(displayNum == "" || operatorLock == true){ //CHNAGIN DISPLAYNUM == "0" TO ""
      displayNum += "0.";
      document.getElementById('display').value = displayNum;
    } else{
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

//Prevents adding multiple 0 before a decimal point
function zero(){
  if(numpadLock == false && zeroLock == true ){
    if(zerocount == 0){
      displayNum += "0";
      zerocount = 1;
      document.getElementById('display').value = displayNum;
    } else if(zerocount == 1){
      //do nothing
    }
  } else if(numpadLock == false && zeroLock == false){
    displayNum += "0";
    document.getElementById('display').value = displayNum;
  }
  operatorLock = false;
  decimalLock2 = false;
  evaluatorLock = false;
};

//Displays result
function evaluator(){
  if (evaluatorLock == false && displayNum != "" && !isNaN(eval(displayNum))){
    document.getElementById('display').value = eval(displayNum);
    let result = eval(displayNum);
    displayNum = result.toString();
    
    numpadLock = true;
    operatorLock = false;
    decimalLock1 = true;
  } else if(evaluatorLock == false && displayNum == "") {
    document.getElementById('display').value = "0";
  } else if(evaluatorLock == false && isNaN(eval(displayNum))){
    displayNum = "";
    document.getElementById('display').value = "cannot divide by zero";

    numpadLock = false;
    operatorLock = true;
  }
}

//Resets display & memory
function reset(){ 
  displayNum = "";
  document.getElementById('display').value = "0";
  
  numpadLock = false;
  operatorLock = true;
  evaluatorLock  = false;
  decimalLock1 = false;
  decimalLock2 = false;
  zeroLock = true;
}



/////////DEV NOTES --- HOW NUMPAD LOCK AND OPERATOR PANEL LOCK WORKS ////////
//the operator lock is 'true' by default. This prevents a user from entering an operator first before a number. 
//(however, functionality for entering negetive values is not avaialble because of this.)

//the numpad lock is 'false' by default. But numpad locks after hitting equal sign. this prevents the user from adding numbers 
//to the result (ex: if result was 67 and if user hit the 8 key, 8 will concatenate to the result like this 678. numpad lock prevents this)

//after getting the result, user can enter an operator to unlock the numpad and then can type in a number. this will allow the 
//user to perform calculations on the result


//made by Ravindu Wijayarathna--> for evotech web dev course//


