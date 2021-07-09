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
         
       
      postData(body)
    .then((response)=>{
      if(response.status !== 200){
        throw new Error('status network not 200');
      }
       statusMessage.textContent = successMessage;
    })
    .catch((error)=>{
        statusMessage.textContent = errorMessage;
        console.error(error);
      });
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
    const postData = (body)=>{

      return fetch('./server.php',{
        method:'POST',
        headers:{
          'Content-Type': 'aplication/json'
        },
        body:JSON.stringify(body)
      });

      

    };


   };

   export default sendForm;