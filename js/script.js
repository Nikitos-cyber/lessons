  'use strict';

  let select = document.querySelector('#country');
  let selectTwo = document.querySelector('#city');
  

  function enter(){
    if (select.value === 'rus' ){
      selectTwo.textContent = '';
      selectTwo.insertAdjacentHTML('beforeend',`
      <option value="rus">Москва</option>
      <option value="uk">Санкт-Петербург</option>
      <option value="bel">Новосибирск</option>
      <option value="jap">Екатеренбург</option>
      <option value="bel">Нижний Новгород</option>
      <option value="jap">Kазань</option>
      <option value="bel">Челябинск</option>
      
      `);
    
     
    }
     if (select.value === 'uk' ){
      selectTwo.textContent = '';
      selectTwo.insertAdjacentHTML('beforeend',`
      <option value="rus">Киев</option>
      <option value="uk">Харьков</option>
      <option value="bel">Одесса</option>
      <option value="jap">Днепр</option>
      <option value="bel">Донецк</option>
      <option value="jap">Запорожец</option>
      <option value="bel">Львов</option>
      
      `);
      
    }

     if (select.value === 'jap'  ){
      selectTwo.textContent = '';
      selectTwo.insertAdjacentHTML('beforeend',`
      <option value="rus">Токио</option>
      <option value="uk">Киото</option>
      <option value="bel">Осака</option>
      <option value="jap">Икогама</option>
      
      
      `);
    }
     if (select.value === 'bel'  ){
      selectTwo.textContent = '';
      selectTwo.insertAdjacentHTML('beforeend',`
      <option value="rus">Минск</option>
      <option value="uk">Гомель</option>
     
      
      
      `);
    }
  }

  function check(){
     let val = document.createElement('p');
    val.textContent = '';
    selectTwo.insertAdjacentElement('afterend',val);
    select.addEventListener('change', enter);
    selectTwo.addEventListener('change',(event)=>{
     val.textContent = ` ${select.selectedOptions[0].textContent}, ${selectTwo.selectedOptions[0].textContent}`;
    })
  } 


check();
  
