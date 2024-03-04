//завдання 1 
let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let value = (num1 > num2) ? 'Перше число більше' : 'Друге число більше';
console.log(value);
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
    case 2: 
    case 12:            
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:        
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
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
console.log("Сума ваших чисел = " + numberForSum);
//з циклом for
let numberForSum1 = 0
for(let i = 0; i < 5; i++){
    numberForSum1 += +prompt("Введіть числа які бажаєте додати (2):");
}
console.log("Сума ваших чисел = " + numberForSum1);
//завдання 2 
let factorialNumber = +prompt("Введіть число для знаходження факторіалу: ");
for(let i = factorialNumber - 1; i >= 1; --i){
    factorialNumber *= i;
}
console.log(factorialNumber);
//з циклом while
let factorialNumber1 = +prompt("Введіть число для знаходження факторіалу(2): ");
let iterationNumber1 = factorialNumber1 - 1;
while(iterationNumber1 >= 1){
    factorialNumber1 *= iterationNumber1;
    iterationNumber1--;
}
console.log(factorialNumber1);
//завдання 3
let quantityOfRowsWithStars = +prompt("Введіть к-ть рядків: ");
let stars ="";
for(let i = 1; i <= quantityOfRowsWithStars; i++){
    stars += "*";
    console.log(stars);
}
