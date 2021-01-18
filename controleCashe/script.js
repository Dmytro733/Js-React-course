/* 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)


3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

Записать ответы в объект optionalExpenses в формате Номер - Ответ.

    optionalExpenses: {
    1 : “ответ на вопрос”
    }

Вызывать функции не обязательно.

4) Добавить папку со третим уроком в свой репозиторий на GitHub */

"use strict";

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == null || money == ''){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = +prompt("Во сколько обойдется?");
        
        if((typeof(a)) === 'string' && a != null && a != '' && b != null && b != ''){
            appData.expenses[a] = b;
        }else{
            i--;
        }
    } 
}

chooseExpenses();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let a = prompt("Статья необязательных расходов?");
        
        if((typeof(a)) === 'string' && a != null && a != '' ){
            appData.optionalExpenses[i + 1] = a;
        }else{
            i--;
        }
    }    
}

chooseOptExpenses();

function detectDayBudget(){
    appData.monayPerDay = (appData.budget / 30).toFixed(2);
    alert(`Ежедневний бюджет ${appData.monayPerDay}`);
    console.log(appData);
}

detectDayBudget();

function detectLevel(){
    if(appData.monayPerDay < 100){
        console.log('Минимальний уровень достатка');
    }else if(appData.monayPerDay > 100 && appData.monayPerDay < 2000){
        console.log('Средний уровень достатка');
    }else if(appData.monayPerDay > 2000){
        console.log('Високий уровень достатка');
    }else{
        console.log('Произошла ошибка');
    }
}

detectLevel(); 

function checkSavings(){
            
    if(appData.savings == true){
        let save = +prompt('Какова сума накоплений'),
            percent = +prompt('Под какой процент');

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

checkSavings();



