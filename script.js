/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(this.count == '' || this.count == null || isNaN(this.count)){
            start();
        }
    },

    rememberMyFilms: function(){
        for(let i = 0; i <= 1; i++){
            let lastFilms = prompt('Один из последних просмотренных фильмов?', ''),
                reatingFilms = prompt('На сколько оцените его?', '');
            
            if(lastFilms != null && reatingFilms != null && lastFilms != '' && reatingFilms != '' && lastFilms.length < 50){
                personalMovieDB.movies[lastFilms] = reatingFilms;
            }else{
                i--;
            }     
        }
    },

    detectPersonalLavle: function(){
        if(this.count < 10){
            console.log('Посмотрено мало фильмов!');
        }else if(this.count >= 10 && this.coutn < 30){
            console.log('Ви классний зритель!');
        }else if(this.count >= 30){
            console.log('Ви киноман!');
        }else{
            console.log('Произошла ошибка!');
        }
    },

    showMyDB: function(hiden) {
        if(!hiden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true;
        }
    },

    writeYourGenres: function() {
        for(let i = 1; i < 2; i++){
            let genre = prompt('Введите важи жанри через запятую').toLowerCase();

            if(genre == null && genre == ''){
                console.log('Ви ввели некоректні дані или вообще их не ввели');
                i--;
            }else{
                this.genres = genre.split(', ');
                this.genres.sort();
            }
        }

        this.genres.forEach((i, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${i}`);
        });
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLavle();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();

