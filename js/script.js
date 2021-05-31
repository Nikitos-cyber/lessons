  'use strict';
  let money = 45000;
  let income = 'Freelance';
  let addExpenses = 'Интернет, комуналка, такси, кино';
  let deposit = true;
  let mission = 250000;
  let period = 7;

  console.log( typeof money );
  console.log( typeof income );
  console.log( typeof deposit );
  console.log( addExpenses.length );
  console.log( 'Период равен ' + period + ' месяцев' );
  console.log( 'Цель заработать ' + mission + ' рублей' );

  addExpenses = addExpenses.toLowerCase();
  console.log(addExpenses.split( ', ' ));


  let budgetDay = 63000 / 30;
  console.log( budgetDay );

  let incom = +prompt('Ваш месячный доход?', '18000'); 
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую ');
  deposit = confirm('Есть ли у вас депозит в банке?');
  let expenses1 = prompt('Введите обязательную статью расходов?');
  let amount1 = +prompt('Во сколько это обойдется?');
  let expenses2 = prompt('Введите обязательную статью расходов?');
  let amount2 = +prompt('Во сколько это обойдется?');

  let budgetMonth = incom - (amount1 + amount2);
  console.log('Бюджет на месяц: ', budgetMonth);

  period = Math.ceil((mission/budgetMonth));
  let strMonth ='';
  switch (period){
    case 1:
      strMonth = 'а';
      break;

    case 2:
      strMonth = 'а';
      break;

    case 3:
      strMonth = 'а';
      break;

    case 4:
      strMonth = 'а';
      break;
    
    default : strMonth = 'ев';
  }
  console.log('Цель будет достигнута за ' + period + ' месяц'+ strMonth);

  budgetDay = Math.floor((budgetMonth/30));
  console.log('Бюджет на день: ' + budgetDay);
   
  if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
  }else if ( budgetDay >= 600 && budgetDay < 1200 ){
    console.log('У вас средний уровень дохода');
  }else if (budgetDay < 600 && budgetDay >= 0){
    console.log('К сожалению  у вас низкий уровень дохода');
  }else {
    console.log('Что то пошло не так');
  }