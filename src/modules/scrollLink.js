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
  
  let i = 0;
  let idAnimateScroll;
  
  const animateScroll = function(val){
    
    i += 7;
    idAnimateScroll = setTimeout(animateScroll,1,val);
    if(i < val){
      doc.scrollTop = i;
      
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


  

 };

 export default scrollLink;