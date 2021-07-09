const calc = function(price = 100){
  
  const calcSquare = document.querySelector('.calc-square'),
    calcBlock = document.querySelector('.calc-block'),
    calcType = calcBlock.querySelector('.calc-type'),
     calcCount = calcBlock.querySelector('.calc-count'),
     calcDay = calcBlock.querySelector('.calc-day'),
     totalValue = document.getElementById('total');

     const countSum = () =>{
       let total = 0,
       countValue = 1,
       dayValue = 1;
       const typeValue = calcType.options[calcType.selectedIndex].value,
             squareValue = +calcSquare.value;

        if(calcCount.value > 1){
          countValue += (calcCount.value - 1) / 10; 
        }     

        if(calcDay.value && calcDay.value < 5){
          dayValue *= 2;
        }else if(calcDay.value && calcDay.value < 10){
          dayValue *= 1.5;
        }
             
        if(typeValue && squareValue){
          total = price * typeValue * squareValue * countValue * dayValue;
        }

            
             

      totalValue.textContent = total;
     };

    calcBlock.addEventListener('change',(event)=>{
      let target = event.target;

     

      if(target.matches('.calc-type, .calc-day , .calc-count , .calc-square') ){
       countSum();
      }


    });

     calcBlock.addEventListener('input',(event)=>{
      let target = event.target;

      if(target.matches('.calc-square, .calc-count, .calc-day')){
        target.value = target.value.replace(/\D/,'');

      }
       });

  
};


export default calc;