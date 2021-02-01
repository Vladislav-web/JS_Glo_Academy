const money = +prompt('Ваш месячный доход?'),
      income = 'фриланс',
      mission = 10000000,
      period = 3,
      budgetMonth = money - 50000.9,
      target = mission / budgetMonth,
      budgetDay = budgetMonth / 30,
      deposit = confirm('Есть ли у вас депозит в банке?'),
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',),
      expenses1 = prompt('Введите статью расходов?'),
      amount1 = +prompt('Во сколько это обоейдется?'),
      expenses2 = prompt('Введите статью расходов?'),
      amount2 = +prompt('Во сколько это обоейдется?');
      
      if (budgetDay > 1200) { 
        console.log('У вас высокий уровень дохода');
      } else if (budgetDay > 600 && budgetDay < 1200 ) {
        console.log('У вас средний уровень дохода');
      } else if (budgetDay < 600 && budgetDay > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
      } else {
        console.log('Что то пошло не так');
      }
      
      console.log(typeof money);
      console.log(typeof income);
      console.log(typeof deposit),
      console.log(addExpenses.length);
      console.log(`'Период равен ${period} месяцев'`);
      console.log(`'Цeль заработать ${mission} рублей'`);
      console.log(addExpenses.toLowerCase().split(' '));
      console.log(`Бюджет на месяц: ${budgetMonth}`);
      console.log(`Цель будет   достигнута через: ${Math.ceil(target)} месяцев`);
      console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);         






     
