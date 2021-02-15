'use strict'
let   money,
      income = 'фриланс',
      addExpenses,
      deposit,
      mission = 10000000,
      accumulatedMonth,
      expenses1, expenses2;

      let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      }

      // проверка на число
      let start = function () {
          money = prompt('Ваш месячный доход?'); 

          if (!isNumber(money)) {
           do {
             money = prompt("Ваш месячный доход?");
            }  while (!isNumber(money));
        }; 
      }
      
      // расход за месяц
      function getExpensesMonth() {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
          if(i === 0) {
            expenses1 =  prompt('Введите обязательную статью расходов', 'Аренда квартиры');
          } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов', 'Электричество');
          }
          sum += +prompt('Во сколько это обойдется?')
        }
        return sum;
      };

      // накопления за месяц
      function getAcсumulatedMonth () {
        return money - expensesAmount;
      };
      
      // цель за какой период
       function getTargetMonth(money, accumulatedMonth) {
        return  money / accumulatedMonth;
      };

      let showTypeOf = function (item) {
        console.log(item, typeof (item));
      };
      
      let getStatusIncome = function () {
        if (budgetDay > 1200) { 
            return ('У вас высокий уровень дохода');
        } else if (budgetDay > 600 && budgetDay < 1200 ) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
      };

      start();
  let expensesAmount = getExpensesMonth(),
      budgetDay = accumulatedMonth / 30;
      deposit = confirm('Есть ли у вас депозит в банке?');
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLocaleLowerCase().split(',');
      accumulatedMonth = getAcсumulatedMonth();

      if (getTargetMonth(money, accumulatedMonth) > 0) {
        console.log(`Цель будет достигнута за ${Math.ceil(getTargetMonth(money, accumulatedMonth))} месяцев(а)`);
      } else {
        console.log('Цель не будет достигнута');
      }

      showTypeOf(money);
      showTypeOf(income);
      showTypeOf(deposit);
      console.log(addExpenses);
      console.log('Расход за месяц', expensesAmount);
      console.log('Накопления за месяц', getAcсumulatedMonth());
      console.log('Дневной бюджет', budgetDay);
      console.log('Статьи расходов:', expenses1, expenses2);
      console.log(getStatusIncome());

 
 




     
