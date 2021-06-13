  'use strict';


  document.addEventListener('DOMContentLoaded', function(){
    const DomElement = function(selector,height,width,bg,fontSize,position){
    
    this.selector = selector;
    this.height = height;
    this.width = width; 
    this.bg = bg; 
    this.fontSize = fontSize;
    this.position = position;
    this.top = 0;

  };

  DomElement.prototype.chek = function(){
    let result;
    if (this.selector[0] === '.'){
       result = document.createElement('div');
      result.classList.add(this.selector);
    }
    if(this.selector[0] === '#'){
      result = document.createElement('p');
      result.setAttribute('id','best');
    }

    result.style.height = this.height;
    result.style.width = this.width;
    result.style.background = this.bg;
    result.style.fontSize = this.fontSize;
    result.style.position = this.position;
    let body = document.querySelector('body');
    body.insertAdjacentElement('afterbegin', result);
    console.log('result: ', result);
    

  };

  DomElement.prototype.start = function(call){

    call();
   
  };

  let call = function(){
     let i = 0;
  let r = 0;

    document.addEventListener('keydown', function(events){
      let pos = document.querySelector('#best');
    if (events.key === 'ArrowDown'){
     
      
      i = i + 10;
      pos.style.top = i + 'px';
    }
    if (events.key === 'ArrowUp'){
       i = i - 10;
      pos.style.top = i + 'px';
    }

    if (events.key === 'ArrowRight'){
       r = r + 10;
      pos.style.left = r + 'px';
    }
    if (events.key === 'ArrowLeft'){
       r = r - 10;
      pos.style.left = r + 'px';
    }

    });
  };



  const ob1 = new DomElement('#best','100px','100px','red','24px','absolute');

  ob1.chek();
  ob1.start(call);
  
  });