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
export default connect;