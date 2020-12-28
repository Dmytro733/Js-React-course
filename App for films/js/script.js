/* Задания на урок:

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{

    const personalMovieDB = {
        count: 0,
        movies: [
            "Непокоренний",
            "Логан"
        ],
        actors: {},
        genres: [],
        privat: false
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          backImg = document.querySelector('.promo__bg'),
          ganre = backImg.querySelector('.promo__genre').textContent = 'Драма',
          listFilms = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          valueInp = form.querySelector('.adding__input'),
          checbox = form.querySelector('[type="checkbox"]');
          

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = valueInp.value;
        const favorit = checbox.checked;

        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            personalMovieDB.movies.push(newFilm);
            sortArr(personalMovieDB.movies);
    
            createList(personalMovieDB.movies, listFilms);

            if(favorit){
                console.log('Добавляем любимый фильм');
            }
        }
        
        event.target.reset();         
    });

    const deletAdv = (adv) => {
        adv.forEach(item =>{
            item.remove();
        });
    };

    const changes = () => {
        backImg.style.backgroundImage = 'url("img/bg.jpg")';
        listFilms.innerHTML = "";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    const createList = function(films, parrent){
        parrent.innerHTML = '';
        sortArr(films);

        films.forEach((item, i)=>{  
            parrent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>`;
        });

        listFilms.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () =>{
                item.parentNode.remove();
                personalMovieDB.movies.splice(i, 1);
                createList(films, parrent);
            });
        });
    };

    
    deletAdv(adv);
    changes();
    createList(personalMovieDB.movies, listFilms);


    
});




