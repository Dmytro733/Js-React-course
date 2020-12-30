/* 1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub */

'use strict';
    
const money = prompt("Ваш бюджет на месяц?"),
      time = prompt("Введите дату в формате YYYY-MM-DD");
       

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    
    if((typeof(a)) === 'string' && a != null && a != '' && b != null && b != ''){
        appData.expenses[a] = b;
    }else{
        i--;
    }
}

/*****Цикл do while*****/

// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
    
//     if((typeof(a)) === 'string' && a != null && a != '' && b != null && b != ''){
//         appData.expenses[a] = b;
//         i++;
//     }else{
//         i--;
//     }

// }while(i < 2);

/*****while*****/

// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = +prompt("Во сколько обойдется?");

//     if((typeof(a)) === 'string' && a != null && a != '' && b != null && b != ''){
//         appData.expenses[a] = b;
//         i++;
//     }else{
//         i--;
//     }
// }

appData.monayPerDay = appData.budget / 30;

alert(`Ежедневний бюджет ${appData.monayPerDay}`);

console.log(appData);

   



