
const numberBox = document.querySelector('#result')
let result = []

function randomizer () {
  return Math.trunc(Math.random()*100) 
}

function setRandomNum() {
  result=[]
  for (let i = 1; i <= 6; i++){
  result.push(randomizer())
}
}
 setRandomNum()

for (let i = 0; i < result.length; i++){

    const randomNum = document.createElement('div')
  
  numberBox.appendChild(randomNum)

  randomNum.classList.add('boxes')

  randomNum.innerText=result[i]

}

const randomBtn = document.querySelector('.randomizer')

randomBtn.addEventListener('click', (event) => {
  console.log('before =>', result);
  setRandomNum()
  for (let i = 0; i < numberBox.children.length; i++){
    numberBox.children[i].innerText = result[i]  

  }
  addRotate()
  setTimeout(() => {
    removeRotate()
  },1000)
  // removeRotate()

  console.log('after=>',result);
 } )
 function addRotate() {
   let boxesContainer = document.querySelectorAll(".boxes");
   for (let box of boxesContainer) {
    box.classList.add("boxrotate")
   } 
  
}
 function removeRotate() {
   let boxesContainer = document.querySelectorAll(".boxes");
   for (let box of boxesContainer) {
    box.classList.remove("boxrotate")
   } 
  
}
// const randomNum = document.createEement('div')

// numberBox.appendChild(randomNum)

// randomNum.classList.add('boxes')
// randomNum.innerText='hey'


// console.log(result)

// const result = document.querySelector('.numberbox').innerHTML 
// let randomizer = document.querySelectorAll('.randomizer');
// for (let i = 0; i <= 6; i++){
 
// randomizer.onclick = function () {
//   return Math.trunc(Math.random()*100) 
//   }
//    result.push(randomizer())
// }
// let number_el = document.querySelector('.numberbox');


// randomizer.addEventListener('click', () => {
//   for (let i = 1; i <= 6; i++){
//     result.push(randomizer())
//   }
//   function randomizer () {
//     return Math.trunc(Math.random()*100) 
//   }
//   number_el.innerText = ++val;
// });
