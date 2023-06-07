let record = ""; //remembers user input
let operatorLock = true; //toggles operator panel ON and OFF


//Displays user input numbers
function recorder(input){ 
  record += input;
  document.getElementById('display').value += input;
  operatorLock = false;
}

//Displays user input operators, prevent stacking multiple operators
function operator(input){
  if(operatorLock == false){
    record += input;
    document.getElementById('display').value += input;
    operatorLock = true;
  } else {
    //do nothing
  }
}


//Displays result
function evaluator(){
  document.getElementById('display').value = eval(record);
  record = eval(record);
}

//Resets display & memory
function reset(){ 
  record = "";
  document.getElementById('display').value = record;
}


/////////DEV NOTES ////////
//the operator lock is 'true' by default. This prevents an user entering an operator first before a digit. 
//(functionality for entering negetive values is not avaialble because of this. This will be fixed later)

