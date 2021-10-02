let ph = ["Привет", "Ты кто?", "Пока", "Как погода?"];
let pb = [
  "Здравствуйте!",
  "Бот Вася",
  "До свидания, рад был пообщаться!",
  "Сегодня прекрасная погода!",
];
let pbs = ["Уточнить детали можно по телефону 123456789"];

while (true) {
  let n = prompt("Введите вопрос или !");
  

  if (n == ph[0]) {
    alert(pb[0]);
  } else if (n == ph[1]) {
    alert(pb[1]);
  } else if (n == ph[2]) {
    alert(pb[2]);
  } else if (n == ph[3]) {
    alert(pb[3]);
  } else {
    let rand1 = Math.floor(Math.random() * pbs.length);
    alert(pbs[rand1]);
  }
}
