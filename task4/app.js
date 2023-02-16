// Урок 4
// Написать приложение Counter (Счетчик).Логика у приложения следующая: если число больше нуля, то оно должно быть зеленого цвета, если ноль то серого, если меньше нуля то красного. Должны быть 3 кнопки как на скриншоте: увеличить, сбросить, уменьшить.
// Дизайн приложения на ваш вкус)



const plus = document.querySelector('.plus__minus'),
  minus = document.querySelector('.minus__plus');

let number_el = document.querySelector('.number');

plus.addEventListener('click', () => {
  let val = parseInt(number_el.innerText);
  number_el.innerText = ++val;
});

minus.addEventListener('click', () => {
  let val = parseInt(number_el.innerText)
  number_el.innerText = --val;
})
