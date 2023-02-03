var getNum = Number(prompt("Please enter your rate"));
if (getNum ===5  ) {
  alert('Спасибо за высокую оценку!')
}
else if (getNum >=10) {
  alert('Please enter the number from 1 to 5')

}
else if (getNum<=4) {
   alert('Мы работаем над улучшением сервиса!')
}
else {
 alert('Check your entered number')
}