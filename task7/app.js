let time = 3600;
const timer = document.getElementById('timer')
timer.innerHTML = '0'
  function updateTime() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  timer.innerHTML = `${minutes} : ${seconds}`
  time--;
}
const start = document.getElementById('start').addEventListener('click', () => {

  intervalID = setInterval(updateTime, 1000);

  timer.style = 'color:white;border:3px solid white;'
})
function stopTime() {
  clearInterval(intervalID)
}
const stop = document.getElementById('stop').addEventListener('click', () => {
stopTime()
})
const reset = document.getElementById('reset').addEventListener('click', () => {

  timer.innerHTML = '0'
  stopTime()
 })
