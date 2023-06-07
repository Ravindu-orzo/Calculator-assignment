let record = "";
let operatorLock = true;


//concatenates user input into the record variable  & Display
function recorder(input){ 
  record += input;
  document.getElementById('display').value += input;
  operatorLock = false;
}

//this concatenates an operator into the record variable
function operator(input){
  if(operatorLock == false){
    record += input;
    document.getElementById('display').value += input;
    operatorLock = true; //makes sure that you cannot stack multiple operators
  } else {
    //do nothing
  }
}


//this runs the eval() on string stored in record
function evaluator(){
  document.getElementById('display').value = eval(record);
  record = eval(record);
}

//this resets the calculator display & the record
function reset(){ 
  record = "";
  document.getElementById('display').value = record;
}