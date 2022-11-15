import "./style.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid"; // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import "@fortawesome/fontawesome-free/js/regular"; // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import "@fortawesome/fontawesome-free/js/brands"; // https://fontawesome.com/icons?d=gallery&s=brands&m=free

const button = document.querySelector("button");
const input = document.querySelector("input");

const onClick = (e) => {
  e.preventDefault();
  if (input.value) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
      .then((response) => response.json())
      .then((json) =>
        alert(
          `Ваш результат: ${
            json.title || "Нет данных, Введите номер меньше 200"
          }`
        )
      );
  } else {
    alert("Введите номер");
  }
};

button.addEventListener("click", onClick);
