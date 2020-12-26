/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
      backImg = document.querySelector('.promo__bg'),
      ganre = backImg.querySelector('.promo__genre').textContent = 'Драма',
      listFilms = document.querySelector('.promo__interactive-list'); 


adv.forEach(item =>{
    item.remove();
});

backImg.style.backgroundImage = 'url("img/bg.jpg")';


const personalMovieDB = {
    count: 0,
    movies: [],
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
        for(let i = 0; i <= 4; i++){
            listFilms.innerHTML = "";

            let lastFilms = prompt('Один из последних просмотренных фильмов?', '');
            
            if(lastFilms != null && lastFilms != '' && lastFilms.length < 50){
                personalMovieDB.movies.push(lastFilms);
                personalMovieDB.movies.forEach((item, i)=>{
                    personalMovieDB.movies.sort();
                    listFilms.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}</li>`;
                });
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