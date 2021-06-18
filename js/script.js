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

  // Меню
  const toggleMenu = ()=>{
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li');

     const handlerMenu = function(){
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click',handlerMenu);

    closeBtn.addEventListener('click',handlerMenu);

    
   menuItems.forEach((item,i,arr)=>{
     item.addEventListener('click',handlerMenu);
   });


  };

  


   toggleMenu();

      
  //popup

  const togglePopup = ()=>{
    

    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');


  //Animate Popup
  let i = 0;
  let idAnimate ;
  const animatePopup = ()=>{
   
    idAnimate  = requestAnimationFrame(animatePopup);
    
    i++;
  
    if (i < 100){
      popupContent.style.top = i + 'px';

    }else{
      cancelAnimationFrame(idAnimate);
    }
      
  };

    popupBtn.forEach((element)=>{
      element.addEventListener('click',()=>{
      popup.style.display = 'block';
      if(document.documentElement.clientWidth > 768){
      idAnimate  = requestAnimationFrame(animatePopup);
      togglePopup();
        }
      });
    });

    popupClose.addEventListener('click', ()=>{
      popup.style.display = 'none';
    });


  };

  togglePopup();
     
     

      

});

 const scrollLink = function (val){

  const linkScroll = document.querySelector('main>a'),
  menu = document.querySelector('menu'),
   menuItems = menu.querySelectorAll('ul>li'),
   portfolio = document.querySelector('#portfolio'),
   serviceBlock = document.querySelector('#service-block'),
   calc = document.querySelector('#calc'),
   command = document.querySelector('#command'),
   connect = document.querySelector('#connect');
   
    
  const doc = document.documentElement;
  let scroll = 0 ;
  console.log(scroll);
  let i = 0;
  let idAnimateScroll;
  
  const animateScroll = function(val){
    
    i += 7;
    idAnimateScroll = setTimeout(animateScroll,1,val);
    if(i < val){
      doc.scrollTop = i;
      console.log(i);
    }else{
      clearTimeout(idAnimateScroll);
      i = 0;
    }
  };
  

  linkScroll.addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,850);
    scroll = doc.scrollTop;
    i = scroll;
    
  });

  menuItems[0].addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,serviceBlock.getBoundingClientRect().top);
    scroll = doc.scrollTop;
    i = scroll;
  });
   menuItems[1].addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,portfolio.getBoundingClientRect().top);
    scroll = doc.scrollTop;
    i = scroll;
  });
   menuItems[2].addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,calc.getBoundingClientRect().top);
    scroll = doc.scrollTop;
    i = scroll;
  });
   menuItems[3].addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,command.getBoundingClientRect().top);
    scroll = doc.scrollTop;
    i = scroll;
  });
  menuItems[4].addEventListener('click',()=>{
    idAnimateScroll = setTimeout(animateScroll,1,connect.getBoundingClientRect().top);
    scroll = doc.scrollTop;
    i = scroll;
  });


  console.log(linkScroll);

 };
 scrollLink();
