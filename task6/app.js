// * Написать функцию которая маскирует номер банковской карты. Например: maskCard("4815154823541789") -> "481515XXXXXX1789". Должны быть видны первые 6 и последние 4 символа, остальные скрыть символом(по умолчанию Х). Причем сделать так чтобы скрывающий символ можно было передавать как параметр. Например: maskCard("4815154823541789", "*") -> "481515******1789".


// const bankNum ='4815154823541789'
// function coverNum(bankCode) {
//   let result = ''
  
//   for (let i = 0; i < bankCode.length;i++) {
//     if (i>=5 && i <=11 ) {
//       result = result+'X'
//     } else {
//       result = result+bankCode[i]
//     }
//   }
//   return result
// }
// coverNum(bankNum)
// console.log(coverNum(bankNum));

// * Написать функцию капитализации строк. Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; capitalizeString("иВАНОВ") -> "Иванов"; Капитализация - это процесс преобразования строки, когда первая буква становится заглавной, а остальные строчными.



// function capitalize(name) {
//   let firstLetter = name[0].toUpperCase()
//   let result =name.toLowerCase().slice(1)
//   return firstLetter + result 
// }
// console.log(capitalize('ЕВГЕНИЙ'));




// * Написать функцию по обезличиванию ФИО. Функция должна заменить все символы кроме первого и последнего на знак _. Например: depersonalize(“Киселев Евгений Дмитриевич”) -> “К_____в Е_____й Д________ч”, depersonalize(“Сидоров Вова”) -> “С_____в В__а”.
const userName = 'Киселев Евгений Дмитриевич'

function getLetter(name){
  let result = ''
  for (let i = 0;i < name.length; i++ ){
    if(i >= 1 && i < name.length-1){
      result = result + '_' 
    } else{
      result = result + name[i]
    }
  }
  return result
}


function depersonolize (user){
  let result =''
  let userNameBox  = user.split(' ')
  for(let userDep of userNameBox) {
    result = result + ' '+ getLetter(userDep)
    
  }
  return result.trim()
}
console.log(depersonolize(userName))