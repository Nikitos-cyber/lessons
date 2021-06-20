  
let inputA = document.querySelector('#a');
let inputB = document.querySelector('#b');
let sumResult = document.querySelector('#sum');
let multResult = document.querySelector('#mult');
let res = document.querySelectorAll('#res');


 let sum = function (a,b){
   return a + b;
 };

 let mult = function (a,b){
   return a * b;
 };

let show = function (){
  sumResult.addEventListener('click',function(){
    res.forEach((item,i)=>{
     if(  sum(+inputA.value,+inputB.value) !== item.value){
      res[0].value = sum(+inputA.value,+inputB.value) ;
      
     }
    });
  });

  multResult.addEventListener('click',function(){
    res.forEach((item,i)=>{
     if(  mult(+inputA.value,+inputB.value) !== item.value){
      res[0].value = mult(+inputA.value,+inputB.value) ;
      
     }
    });
  });

};

show();


let getResult = function(x,y){

  let powNum = Math.pow(x,y);
  

  let arr = [];
  
  do {
  arr.push(powNum  % 10 );
  powNum = Math.floor(powNum / 10);
  
  }while(powNum > 1);
  let result = arr.reduce((acum,item)=>{
    return acum + item;
  });

  return result;

};


console.log( getResult(4,8));

  
