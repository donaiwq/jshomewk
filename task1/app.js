
// // 1) написать программу: нужно запрашивать у пользователя его имя и фамилию (отдельным prompt) и выводит приветствие в виде: Здравствуйте, Имя Фамилия! (задание на конкатенацию)

// var getUserName = prompt("Please enter your name ");
// var getUserSurname = prompt("Please enter your surname");
// var getUserInfo = getUserName + " " + getUserSurname ;
//   alert('Здраствуйте,'+ ' ' + getUserInfo)

// // 2) написать программу "светофор": программа запрашивает у пользователя цвет в текстовом виде, и печатает в консоль действие согласно ПДД. Например: красный : стой! желтый : жди и т.д. (задание на switch..case)

// var trafficColor = 'Red'.toLocaleLowerCase()
// //  var pddRules = trafficColor ``
//   switch (trafficColor) {
//     case "red":
//       console.log('действие согласно ПДД:'+ " " ,'Stop!');
//       break;
//     case "yellow":
//       console.log('действие согласно ПДД:' + " ",  'Wait your turn' );
   
//       break;
    
     
//     case "green":
//       console.log('действие согласно ПДД:'+ " ", 'Now, its your turn');

//       break;
    
//     default:
//       'Be carefull! '
//       break;
// }
// // 3) написать программу "конвертер чисел". Пользователь вводит число от 1 до 9, программа должна сконвертировать это число в римское. Например: 2 -> II, 5 -> V и т.д. (задание на switch..case)

// var rimNumber = '10'
// switch (rimNumber) {
//   case '1':
//     console.log('I');
//     break;
//   case '2':
//     console.log("II");
//     break;
//   case '3':
//     console.log("III");
//     break;
//   case '4':
//     console.log('IV');
//     break;
//   case '5':
//     console.log('V');
//     break;
//   case '6':
//     console.log('VI');
//     break;
//   case '7':
//     console.log('VII');
//     break;
//   case '8':
//     console.log('VIII');
//     break;
//   case '9':
//     console.log('IX');
//     break;
//   case '10':
//     console.log('X');
//     break;

//   default:
//     console.log('Check your number');
//     break;
// }