  'use strict';

  

  let start = document.getElementById('start');

   let plusButton1 = document.getElementsByTagName('button')[0];
   let plusButton2 = document.getElementsByTagName('button')[1];

   let checkbox = document.querySelector('#deposit-check');

   
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

    let incomeTitle = document.querySelector('.income-title');
    let incomeAmount = document.querySelector('.income-amount');

    let salaryAmount = document.querySelector('.salary-amount');

    let periodSelect = document.querySelector('.period-select');

    let incomeItem = document.querySelectorAll('.income-items');

    
    let editTitle = document.querySelectorAll('.title , .period-amount')[8];


    

  

  

  

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
    plusButton1.before(cloneIcomeItems);

    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3){
      plusButton1.style.display = 'none';
    }

  },
  addExpensesBlock: function(){
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
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
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayInput.value = appData.budgetDay;
    expensesMonth.value = appData.expensesMonth;

    additionalExpensesValue.value = appData.addExpenses.join(', ');

    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();

    incomePeriodValue.value = appData.calcSavedMoney();

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
    if((salaryAmount.value).trim() === ''){
      event.preventDefault();
      console.log('error');
    }
      start.addEventListener('click',appData.start);
   
    
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
     appData.expensesMonth += appData.expenses[key] ;
    }
  };

  
  

    

  appData.getBudget = function( ){

    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);

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

  

  
  




  
  

  
















   
