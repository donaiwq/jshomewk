// Урок 8
// * Написать приложение "Авторизация". Дизайн на ваше усмотрение. Создайте структуру фронтенд проекта с вебпаком как на уроке. В отдельном файле создайте класс User с полями логина и пароля (можно еще имя пользователя которое будет отличаться от логина). Создайте массив пользователей и при попытке войти, пройтись по массиву с пользователями и выдать сообщение об успехе если по логину и паролю он найден, а если нет то вывести сообщение о ошибке авторизации.
let log = document.getElementById('log')
let pass = document.getElementById('pass')
const userInfo = {
  name: 'Dona',
  login: 'dona&unique_rv',
  password: 'karamelka'
}
function autorizationFunc() {

  if (log.value === userInfo.login && pass.value === userInfo.password
  ) {
    alert('you successfully entered to your account')
  }
  else if (log.value == '' && pass.value=='') {
    alert('fill empty spaces')
  }
  else {
    alert('Please, check your email or password')
  }

}
const submit = document.getElementById('submit').addEventListener('click', () => {
    autorizationFunc()
  })
