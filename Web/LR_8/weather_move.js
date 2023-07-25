const container = document.querySelector('.container');
const notebookButton = document.getElementById('notebook-button');

// Функция для получения текущего времени суток
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}

// Функция для изменения цвета фона в зависимости от времени суток
function changeBackgroundColor() {
  const currentTime = getCurrentTime();
  if (currentTime >= 6 && currentTime < 12) {
    container.style.backgroundColor = '#f5dca8'; // Утро
  } else if (currentTime >= 12 && currentTime < 18) {
    container.style.backgroundColor = '#a8d9f5'; // День
  } else if (currentTime >= 18 && currentTime < 24) {
    container.style.backgroundColor = '#ffbebe'; // Вечер
  } else {
    container.style.backgroundColor = '#393e46'; // Ночь
  }
}

// Изменение цвета фона при загрузке страницы
changeBackgroundColor();

// Изменение цвета фона при каждом часе
setInterval(changeBackgroundColor, 3600000); // Обновление каждый час

const button = document.querySelector('.button');
const addressBook = document.querySelector('.address-book');

button.addEventListener('click', () => {
  addressBook.style.display = 'table';
});

const personLinks = document.querySelectorAll('.person-link');

personLinks.forEach(personLink => {
  personLink.addEventListener('click', () => {
    const personName = personLink.textContent;
    const personInfo = getPersonInfo(personName);
    const infoCell = personLink.parentElement.nextElementSibling;
    infoCell.textContent = personInfo;
  });
});

function getPersonInfo(personName) {
  // Здесь можно добавить логику для получения информации о соответствующем человеке
  // в зависимости от его фамилии и имени
  return 'Адрес: ... Телефон: ... E-mail: ...';
}

