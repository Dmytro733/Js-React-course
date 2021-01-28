/*
1) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

·        Восстановить порядок в меню, добавить пятый пункт

·        Заменить картинку заднего фона на другую из папки img

·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

·        Удалить рекламу со страницы

·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

2) Проверить, чтобы все работало и не было ошибок в консоли
*/

let column = document.querySelectorAll('.column')[1],
    prompts = document.getElementById('prompt');

class CreateElement{
    constructor(title, parentSelector, ...classes){
        this.title = title;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes; 
    }

    render(){
        const elem = document.createElement('li');
        elem.innerHTML = this.title;
        if(this.classes.length === 0){
            elem.classList.add('menu-item');
        }else{
            this.classes.forEach(className => elem.classList.add(className));
        }
        this.parent.append(elem);
    }
}

new CreateElement('Первый пункт', '.menu', 'menu-item').render();
new CreateElement('Второй пункт', '.menu', 'menu-item').render();
new CreateElement('Третий пункт', '.menu', 'menu-item').render();
new CreateElement('Четвертый пункт', '.menu', 'menu-item').render();
new CreateElement('Пятий пункт', '.menu', 'menu-item').render();

function changeTitle (selector){
    const tit = document.querySelector(selector);
    tit.innerHTML = 'Мы продаем только подлинную технику Apple';
}

changeTitle('.title');

function changeImg (selector, url){
    const elem = document.querySelector(selector);
    elem.style.background = url;
}

changeImg('body', "url('./img/apple_true.jpg')");

function deleteAdv (selector, className){
    if(column.childElementCount > 1){
        let elem = column.querySelectorAll(selector);
        elem.forEach(function(item){
            if(item.classList.contains(className)){
                column.removeChild(item);        
            }
        });
    }
}

deleteAdv('div', 'adv');


prompts.textContent = prompt("Ваше відношення до техніки Apple ?");