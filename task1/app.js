
// 1) написать программу: нужно запрашивать у пользователя его имя и фамилию (отдельным prompt) и выводит приветствие в виде: Здравствуйте, Имя Фамилия! (задание на конкатенацию)

var getUserName = prompt("Please enter your name ");
var getUserSurname = prompt("Please enter your surname");
var getUserInfo = getUserName + " " + getUserSurname ;
  alert('Здраствуйте,'+ ' ' + getUserInfo)

// 2) написать программу "светофор": программа запрашивает у пользователя цвет в текстовом виде, и печатает в консоль действие согласно ПДД. Например: красный : стой! желтый : жди и т.д. (задание на switch..case)

var trafficColor = 'Red'.toLocaleLowerCase()
//  var pddRules = trafficColor ``
  switch (trafficColor) {
    case "red":
      console.log('действие согласно ПДД:'+ " " ,'Stop!');
      break;
    case "yellow":
      console.log('действие согласно ПДД:' + " ",  'Wait your turn' );
   
      break;
    
     
    case "green":
      console.log('действие согласно ПДД:'+ " ", 'Now, its your turn');

      break;
    
    default:
      'Be carefull! '
      break;
}
