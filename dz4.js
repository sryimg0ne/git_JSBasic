//завдання 1 
let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let value = (num1 > num2) ? 'Перше число більше' : 'Друге число більше';
let message = value;
console.log(message);
//завдання 2
let userMessage = prompt("Введіть повідомлення:")
switch(userMessage){
    case null:
        console.log("Відміна вводу");
        break;     
    case "":
            console.log("Ви нічого не ввели");
            break;        
    case userMessage:
        console.log(userMessage);
        break;
}
//завдання 3
let numberOfMonth = +prompt("Введіть номер місяця")
switch(numberOfMonth){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Ви ввели неправильне число")
        break;
}
//завдання 4
for(let i = 0; i <= 10; i++){
    console.log(i);
}//завдання 5 
let diapasonBeginning = +prompt("Введіть початок діапазону: ");
let diapasonEnding = +prompt("Введіть кінець діапазону: ");
for(let i = diapasonBeginning; i <= diapasonEnding; i++){
    console.log(i);
}
//завдання 6
let three = 3;
for(let i = 0; i <= 10; i++){
    console.log(`${three} помножити на ${i} = ${three * i}`);
}
//рівень 2 
let numberForSum = 0;
let iterationNumber = 0;
while(iterationNumber < 5){
    numberForSum += +prompt("Введіть числа які бажаєте додати:");
    iterationNumber++;
}
console.log("Сума ващих чисел = " + numberForSum);
//завдання 2 
let factorialNumber = +prompt("Введіть число для знаходження факторіалу: ");
for(let i = factorialNumber - 1; i >= 1; --i){
    factorialNumber *= i;
}
console.log(factorialNumber);
//завдання 3
let quantityOfRowsWithStars = +prompt("Введіть к-ть рядків: ");
let stars;
for(let i = 1; i <= quantityOfRowsWithStars; i++){
    stars += "*";
    console.log(stars);
}
