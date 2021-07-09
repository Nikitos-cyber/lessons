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

  export default togglePopup;