const modalbuttons = document.querySelectorAll('[data-modal-button]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

//открыть
modalbuttons.forEach(function(item){
    item.addEventListener('click', function(){
        const modalid = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalid);
        modal.classList.remove('hidden');
//находим внутри модалки блок modal-window и звпрещаем ему передавать клики родителям
        modal.querySelector('.modal-window').addEventListener('click', function(event){
            event.stopPropagation();
        })
    });
});


//закрыть
modalButtonsClose.forEach(function(item){
    item.addEventListener('click', function(){
       const modal = this.closest('[data-modal]');
       modal.classList.add('hidden');
    });
});


//закрытие модалок по фейду
allModals.forEach(function(item){
    item.addEventListener('click', function(){
       this.classList.add('hidden');
    });
});
