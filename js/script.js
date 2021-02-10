const money = +prompt('Ваш месячный доход?'),
      income = 'фриланс',
      period = 3,
      mission = 10000000;
      deposit = confirm('Есть ли у вас депозит в банке?'),
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',),
      expenses1 = prompt('Введите статью расходов?', 'Аренда квартиры'),
      amount1 = +prompt('Во сколько это обоейдется?'),
      expenses2 = prompt('Введите статью расходов?', 'Электричество'),
      amount2 = +prompt('Во сколько это обоейдется?');
  let accumulatedMonth;
      
      // расход за месяц
      let getExpensesMonth = function() {
        return amount1 + amount2;
      };
      
      // накопления за месяц
      let getAcсumulatedMonth = function() {
        return money - getExpensesMonth();
      };
      
      // цель за какой период
      const  getTargetMonth = function() {
        return Math.ceil(mission / accumulatedMonth);
      };

      let showTypeOf = function (item) {
        console.log(item, typeof (item));
      };
      
      let getStatusIncome = function () {
        if (budgetDay > 1200) { 
            return console.log('У вас высокий уровень дохода');
        } else if (budgetDay > 600 && budgetDay < 1200 ) {
            return console.log('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay > 0) {
            return console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return console.log('Что то пошло не так');
        }
      };
      
      showTypeOf(money);
      showTypeOf(income);
      showTypeOf(deposit);
      accumulatedMonth = getAcсumulatedMonth();
const budgetDay = accumulatedMonth / 30;
      console.log(addExpenses);
      console.log(`Расход за месяц ${getExpensesMonth()}`);
      console.log(`Накопления за месяц ${getAcсumulatedMonth()}`);
      console.log(`Дневной бюджет ${budgetDay}`);
      console.log(`Цель будет достигнута через ${getTargetMonth()} месяцев`);
      console.log(getStatusIncome());






     
