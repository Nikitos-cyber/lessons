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

export default visitPhoto;