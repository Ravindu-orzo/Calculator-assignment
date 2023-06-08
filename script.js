let displayNum = ""; //remembers user input
let operatorLock = true; //toggles operator panel ON and OFF
let numpadLock = false; //toggles numpad ON and OFF

//Displays user input numbers
function recorder(input){ 
  if(numpadLock == false){
    displayNum += input;
    document.getElementById('display').value = displayNum;
    
    operatorLock = false; 
  } else{
    //do nothing
  }
}

//Displays user input operators, prevent stacking multiple operators
function operator(input){
  if(operatorLock == false){
    displayNum += input;
    document.getElementById('display').value = displayNum;
    
    operatorLock = true;
    numpadLock = false;
  } else {
    //do nothing
  }
}


//Displays result
function evaluator(){
  document.getElementById('display').value = eval(displayNum);
  let result = eval(displayNum);
  displayNum = result.toString();
  
  numpadLock = true;
  operatorLock = false;
}

//Resets display & memory
function reset(){ 
  displayNum = "";
  document.getElementById('display').value = displayNum;
  
  numpadLock = false;
  operatorLock = true;
}



/////////DEV NOTES --- HOW NUMPAD LOCK AND OPERATOR PANEL LOCK WORKS ////////
//the operator lock is 'true' by default. This prevents a user from entering an operator first before a number. 
//(however, functionality for entering negetive values is not avaialble because of this.)

//the numpad lock is 'false' by default. But numpad locks after hitting equal sign. this prevents the user from adding numbers 
//to the result (ex: if result was 67 and if user hit the 8 key, 8 will concatenate to the result like this 678. numpad lock prevents this)

//after getting the result, user can enter an operator to unlock the numpad and then can type in a number. this will allow the 
//user to perform calculations on the result


//made by Ravindu Wijayarathna--> for evotech web dev course//

