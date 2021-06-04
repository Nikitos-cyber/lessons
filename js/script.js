  'use strict';

  let money ;

  

  let start = function (){
    
    do{

      money = prompt('Введите ваш доход за месяц: ');

    }while(!isNumber(money));
    
    if(isNumber(money)){
      money = Number(money);
    }


  };

  start();

  let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 9,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
     expensesMonth: 0,
    asking: function(){
     let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую ');
      appData.addExpenses = addExpenses.toLowerCase().split( ', ' );
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let sum = 0;
    for( let i = 0; i < 2; i++){
        let result;
         result = prompt('Введите обязательную статью расходов?', 'Жкх');
         let val;
      do{
        val =  prompt('Во сколько это обойдется?');
      }while(!isNumber(val));
      let str = "'" + String(result) + "'";
      val = +val;
      appData.expenses[str]=val;
    }
    
    
    
    }
  };


  function isNumber(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  appData.asking();
 
  
  

  
 

  

  
  console.log( 'Период равен ' + appData.period + ' месяцев' );
  console.log( 'Цель заработать ' + appData.mission + ' рублей' );


 


   

 /* let incom ;
  do{
     incom = +prompt('Ваш месячный доход?'); 
    if (isNaN(incom)){
      alert('Введите в поле числовое значение!');
    }
  } while (isNaN(incom) === true );
 */
  
  /*
  
  
  let amount1 ;
  
  
  */
 



  let getExpensesMonth = function(){
    for (let key in appData.expenses){
     appData.expensesMonth += appData.expenses[key] ;
    }
  };

  getExpensesMonth();
  

    console.log('Расходы за месяц: ', appData.expensesMonth , ' рублей');

  appData.getBudget = function( income, expensesMonth){

    appData.budgetMonth = income - expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);

   };

   appData.getBudget(money, appData.expensesMonth);

  console.log('Доход за месяц c учетом расходов :', appData.budgetMonth ,' рублей');
 


  
  appData.getTargetMonth = function(accumulatedMonth,mission){

    let missionPeriod = Math.ceil(mission / accumulatedMonth);
    if( missionPeriod < 0){
      return ('Цель небудет достигнута ');
    }else{
      let strPeriod = '';
      switch(missionPeriod){
        case 1: strPeriod = 'a';
        break;

         case 2: strPeriod = 'a';
        break;

         case 3: strPeriod = 'a';
        break;

         case 4: strPeriod = 'a';
        break;
      
          default: strPeriod = 'ев';
      }
      return ('Цель будет достигнута за: ' +  missionPeriod + ' месяц' + strPeriod  );
    }
  };

  console.log( appData.getTargetMonth(appData.budgetMonth,appData.mission));

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

  

  
  console.log('Возможные расходы за месяц ', appData.addExpenses);



 let forInAppData = function (){
   console.log('Наша программа включает в себя данные:');
   for (let key in appData ){
    console.log(key , appData[key]);
  }
 };
  
 forInAppData();
  
