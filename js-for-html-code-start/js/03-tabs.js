/*
//нашли все заголовки табов по data атрибуту
const tabheaders = document.querySelectorAll('[data-tab]');
//нашли все contentbox
const contentboxes = document.querySelectorAll('[data-tab-content]');


tabheaders.forEach(function (item){
    item.addEventListener('click', function () {


        //скрыть все contentbox
        contentboxes.forEach(function (item) {
            item.classList.add('hidden');
        })

        //найти нужный contentbox и показать его
        const contentbox = document.querySelector('#' + this.dataset.tab);
        contentbox.classList.remove('hidden');

    })
})
*/


