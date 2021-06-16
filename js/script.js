window.addEventListener('DOMContentLoaded',function(){
  'user strict';

  // Timer 
  function countTimer(deadline){

    let timerHours = document.getElementById('timer-hours'),
      timerMinuts = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');


    function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minuts = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 60 / 60)  );

       function check (...arr){
      
       arr.forEach((item,i,arr)=>{
        let lenght = 0;
        let val = item;
        do {
        lenght++;
        val = val / 10;
        }while(val >= 1);
        if(lenght < 2){
          arr.splice(i,1, '0' + item);
        }
        
       });
       
       
      return arr[0];
      }

     seconds = check(seconds);
     minuts = check(minuts);
     hours = check(hours);

      return {timeRemaining,hours,minuts,seconds};
    }

    

    function updateClock(){

      let timer = getTimeRemaining();

      if(timer.timeRemaining > 0){
        setInterval(function(){
      timer = getTimeRemaining();
      
      timerHours.textContent = timer.hours;
      timerMinuts.textContent = timer.minuts;
      timerSeconds.textContent = timer.seconds;

         
      },1000);
        
      }else{
      timerHours.textContent = "00";
      timerMinuts.textContent = "00";
      timerSeconds.textContent = "00";

      }
      
     
     
      
    }

    
    
     

    updateClock();

      




  }

  countTimer('01 july 2021');



   

      

     
     

      

});