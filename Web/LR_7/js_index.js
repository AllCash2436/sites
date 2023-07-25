// Получаем ссылки на все необходимые элементы
const thumbnails = document.querySelectorAll('.thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const closeButton = document.querySelector('.close-button');

// Добавляем обработчик события для каждой миниатюры
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', () => {
    fullImage.src = thumbnail.src;
    fullImageContainer.style.opacity = '1';
  });
});

// Добавляем обработчик события для кнопки закрытия
closeButton.addEventListener('click', () => {
  fullImageContainer.style.opacity = '0';
});


const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
  const subMenu = menuItem.querySelector('.sub-menu');
  const subMenuLinks = menuItem.querySelectorAll('.sub-menu a');

  menuItem.addEventListener('mouseover', () => {
    menuItem.style.backgroundColor = '#eee';
  });

  menuItem.addEventListener('mouseout', () => {
    menuItem.style.backgroundColor = 'transparent';
  });

  subMenuLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#35B8BE'; // Изменение цвета текста при наведении на гиперссылку
    });

    link.addEventListener('mouseout', () => {
      link.style.color = '#333'; // Возвращение исходного цвета текста после ухода с гиперссылки
    });

    link.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращение перехода по ссылке
      // Выполнение определенного действия при щелчке на гиперссылке
      alert(`Вы щелкнули на ссылку "${link.innerText}"`);
    });
  });
});
