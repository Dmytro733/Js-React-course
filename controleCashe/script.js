/* 1) Написать проверку, что пользователь может:

·        Ввести в дополнительных доходах (chooseIncome) только строку

·        Не может оставить строку пустой

·        Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub */

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
    savings: true,
    chooseExpenses: function (){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = +prompt("Во сколько обойдется?");
            
            if((typeof(a)) === 'string' && a != null && a != '' && b != null && b != ''){
                appData.expenses[a] = b;
            }else{
                i--;
            }
        } 
    },
    
    detectDayBudget: function(){
        appData.monayPerDay = (appData.budget / 30).toFixed(2);
        alert(`Ежедневний бюджет ${appData.monayPerDay}`);
    },

    detectLevel: function(){
        if(appData.monayPerDay < 100){
            console.log('Минимальний уровень достатка');
        }else if(appData.monayPerDay > 100 && appData.monayPerDay < 2000){
            console.log('Средний уровень достатка');
        }else if(appData.monayPerDay > 2000){
            console.log('Високий уровень достатка');
        }else{
            console.log('Произошла ошибка');
        }
    },

    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt('Какова сума накоплений'),
                percent = +prompt('Под какой процент');
    
            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },

    chooseOptExpenses: function(){
        for(let i = 0; i < 3; i++){
            let a = prompt("Статья необязательных расходов?");
            
            if((typeof(a)) === 'string' && a != null && a != '' ){
                appData.optionalExpenses[i + 1] = a;
            }else{
                i--;
            }
        } 
    },

    chooseIncome: function(){
        for(let j = 0; j < 1; j++){
            let incomee = prompt('Укажите дополнительние доходи через запятую');

            if(incomee != null && incomee != ''){
                incomee.split(',').forEach((i, item) => {
                    appData.income.push(i);
                    alert(`Способи дополнительного зароботка: ${item + 1}: ${i}`);
                });
            }else{
                j--;
            }
        }
    }

};


for(let key in appData){
    console.log(`Наша программа включает в себя данные: ${key}`);
};




