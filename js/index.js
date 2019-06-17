const clearBtn = document.querySelector('button:nth-child(1)');
const deleteBtn = document.querySelector('button:nth-child(2)');
const divideBtn = document.querySelector('button:nth-child(3)');
const numOne = document.querySelector('button:nth-child(4)');
const numTwo = document.querySelector('button:nth-child(5)');
const numThree = document.querySelector('button:nth-child(6)');
const muliply= document.querySelector('button:nth-child(7)');
const numFour = document.querySelector('button:nth-child(8)');
const numFive= document.querySelector('button:nth-child(9)');
const numSix = document.querySelector('button:nth-child(10)');
const plus = document.querySelector('button:nth-child(11)');
const numSeven = document.querySelector('button:nth-child(12)');
const numEight = document.querySelector('button:nth-child(13)');
const numNine = document.querySelector('button:nth-child(14)');
const subtract = document.querySelector('button:nth-child(15)');
const dot = document.querySelector('button:nth-child(16)');
const zero = document.querySelector('button:nth-child(17)');
const equal = document.querySelector('button:nth-child(18)');

const input = document.querySelector('.input');
const output = document.querySelector('.output');
let result = 0;

clearBtn.addEventListener('click',()=>{
input.innerHTML = '';
output.innerHTML = '';

dot.disabled = false;
});
deleteBtn.addEventListener('click',()=>{
  if(input.innerHTML.includes('.')){
    input.innerHTML = input.innerHTML.slice(0,input.innerHTML.length - 1); 
  }else{
    dot.disabled = false;

  }

});
divideBtn.addEventListener('click',()=>{
  input.innerHTML += " ÷ ";
  dot.disabled = false;
});
zero.addEventListener('click',()=>{
  input.innerHTML += "0";
  
});
numOne.addEventListener('click',()=>{
input.innerHTML += "1";
});
numTwo.addEventListener('click',()=>{
  input.innerHTML += "2";
});
numThree.addEventListener('click',()=>{
  input.innerHTML += "3";
});
numFour.addEventListener('click',()=>{
  input.innerHTML += "4";
});
numFive.addEventListener('click',()=>{
  input.innerHTML += "5";
});
numSix.addEventListener('click',()=>{
  input.innerHTML += "6";
});
numSeven.addEventListener('click',()=>{
  input.innerHTML += "7";
});
numEight.addEventListener('click',()=>{
  input.innerHTML += "8";
});
numNine.addEventListener('click',()=>{
  input.innerHTML += "9";
});
muliply.addEventListener('click',()=>{
  input.innerHTML += " * ";
  dot.disabled = false;
});
subtract.addEventListener('click',()=>{
  input.innerHTML += " - ";
  dot.disabled = false;
});
plus.addEventListener('click',()=>{
  input.innerHTML += " + ";
  dot.disabled = false;
});

dot.addEventListener('click',()=>{
  input.innerHTML += ".";
  dot.disabled = true;
});
equal.addEventListener('click',()=>{
  dot.disabled = false;
  let inputF = input.innerHTML.split(' ');
  for(var i = 0; i<inputF.length ; i++){
    if (inputF[i]==="*" || inputF[i]==="÷"){
      if(inputF[i]=="*"){
        result = parseFloat(inputF[i-1]) * parseFloat(inputF[i+1]);
        inputF.splice(i-1, 3, result);
        console.log(inputF);
        i=i-1;
      }
      else{
        if(inputF[i+1] === '0') {
           output.innerHTML = 'error'; 
           return;
        }
        result = parseFloat(inputF[i-1]) / parseFloat(inputF[i+1]);
        
        inputF.splice(i-1, 3, result);
        console.log(inputF);
        i=i-1;
      }
    }
    
  }
  for(var i = 0; i<inputF.length ; i++){
    if (inputF[i]==="+" || inputF[i]==="-"){
      if(inputF[i]=="+"){
        result = parseFloat(inputF[i-1]) + parseFloat(inputF[i+1]);
        inputF.splice(i-1, 3, result);
        console.log(inputF);
        i=i-1;
      }
      else{
        result = parseFloat(inputF[i-1]) - parseFloat(inputF[i+1]);
        inputF.splice(i-1, 3, result);
        console.log(inputF);
        i=i-1;
      }
    }
  }

  if(!result){
    output.innerHTML = 'error'; 
    return;
  }
  console.log((result+"").indexOf('.'));
  if((result+"").indexOf('.') === -1){
    output.innerHTML = result;
  }else{
    output.innerHTML = result.toFixed(2);
  }

});


