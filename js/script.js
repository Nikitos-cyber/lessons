  'use strict';

  

  const start = document.getElementById('start');

  const btnReset = document.querySelector('#cancel');


  const plusButton1 = document.getElementsByTagName('button')[0];
  const plusButton2 = document.getElementsByTagName('button')[1];

  const checkbox = document.querySelector('#deposit-check');
  const additionalIncome = document.querySelectorAll('.additional_income');

   
  const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

  const budgetDayInput = document.getElementsByClassName('budget_day-value')[0];
  const expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
  const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
  const additionalExpensesValue = document.getElementsByClassName(' additional_expenses-value')[0];
  const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
  const targetMonthValue = document.getElementsByClassName('target_month-value')[0];

  const budgetMonthValue = document.querySelector('.budget_month-value');
  const targetAmount = document.querySelector('.target-amount');

  const additionalExpensesIitem = document.querySelector('.additional_expenses-item');
  let expensesItems = document.querySelectorAll('.expenses-items');

  const expensesTitle = document.querySelector('.expenses-title');
  const expensesAmountSum = document.querySelector('.expenses-amount');

  const incomeTitle = document.querySelector('.income-title')[1];
  const incomeAmount = document.querySelector('.income-amount');

  const salaryAmount = document.querySelector('.salary-amount');

  const periodSelect = document.querySelector('.period-select');

  let incomeItem = document.querySelectorAll('.income-items');

  const addIncomeItem = document.querySelector('.additional_income-item');
    
  const editTitle = document.querySelectorAll('.title , .period-amount')[8];

  const expensesAmountVals = document.querySelector('.expenses-amount');


  

  

  class AppData  {
    constructor (){
      this.income =  {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.incomeMonth = 0;
    this.percentDepisit = 0;
    this.moneyDeposit = 0 ;
    this.expensesMonth = 0;
    }
  }
  AppData.prototype.isNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
  };

  AppData.prototype.changeRang =  function(event){
    appData.rangValue = event.target.value;
    editTitle.textContent = appData.rangValue ;
  };

  AppData.prototype.startOne = function(event){
    let bool = true ;
    if((salaryAmount.value).trim() === ''){
      event.preventDefault();
     bool = false;
    }
   
       for (let j = 1 ; j <= incomeItem.length ; j++){
         let incomeTitles = document.querySelectorAll('.income-title')[j];
          if (incomeTitles.value === undefined){
            alert('Заполните поля!!');
            return;
        }
          if (incomeTitles.value.trim() !== '' && bool === true ){
         for (let i = 0; i <  incomeTitles.value.length; i++){
       if( incomeTitles.value.charCodeAt(i) >= 1040 && incomeTitles.value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }

       for (let j = 0 ; j < additionalIncome.length ; j++){
         let incomeAdd = document.querySelectorAll('.additional_income-item')[j];
          if (incomeAdd .value.trim() !== '' && bool === true){
         for (let i = 0; i <  incomeAdd .value.length; i++){
       if( incomeAdd .value.charCodeAt(i) >= 1040 && incomeAdd .value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }

  for (let j = 1 ; j <= expensesItems.length ; j++){
         let expensesItem = document.querySelectorAll('.expenses-title')[j];
          if (expensesItem .value.trim() !== '' && bool === true){
         for (let i = 0; i <  expensesItem .value.length; i++){
       if(expensesItem .value.charCodeAt(i) >= 1040 && expensesItem .value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }




      if (!appData.isNumber(incomeAmount.value) && incomeAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }


      
      if (!appData.isNumber(expensesAmountVals.value) && expensesAmountVals.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }
      
     

      if (!appData.isNumber(salaryAmount.value) && salaryAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }

      
      if (!appData.isNumber(targetAmount.value) && targetAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }


    if (bool === true){
       appData.start();

       let input = document.querySelectorAll('input');
       
       input.forEach(function(item,i,arr){
         let inputVal = item.getAttribute('type');
         
        if ( i <= input.length && inputVal === 'text' ){
          item.setAttribute('disabled','disabled');
        }
       });

       start.style.display = 'none';
        btnReset.style.display = 'block';

        btnReset.addEventListener('click',appData.reset);

    }else{
     alert('Введите значение на русском языке!!');
    }
    
  };


 AppData.prototype.start  =  function (){
   
    this.budget = +salaryAmount.value;

    this.getExpInc();
    
    this.getExpensesMonth();
    
    this.getAddExpInc();
    
    this.icomeSum ();
    this.getBudget();

    this.showResult();
   
  };


  

  AppData.prototype.addExpInc = function (event){
    
    
    const dimple = event.target.classList[1].split('_')[0];
    
    let clone;
    if (dimple === 'income'){
      clone = incomeItem[0].cloneNode(true);
    }
    if (dimple === 'expenses'){
      clone = expensesItems[0].cloneNode(true);
    }
    let cloneInput = clone.querySelector(`.${dimple}-title`);
    let cloneVal = clone.querySelector(`.${dimple}-amount`);
    cloneInput.value = null;
    cloneVal.value = null;
    event.target.before(clone);
   
    const check = document.querySelectorAll(`.${dimple}-items`);
    if (check.length === 3){
      event.target.style.display = 'none';
    }
  };

 
  AppData.prototype.addIncomeBlockDelete =  function(){
    incomeItem.forEach(function(item,i,arr){
         if (i > 0){
           item.remove();
          }
        
      });
  };
  AppData.prototype.reset =  function(){
   
    appData.addExpensesBlockDelete();
    appData.addIncomeBlockDelete();
    appData.showReset();


    appData.valReset();

    
  };
  AppData.prototype.valReset =  function(){

    
    
    

    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.incomeMonth = 0;
    this.percentDepisit = 0;
    this.moneyDeposit = 0 ;
    this.expensesMonth = 0;
    this.rangValue = '';
    
   /* appData = {};*/
   btnReset.style.display = 'none';
   start.style.display = 'block';
  };
  AppData.prototype.showReset =  function(){
    let showDelete = document.querySelectorAll('input');
    showDelete.forEach(function(item,i,arr){
      let showVal = item.getAttribute('disabled');
      if (item){
        item.value = null;
      }
      if (showVal === 'disabled'){
        item.removeAttribute('disabled');
      }
      
    });

  };
  AppData.prototype.addExpensesBlockDelete = function(){
   
      expensesItems.forEach(function(item,i,arr){
         if (i > 0){
           item.remove();
          }
        
      });
    
  };
 

  AppData.prototype.getAddExpInc = function(){
    const _this = this;
    const income = document.querySelectorAll('.additional_income-item');
   const expenses = document.querySelector('.additional_expenses-item').value.split(',');

    const result = (val,add) => {
      val.forEach((item) => {
        console.log(item.value);
        if(val === income){
          item = item.value.trim();
        }
        if(val === expenses){
          item = item.trim();
        }
        if(item !== ''){
        add.push(item);
       
      }
      });
    };
      result(income,_this.addIncome);
      result(expenses,_this.addExpenses);
  };
  

  
  AppData.prototype.getIncome =  function(){
    const _this = this;
    incomeItem.forEach(function(item,i,arr){
      let incomeName = item.querySelector('.income-title').value;
      let incomeValue = item.querySelector('.income-amount').value;

      if (incomeName.trim() !== '' && incomeValue.trim() !== ''){
        _this.income[incomeName] = +incomeValue;
        
      }
    });
  

  };

 

  AppData.prototype.getExpenses =  function(){
    const _this = this;
    expensesItems.forEach(function (item, i,arr){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cachExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses.trim() !== '' && cachExpenses.trim() !== ''){
        _this.expenses[itemExpenses] = +cachExpenses;
      }
    });
    
  };

  AppData.prototype.getExpInc = function (){

    const count = (item) =>{
      const startStr = item.className.split('-')[0];
      console.log(startStr);
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
       if (itemTitle.trim() !== '' && itemAmount.trim() !== ''){
        this[startStr][itemTitle] = +itemAmount;
      }

    };
  
    incomeItem.forEach(count);
    expensesItems.forEach(count);
    


  }; 

 

  AppData.prototype.showResult =  function(){
    
    const _this = this;
   
    budgetMonthValue.value = this.budgetMonth;
    budgetDayInput.value = this.budgetDay;
    expensesMonth.value = this.expensesMonth;

    additionalExpensesValue.value = this.addExpenses.join(', ');

    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();

    incomePeriodValue.value = this.calcSavedMoney();

    periodSelect.addEventListener('input', function(){
       incomePeriodValue.value = _this.calcSavedMoney();
    });

  };

    AppData.prototype.getInfoDeposit =  function(){
      if(this.deposit){
        do{
           this.percentDepisit = prompt('Какой годовой процент ?', '10');
        }while(!appData.isNumber(this.percentDepisit));
       
         do{
          this.moneyDeposit = prompt('Какая сумма заложена ?','10000');
        }while(!appData.isNumber(this.moneyDeposit));
        
      }
    };
    AppData.prototype.calcSavedMoney =  function(){
      return this.budgetMonth * periodSelect.value;
    };
     





    AppData.prototype.eventListener = function (){


      
       const _this = this;

      periodSelect.addEventListener('input', _this.changeRang);
      start.addEventListener('click',(event) => {
    let bool = true ;
    if((salaryAmount.value).trim() === ''){
      event.preventDefault();
     bool = false;
    }
   
       for (let j = 1 ; j <= incomeItem.length ; j++){
         let incomeTitles = document.querySelectorAll('.income-title')[j];
          if (incomeTitles.value === undefined){
            alert('Заполните поля!!');
            return;
        }
          if (incomeTitles.value.trim() !== '' && bool === true ){
         for (let i = 0; i <  incomeTitles.value.length; i++){
       if( incomeTitles.value.charCodeAt(i) >= 1040 && incomeTitles.value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }

       for (let j = 0 ; j < additionalIncome.length ; j++){
         let incomeAdd = document.querySelectorAll('.additional_income-item')[j];
          if (incomeAdd .value.trim() !== '' && bool === true){
         for (let i = 0; i <  incomeAdd .value.length; i++){
       if( incomeAdd .value.charCodeAt(i) >= 1040 && incomeAdd .value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }

  for (let j = 1 ; j <= expensesItems.length ; j++){
         let expensesItem = document.querySelectorAll('.expenses-title')[j];
          if (expensesItem .value.trim() !== '' && bool === true){
         for (let i = 0; i <  expensesItem .value.length; i++){
       if(expensesItem .value.charCodeAt(i) >= 1040 && expensesItem .value.charCodeAt(i) <= 1103 ){
         bool = true;
         continue;
       }else{
         event.preventDefault();
        bool= false;
        break;
       }
        
        
       
     }
     
    
     
    }
      
     
       }




      if (!appData.isNumber(incomeAmount.value) && incomeAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }


      
      if (!appData.isNumber(expensesAmountVals.value) && expensesAmountVals.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }
      
     

      if (!appData.isNumber(salaryAmount.value) && salaryAmount.value.trim() !== '' ){

        alert(`Введите число в полe суммы`);
        event.preventDefault();
        return;

      }

      
      if (!appData.isNumber(targetAmount.value) && targetAmount.value.trim() !== '' ){

        alert(`Введите число в полe суммы`);
        event.preventDefault();
        return;

      }


    if (bool === true){
       _this.start();

       let input = document.querySelectorAll('input');
       
       input.forEach(function(item,i,arr){
         let inputVal = item.getAttribute('type');
         
        if ( i <= input.length && inputVal === 'text' ){
          item.setAttribute('disabled','disabled');
        }
       });

       start.style.display = 'none';
        btnReset.style.display = 'block';

        btnReset.addEventListener('click',_this.reset);

    }else{
     alert('Введите значение на русском языке!!');
    }
    
  });


   plusButton2.addEventListener('click',_this.addExpInc);
  plusButton1.addEventListener('click',_this.addExpInc);
  
    };






  

  const appData = new AppData();
  console.log('appData: ', appData);

  appData.eventListener();


 
  appData.changeRang = function(event){
    appData.rangValue = event.target.value;
    editTitle.textContent = appData.rangValue ;
  };

 
  
 
  
 


 

 
 
  
  let logAddExpenses = function (){
    let str,upper,result,val;
    val = '';

    appData.addExpenses.forEach(function(item, i , array){
      str = item.toString() ;
      upper = str[0];
      result = upper.toUpperCase();
      str = str.replace(upper , result );
      val += str;
      if (i < array.length -1){
        val += ', ';
      }
      
      
    });
    console.log('Возможные расходы: ' + val );
  };

  logAddExpenses();
 

  

  
  console.log( 'Период равен ' + appData.period + ' месяцев' );
  console.log( 'Цель заработать ' + appData.mission + ' рублей' );

 
 


   

 
 
  appData.icomeSum = function(){
    for(let key in appData.income){
      appData.incomeMonth += appData.income[key];
    }
  };


  appData.getExpensesMonth = function(){
    for (let key in appData.expenses){
     this.expensesMonth += this.expenses[key] ;
    }
    
  };

  
  

    

  appData.getBudget = function( ){

    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);

   };

   

 
 


  
  appData.getTargetMonth = function(){

   return  Math.ceil(targetAmount.value / appData.budgetMonth);
   
  };

  

  appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
  console.log('Бюджет на день : ' , appData.budgetDay ,' рублей');

  appData.getStatusIncome = function(){
  
  if (appData.budgetDay >= 1200){
    return ('У вас высокий уровень дохода');
  }else if ( appData.budgetDay >= 600 && appData.budgetDay < 1200 ){
    return ('У вас средний уровень дохода');
  }else if (appData.budgetDay < 600 && appData.budgetDay >= 0){
    return ('К сожалению  у вас низкий уровень дохода');
  }else {
    return ('Что то пошло не так');
  }

  

  };
  console.log(appData.getStatusIncome());


  
  




  
  

  
















   
