// Получаем ссылки на элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Обработчик клика на кнопке "Заказать"
btn.onclick = function() {
  modal.style.display = "block";
}

// Обработчик клика на "крестик" закрытия модального окна
// span.onclick = function() {
//   modal.style.display = "none";
// }

// Обработчик клика на любое место вне модального окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
