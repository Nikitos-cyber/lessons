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

  export default toggleMenu;