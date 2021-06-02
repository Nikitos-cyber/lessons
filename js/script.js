  'use strict';

  let isNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
  };


  let money ;
  let income = 'Freelance';
  let addExpenses = 'Интернет, комуналка, такси, кино';
  let deposit = true;
  let mission = 250000;
  let period = 7;

  let start = function (){
    
    do{

      money = prompt('Введите ваш доход за месяц: ');

    }while(!isNumber(money));
    
    if(isNumber(money)){
      money = Number(money);
    }


  };

  start();

  let showTypeOf = function(data){
    console.log(data , typeof (data));
  };
  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);

  let expenses = [];

  console.log( addExpenses.length );
  console.log( 'Период равен ' + period + ' месяцев' );
  console.log( 'Цель заработать ' + mission + ' рублей' );

  addExpenses = addExpenses.toLowerCase();
  console.log(addExpenses.split( ', ' ));


  let budgetDay = 63000 / 30;
  console.log( budgetDay );

 /* let incom ;
  do{
     incom = +prompt('Ваш месячный доход?'); 
    if (isNaN(incom)){
      alert('Введите в поле числовое значение!');
    }
  } while (isNaN(incom) === true );
 */
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую ');
  /*
  deposit = confirm('Есть ли у вас депозит в банке?');
  
  let amount1 ;
  
  
  */
 


  let getExpensesMonth = function(){
    let sum = 0;
    for( let i = 0; i < 2; i++){

         expenses[i] = prompt('Введите обязательную статью расходов?', 'Жкх');
         let val;
      do{
        val =  prompt('Во сколько это обойдется?');
      }while(!isNumber(val));
      
      sum += +val;
    }
    console.log(expenses);
    return sum;
  };

  let expensesMonth = getExpensesMonth();

    console.log('Расходы за месяц: ', expensesMonth , ' рублей');

  let getAccumulatedMonth = function( income, expensesMonth){

    return income - expensesMonth;

   };

  let accumulatedMonth  = getAccumulatedMonth(money, expensesMonth);

  console.log('Доход за месяц c учетом расходов :', accumulatedMonth ,' рублей');


  
  let getTargetMonth = function(accumulatedMonth,mission){

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

  console.log( getTargetMonth(accumulatedMonth,mission));

  budgetDay = Math.ceil(accumulatedMonth / 30);
  console.log('Бюджет на день : ' , budgetDay ,' рублей');

  let getStatusIncome = function(){
  
  if (budgetDay >= 1200){
    return ('У вас высокий уровень дохода');
  }else if ( budgetDay >= 600 && budgetDay < 1200 ){
    return ('У вас средний уровень дохода');
  }else if (budgetDay < 600 && budgetDay >= 0){
    return ('К сожалению  у вас низкий уровень дохода');
  }else {
    return ('Что то пошло не так');
  }

  };
  console.log(getStatusIncome());

  let getAddExpenses = function (addExpenses){

    return addExpenses.split(', ');
  };

  
  console.log('Возможные расходы за месяц ', getAddExpenses(addExpenses));
  
  
