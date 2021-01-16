window.addEventListener('DOMContentLoaded', () => {

    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          parentTabs = document.querySelector('.tabheader__items');

    function hideTabsContent (){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabsContent();
    showTabContent();

    parentTabs.addEventListener('click', (event) =>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        };
    });

    //Timer

    const deadLine = '2021-01-30';

    function getTimeRemaining (endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), 
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return{
            t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function addZero (num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock (selector ,endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
              
        function updateClock (){
            const t = getTimeRemaining(endtime);

            days.innerHTML = addZero(t.days),
            hours.innerHTML = addZero(t.hours),
            minutes.innerHTML = addZero(t.minutes),
            seconds.innerHTML = addZero(t.seconds);

            if(t.t <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer' ,deadLine);

    //Modal window

    const openModalBtn = document.querySelectorAll('[data-modal]'),
          closeModalBtn = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

    function openModel(){
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(timerModal);
        window.removeEventListener('scroll', showModalByScroll);
    }

    openModalBtn.forEach((i) => {
        i.addEventListener('click', openModel);
    });

    function closeModal(){
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if(event.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    const timerModal = setTimeout(openModel, 5000);

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModel();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});