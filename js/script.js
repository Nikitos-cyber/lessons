  'use strict';
  let money = 45000;
  let income = 'Freelance';
  let addExpenses = 'Интернет, комуналка, такси, кино';
  let deposit = true;
  let mission = 250000;
  let period = 7;

  let showTypeOf = function(data){
    console.log(data , typeof (data));
  };
  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);

  console.log( addExpenses.length );
  console.log( 'Период равен ' + period + ' месяцев' );
  console.log( 'Цель заработать ' + mission + ' рублей' );

  addExpenses = addExpenses.toLowerCase();
  console.log(addExpenses.split( ', ' ));


  let budgetDay = 63000 / 30;
  console.log( budgetDay );

  let incom ;
  do{
     incom = +prompt('Ваш месячный доход?'); 
    if (isNaN(incom)){
      alert('Введите в поле числовое значение!');
    }
  } while (isNaN(incom) == true );
 
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую ');
  deposit = confirm('Есть ли у вас депозит в банке?');
  let expenses1 = prompt('Введите обязательную статью расходов?');
  let amount1 ;
  do{
    amount1 = +prompt('Во сколько это обойдется?'); 
    if (isNaN(amount1)){
      alert('Введите в поле числовое значение!');
    }
  } while (isNaN(amount1) == true );
 
  let expenses2 = prompt('Введите обязательную статью расходов?');
  let amount2 ;
  do{
    amount2 = +prompt('Во сколько это обойдется?'); 
    if (isNaN(amount2)){
      alert('Введите в поле числовое значение!');
    }
  } while (isNaN(amount2) == true );
 


  let getExpensesMonth = function(amount1,amount2){
    
    return amount1 + amount2;
  };

    console.log('Расходы за месяц: ', getExpensesMonth(amount1,amount2) , ' рублей');

  let getAccumulatedMonth = function( income, amount1, amount2){

    return income - (amount1 + amount2);

   };

  let accumulatedMonth  = getAccumulatedMonth(incom, amount1, amount2);

  console.log('Доход за месяц c учетом расходов :', accumulatedMonth ,' рублей');


  
  let getTargetMonth = function(accumulatedMonth,mission){

    return Math.ceil(mission / accumulatedMonth);

  };

  console.log('Период достижения цели:', getTargetMonth(accumulatedMonth,mission) , ' месяца(-ев)');

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
  
  
