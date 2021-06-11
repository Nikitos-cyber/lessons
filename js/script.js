  'use strict';

  let str = 'ф';

  if(str.charCodeAt(0) >= 1040 && str.charCodeAt(0) <= 1103 ){
    console.log('Выведена русская буква: ', str);
  }else{
    console.log('error');
  }

  let start = document.getElementById('start');

  let btnReset = document.querySelector('#cancel');


   let plusButton1 = document.getElementsByTagName('button')[0];
   let plusButton2 = document.getElementsByTagName('button')[1];

   let checkbox = document.querySelector('#deposit-check');
   let additionalIncome = document.querySelectorAll('.additional_income');

   
    let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

    let budgetDayInput = document.getElementsByClassName('budget_day-value')[0];
    let expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
    let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
    let additionalExpensesValue = document.getElementsByClassName(' additional_expenses-value')[0];
    let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
    let targetMonthValue = document.getElementsByClassName('target_month-value')[0];

    let budgetMonthValue = document.querySelector('.budget_month-value');
    let targetAmount = document.querySelector('.target-amount');

    let additionalExpensesIitem = document.querySelector('.additional_expenses-item');
    let expensesItems = document.querySelectorAll('.expenses-items');

    let expensesTitle = document.querySelector('.expenses-title');
    let expensesAmountSum = document.querySelector('.expenses-amount');

    let incomeTitle = document.querySelector('.income-title')[1];
    let incomeAmount = document.querySelector('.income-amount');

    let salaryAmount = document.querySelector('.salary-amount');

    let periodSelect = document.querySelector('.period-select');

    let incomeItem = document.querySelectorAll('.income-items');

    let addIncomeItem = document.querySelector('.additional_income-item');
    
    let editTitle = document.querySelectorAll('.title , .period-amount')[8];

    let expensesAmountVals = document.querySelector('.expenses-amount');


  

  

  

  

  let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    incomeMonth: 0,
    percentDepisit: 0,
    moneyDeposit: 0 ,
    expensesMonth: 0,
    start : function (){
    console.log(this);
    

    appData.budget = +salaryAmount.value;
    

    appData.getExpenses();

   
    
    appData.getExpensesMonth();
    
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getIncome();
    appData.icomeSum ();
    appData.getBudget();

    appData.showResult();
   
  },
  addIncomeBlock:function(){
    let cloneIcomeItems = incomeItem[0].cloneNode(true);

    let cloneInputNameItems = cloneIcomeItems.querySelector('.income-title');
    let cloneInputValItems = cloneIcomeItems.querySelector('.income-amount');
    cloneInputNameItems.value = null;
    cloneInputValItems.value = null;
    plusButton1.before(cloneIcomeItems);

    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3){
      plusButton1.style.display = 'none';
    }

  },
  addIncomeBlockDelete: function(){
    incomeItem.forEach(function(item,i,arr){
         if (i > 0){
           item.remove();
          }
        
      });
  },
  reset: function(){
    appData.addExpensesBlockDelete();
    appData.addIncomeBlockDelete();
    appData.showReset();


    appData.valReset();

    
  },
  valReset: function(){
    

    appData.income = {};
    appData.addIncome = [];
    appData.expenses = {};
    appData.addExpenses = [];
    appData.deposit = false;
    appData.budget = 0;
    appData.budgetDay = 0;
    appData.budgetMonth = 0;
    appData.incomeMonth = 0;
    appData.percentDepisit = 0;
    appData.moneyDeposit = 0 ;
    appData.expensesMonth = 0;
    appData.rangValue = '';
    
   /* appData = {};*/
   btnReset.style.display = 'none';
   start.style.display = 'block';
  },
  showReset: function(){
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

  },
  addExpensesBlockDelete:function(){
   
      expensesItems.forEach(function(item,i,arr){
         if (i > 0){
           item.remove();
          }
        
      });
    
  },
  addExpensesBlock: function(){
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    let cloneInputNameExpenses = cloneExpensesItems.querySelector('.expenses-title');
    let cloneInputValExpenses = cloneExpensesItems.querySelector('.expenses-amount');
    cloneInputNameExpenses.value = null;
    cloneInputValExpenses.value = null;
    console.log(cloneExpensesItems);

    plusButton2.before(cloneExpensesItems);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3){
      plusButton2.style.display = 'none';
    }

  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesIitem.value.split(',');
    addExpenses.forEach(function(item,i,arr){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
       
      }
    });
    
  },
  
  getIncome: function(){

    incomeItem.forEach(function(item,i,arr){
      let incomeName = item.querySelector('.income-title').value;
      let incomeValue = item.querySelector('.income-amount').value;

      if (incomeName.trim() !== '' && incomeValue.trim() !== ''){
        appData.income[incomeName] = +incomeValue;
        
      }
    });
  

  },

 

  getExpenses: function(){
    expensesItems.forEach(function (item, i,arr){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cachExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses.trim() !== '' && cachExpenses.trim() !== ''){
        appData.expenses[itemExpenses] = +cachExpenses;
      }
    });
    
  },

  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item,i,arr){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        appData.addIncome.push(itemValue);
      }

    });
  },

  showResult: function(){
    
   
    budgetMonthValue.value = this.budgetMonth;
    budgetDayInput.value = this.budgetDay;
    expensesMonth.value = this.expensesMonth;

    additionalExpensesValue.value = this.addExpenses.join(', ');

    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();

    incomePeriodValue.value = this.calcSavedMoney();

    periodSelect.addEventListener('input', function(){
       incomePeriodValue.value = appData.calcSavedMoney();
    });

  },

    getInfoDeposit: function(){
      if(appData.deposit){
        do{
           appData.percentDepisit = prompt('Какой годовой процент ?', '10');
        }while(!isNumber(appData.percentDepisit));
       
         do{
          appData.moneyDeposit = prompt('Какая сумма заложена ?','10000');
        }while(!isNumber(appData.moneyDeposit));
        
      }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * periodSelect.value;
    }
  };

  appData.changeRang = function(event){
    appData.rangValue = event.target.value;
    editTitle.textContent = appData.rangValue ;
  };

  periodSelect.addEventListener('input', appData.changeRang);
  
 
  start.addEventListener('click',function(event){
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




      if (!isNumber(incomeAmount.value) && incomeAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }


      
      if (!isNumber(expensesAmountVals.value) && expensesAmountVals.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }
      
     

      if (!isNumber(salaryAmount.value) && salaryAmount.value.trim() !== '' ){

        alert('Введите число в полe суммы');
        event.preventDefault();
        return;

      }

      
      if (!isNumber(targetAmount.value) && targetAmount.value.trim() !== '' ){

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
    
  });
  plusButton2.addEventListener('click',appData.addExpensesBlock);
  plusButton1.addEventListener('click',appData.addIncomeBlock);


  function isNumber(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

 
 
  
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

  
 appData.start();
  
  




  
  

  
















   
