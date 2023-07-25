//Находим нужные элементы
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonclose = document.querySelector('[data-modal-close]');


//Прослушиваем клик на кнопке открытия и открываем модалку
button.addEventListener('click', function() {
    modal.classList.remove('hidden');

})

//Прослушиваем клик на кнопке открытия и закрываем модалку
buttonclose.addEventListener('click', function(){
    modal.classList.add('hidden');
})

modal.addEventListener('click', function(){
    modal.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(event){
    event.stopPropagation();
})