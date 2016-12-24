$(function() {
//disables dot after one click  
document.querySelector("#dot").addEventListener("click",function(){
$(this).prop('disabled',true);
});

// clicking of numbers
var numberBtnClass = document.querySelectorAll(".numbers");

for ( i =0;i<numberBtnClass.length;i++){
  numberBtnClass[i].addEventListener("click",display);
}

// clicking of operators
  var operatorChosen = document.querySelectorAll(".operators");
  for ( i=0;i<operatorChosen.length;i++){
    operatorChosen[i].addEventListener("click",operation);
  }

// clicking of equal
document.querySelector("#equal").addEventListener("click",performCalc);

document.querySelector("#clear").addEventListener("click",clearScreen);

document.querySelector("#inverse").addEventListener("click",inverseNumber);

document.querySelector("#percentage").addEventListener("click",percent);

});
var oldStr="";
var newStr="";
var operator="";
function operation(){
  console.log(this.innerHTML);
  operator=this.innerHTML;
  // enable the disabled dot 
  $("#dot").prop('disabled',false);
  // clear displayNumbers //put all the strings in old array and empty new array
  document.querySelector("#display").innerHTML = "";
  if(newStr!==""){
  oldStr=newStr;
  newStr="";
  }
  
}

function percent(){
  newStr=newStr/100;
  document.querySelector("#display").innerHTML = newStr;
  
}

function inverseNumber(){
  newStr= -(newStr);
  console.log(newStr);
  document.querySelector("#display").innerHTML = newStr;
}

function clearScreen(){
  oldStr="";
  newStr="";
  $("#dot").prop('disabled',false);
  document.querySelector("#display").innerHTML = "";
}

function display(){
  if(newStr.length<12 ) {  //do not allow more than 12 digits
  newStr+=this.innerHTML;
  
  if(newStr.indexOf(0)===0){   // nested if does not allow first number to be zero
    newStr="";
  }
  
  console.log(newStr);
  document.querySelector("#display").innerHTML = newStr;
  
  }
}
  
function performCalc(){
  // enable the disabled dot
  if(oldStr!==""){
  $("#dot").prop('disabled',false);
  document.querySelector("#display").innerHTML = "";
  switch(operator){
    case '/':
      console.log(oldStr/newStr);
      document.querySelector("#display").innerHTML = oldStr/newStr;
      newStr=oldStr/newStr;
      oldStr="";
      break;
    case '*':
      console.log(oldStr*newStr);
      document.querySelector("#display").innerHTML = oldStr*newStr;
      newStr=oldStr*newStr;
      oldStr="";
      break; 
    case '+':
      console.log(oldStr+newStr);
      document.querySelector("#display").innerHTML = (+oldStr)+(+newStr);
      newStr=(+oldStr)+(+newStr);
      oldStr="";
      break;
  case '-':
      console.log(oldStr-newStr);
      document.querySelector("#display").innerHTML = oldStr-newStr;
      newStr=oldStr-newStr;
      oldStr="";
      
    
  }
  }
  else
  {
    //do nothing
  }

}


