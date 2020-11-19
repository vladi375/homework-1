// Task 1

let a = 4;
let b = 3;

a = 3;
b = 4;




// Task 2

let a = 10;
let b = "qwerty";
let c = true;

console.log(`Variable: ${a} have type => ${typeof a}`);
console.log(`Variable: ${b} have type => ${typeof b}`);
console.log(`Variable: ${c} have type => ${typeof c}`);




// Task 3

let a = 2;
let b = 4;

let sum = String(a) + String(b);

console.log(sum);




// Task 4

let name = prompt("Ваше имя?");
let age = prompt("Ваш возраст?");

console.log(name);
console.log(age);




// Task 5

let number = +prompt("Введите число:");
let addition = +prompt("Сколько прибавить к предыдущему результату?");
let subtraction = +prompt("Сколько отнять от предыдущего результата?");
let increase = +prompt("Сколько умножить от предыдущего результата?");
let division = +prompt("Сколько разделить от предыдущего результата?");

alert(((number + addition) - subtraction) * increase / division);




// Task 6

let age = +prompt("Сколько тебе лет?");

if (age > 18) {
    alert("Попей пивка");
} else if ( age >= 16 && age <= 18) {
    alert("Можешь выкурить сигаретку, только маме не говори");
} else {
    alert("Пей колу");
}




// Task 7

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// Task 8

let name = prompt("День добрый! Как Вас величать?");

let mood = prompt(`Как ${name} Ваши дела?`);

let food = prompt("Чем потчевал сегодня барин?");

let bye = prompt("К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....");

console.log(`- День добрый! Как Вас величать?\n-${name}\n-Как ${name} Ваши дела?\n-${mood}\n-Чем потчевал сегодня барин?\n-${food}\n
-К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....\n-${bye}`);




// Task 9

let firstNum = +prompt("Введите начальное число:");
let lastNum = +prompt("Введите конечное число:");

for (let i = firstNum; i < lastNum; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(i);
    }
}




// Task 10 

let number = +prompt("Введите число:");

switch (0) {
    case (number % 5):
        alert("Ffffzzz");
        break;
        

    case (number % 3):
        alert("Bbbzzzz");
        break;
        

    case (number % 3 && number % 5):
        alert("FfffzzzBbbzzzz");
        break;      
}





