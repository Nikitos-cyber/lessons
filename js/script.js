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

  countTimer('01 july 2022');

  // Меню
  const toggleMenu = ()=>{
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li'),
    activeMenu = document.querySelector('.active-menu');

     const handlerMenu = function(){
      menu.classList.toggle('active-menu');
    };

    

   

    
   document.addEventListener('click',(event)=>{
    let target = event.target;
    
  
    
    if(target){
       while(target !== menuItems || target !== btnMenu || target !== closeBtn ){
         
        if( menu.classList.contains('active-menu')){
       if(!target.classList.contains('active-menu') ){
        handlerMenu();
        return;
       }
        
      
      }else if(target.classList.contains('menu')){
        handlerMenu();
        return;
      } else  if(target.tagName === 'HTML'){
        return;
      }

     if(target.classList.contains('close-btn')){
      handlerMenu();
       return;
      }
      if(target.tagName === 'main'){
      if(target.tagName === 'LI'){
        handlerMenu();
        return;
      }}
      target = target.parentNode;
    }
    }
     
   
  
   
    
  
   
  });


  };

  


   toggleMenu();

      
  //popup

  const togglePopup = ()=>{
    

    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

    popup.addEventListener('click',(event)=>{
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
      }else{
         target = target.closest('.popup-content');
        if(!target){

          popup.style.display = 'none';

        }
      }

       
    });

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

   

  };

  togglePopup();
     
     

      


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



 //Табы

 const tabs = () =>{
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');



  const  toggleTabContantains = (index)=>{
    tabContent.forEach((item,i)=>{
       if(index === i ){
         tab[i].classList.add('active');

        tabContent[i].classList.remove('d-none');
      }else{
        tab[i].classList.remove('active');
         tabContent[i].classList.add('d-none');
       }
    });
  };
  tabHeader.addEventListener('click',(event)=>{
    let target = event.target;
    target = target.closest('.service-header-tab');
    

    
    if(target){
      tab.forEach((item,i)=>{
        if(item === target){
          toggleTabContantains(i);

        }
      });
     
    }
   

  });





 };

 tabs();




// Слайдер


const  slider = ()=>{

  const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
       
        slider = document.querySelector('.portfolio-content'),
        listDot = document.querySelector('.portfolio-dots');

  let currentSlide = 0 ,
  interval;
   let dot ;


  const addDot = function(){
   dot = document.querySelectorAll('.dot');
   
    if(dot.length < slide.length){
      listDot.insertAdjacentHTML('afterbegin','<li class="dot"></li>');
       addDot();
    }
      
        
        
    
     
  };

  addDot();

  const prevSlide = (elem,index, strClass)=>{
     elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem,index, strClass)=>{
     elem[index].classList.add(strClass);
  };
  

   slider.addEventListener(`click`,(event)=>{
      event.preventDefault();
      let target = event.target;

      if(!target.matches('#arrow-right , #arrow-left, .dot')){
        return;
      }

    prevSlide(slide,currentSlide,'portfolio-item-active');
    prevSlide(dot,currentSlide,'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      }else if(target.matches('#arrow-left')){
        currentSlide--;
      }else if(target.matches('.dot')){
        dot.forEach((elem,i,arr)=>{
          if(target === elem){
            currentSlide = i;
          }

        });


      }
      
      if(currentSlide >= slide.length){
        currentSlide = 0;
     
      }
      

      if(currentSlide < 0){
      currentSlide = slide.length - 1;
     
      }

    nextSlide(dot,currentSlide,'dot-active');
    nextSlide(slide,currentSlide,'portfolio-item-active');



      });

  const autoPlaySlide = () => {
    prevSlide(slide,currentSlide,'portfolio-item-active');
    prevSlide(dot,currentSlide,'dot-active');
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(dot,currentSlide,'dot-active');
    nextSlide(slide,currentSlide,'portfolio-item-active');
  };

  

   const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide,time);
   };

   const stopSlide = () => {
    clearInterval(interval);

   };

   slider.addEventListener('mouseover',(event)=>{
    if(event.target.matches('.portfolio-btn') || event.target.matches('.dot') ){
      stopSlide();
      
    }
   });
   slider.addEventListener('mouseout',(event)=>{
     if(event.target.matches('.portfolio-btn') || event.target.matches('.dot') ){
      startSlide();
      
    }
     
   });

  

  startSlide(1500);


};


slider();


















const visitPhoto = function (){
const wrap =  document.getElementById('command');

wrap.addEventListener('mouseover',(event)=>{
  let target = event.target;
  
  

  if(target.matches('.command__photo')){

    target.dataset.imgOne = target.src;
    
    target.src = target.dataset.img;
    
  }
  
});

wrap.addEventListener('mouseout',(event)=>{
  let target = event.target;
  
  

  if(target.matches('.command__photo')){

   
    
    target.src = target.dataset.imgOne;
    
  }
  
});
};

visitPhoto();


//Калькулятор
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
calc();





const connect = function(){

  const wrapConnect = document.getElementById('connect');
  let phone = document.getElementById('form2-phone');
  let name = document.getElementById('form2-name');
  let email = document.getElementById('form2-email');
  let message = document.getElementById('form2-message');
  
  
   

  wrapConnect.addEventListener('input',(event)=>{
      let target = event.target;
     

      
    //   if(target.matches('#form2-name')){
    //     let text = target.value;
        
    //     target.value = text.replace(/[^а-я\-\' ']/,'');
        
     
       
    // }
    // if(target.matches('#form2-message')){
    //     let text = target.value;
        
    //     target.value = text.replace(/[^а-я\-\' ']/,'');
        
     
       
    // }
    

    //   if(target.matches('#form2-email')){
        
    //     let text = target.value;
    //      target.value = text.replace(/[^a-z#\@\-_\.!`\*']/i,' ');
       
    // }
  

     
    // if(target.matches('#form2-phone')){
       
    //  let text = target.value;
      
    //      target.value = text.replace(/\D|\(|\)|\-/i,'');
      

       
    // }
  

    });




     email.addEventListener('blur',(event)=>{
       
        email.value = email.value.replace(/[' ']{2,}/gi,' ' );
        email.value = email.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,'' );
        
         email.value = email.value.replace(/[-]+/gi,'-' );
        

     });
      message.addEventListener('blur',(event)=>{
      
        message.value = message.value.replace(/[' ']{2,}/gi,' ' );
        message.value = message.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,'' );
        
         message.value = message.value.replace(/[-]+/gi,'-' );
        

     });

       name.addEventListener('blur',(event)=>{
        name.value = name.value.replace(/[' ']{2,}/gi,' ' );
         name.value = name.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,'' );
         name.value = name.value.replace(/[-]+/gi,'-' );
         let k = name.value.match(/\B[а-я]+\s*/gi);

         let str = '';
         
        // k.forEach((elem,i)=>{
          
        //   let upper = elem.substr(0,1).toUpperCase();
          
        //   let lower = elem.substr(1);
         

          
        //   str = str + upper + lower + ' ';
           
        // });
        // name.value = str;
       });


   



};

connect();




// send-ajax-form

   const sendForm = ()=>{

    const errorMessage = 'Что то  пошло не так...' ,
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const  form = document.getElementById('form1');
     const  form2 = document.getElementById('form2');
    
    let error = new Set();

    

    const  formCreate = (form)=>{
   
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size:2rem;';

     let elementsForm = [...form.elements].filter(item =>{
       return item.tagName.toLowerCase() === 'input' ;
     });
     

      const isValid = (elem)=>{

        if( elem.value.trim() === ''){
          return false;
        }
        
        if(elem.id === 'form2-message'){
           return /^[а-я\d\' '\,\.\?\!]+$/i.test(elem.value);
        }
        if(elem.id === 'form1-name' || elem.id === 'form2-name') {
        return /^[^\w]+$/i.test(elem.value);
       }
        
      
      if(elem.type === 'email'){
          console.log(elem.type);
        return /^\w+$/.test(elem.value);
       }
        
      

       if(elem.type === 'tel'  ){
        return /^\+?\d+$/.test(elem.value);
       }

       return false;

     }

     const  checkIt = (event)=>{
      let target = event.target;
      if(isValid(target)){
        target.style.border = 'solid green';
        error.delete(target);
        
      }else{
         target.style.border = 'solid red';
        error.add(target);
      }
     };

     elementsForm.forEach(item =>{
       item.addEventListener('change',checkIt);
     });
    
      

     

      
    
    form.addEventListener('submit',(event)=>{
      event.preventDefault();
      form.append(statusMessage);
      
     
       const formData = new FormData(form);

      let body = { };

      for( let val of formData.entries()){
        body[val[0]] = val[1];
      }

      
       if(error.size === 0){
         statusMessage.textContent = loadMessage;
         
       
      postData(body,()=>{
        
         statusMessage.textContent = successMessage;
      },(error)=>{
        statusMessage.textContent = errorMessage;
        console.log(error);
      });
      }else{
        
      }
    

     

  
     const clearInput = (form)=>{
 
    const input = form.querySelectorAll('input');

    
    
    input.forEach((elem)=>{
      if(elem.value){
         console.log(elem.value);
        elem.value = '';
        elem.style.border = 'none';
       
      }
    });

      };

      clearInput(form);

      
    });
  };
 

  formCreate(form);
  formCreate(form2);
    const postData = (body,outputData,errorData)=>{

       const request = new XMLHttpRequest();

      request.addEventListener('readystatechange',()=>{
              if(request.readyState !== 4 ){
                return ;
              }
              if(request.status === 200){
                outputData();
                
               
              }else{
                errorData(request.status);
                
              }
            
      });
      request.open('POST','./server.php');
      request.setRequestHeader('Content-Type','aplication/json');

     

      request.send(JSON.stringify(body));

    };


   };
   sendForm();
    
    
    
      
       



});