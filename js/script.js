let money = 100000,
      income = 'фриланс',
      addExpenses = "'Интернет', 'такси', 'коммуналка'",
      deposit = true,
      mission = 10000000,
      period = 3;
      budgetDay = money / 30; 

      console.log(typeof money);
      console.log(typeof income);
      console.log(typeof deposit);
      console.log(addExpenses.length);
      console.log(`'Период равен ${period} месяцев' и 'Цeль заработать ${mission} рублей'`);
      console.log(addExpenses.toLowerCase().split(' '));
      console.log(budgetDay);

    //  2-ое задание

    money = prompt('Ваш месячный доход?');
    addExpenses = prompt('Квартплата, проездной, кредит');
    deposit = confirm('Есть ли у вас депозит в банке?');

    const expenses1 = prompt('Введите статью расходов?');
          expenses2 = prompt('Введите статью расходов?');

          amount1 = prompt('Во сколько это обоейдется?');
          amount2 = prompt('Во сколько это обоейдется?');

    const budgetMonth = money - 50000.9
          console.log(budgetMonth);

    const target = mission / budgetMonth;
          console.log(Math.ceil(target));

          budgetDay = budgetMonth / 30
          console.log(Math.floor(budgetDay)); 

   if(budgetDay > 1200) { 
     console.log('У вас высокий уровень дохода');
   } else if (budgetDay > 600 && budgetDay < 1200 ) {
     console.log('У вас средний уровень дохода');
   } else if (budgetDay < 600 && budgetDay > 0) {
     console.log('К сожалению у вас уровень дохода ниже среднего');
   } else {
     console.log('Что то пошло не так');
   }

        








     
