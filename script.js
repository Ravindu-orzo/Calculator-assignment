// let a = ".";
// let b = "2"

// let c = b + a + b;
// let num = Number(c);
// console.log(num);

let tempHolder = "";
let tempHolder2 = "";

function recorder(inputStr){
  if(sign == 0){
    tempHolder += inputStr;
  } else {
    tempholder2 += inputStr;
  }
};

let num1 = Number(tempHolder);
let num2 = Number(tempHolder2);
var result = 0;


function operator(sign){
  switch(sign){
    case "add":
      result = num1 + num2;
      break;
    case "substract":
      result = num1 - num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "multiply":
      result = num1*num2;
      break;
  }
};


operator("multiply");
console.log(result);