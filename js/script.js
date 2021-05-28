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
