const  slider = ()=>{

  const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
       
        slider = document.querySelector('.portfolio-content');
      let  listDot = document.querySelector('.portfolio-dots');

  let currentSlide = 0 ,
  interval;
   let dot ;


  const addDot = function(){
   dot = document.querySelectorAll('.dot');
   
    if(dot.length < slide.length){
      listDot.insertAdjacentHTML('afterbegin','<li class="dot"></li>');
       addDot();
    }
      
        
        listDot = document.querySelector('.portfolio-dots');

       
    
     
  };

  

  addDot();
  listDot.children[0].classList.add('dot-active');

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

export default slider;
