const headers = document.querySelectorAll('[data-name = "accordeon-title"]');


headers.forEach(function(item){

    item.addEventListener('click', showcontent);

});


function showcontent() {
    this.nextElementSibling.classList.toggle('hidden');
}
