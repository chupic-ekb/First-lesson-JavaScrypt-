
//УСЛОВИЯ
if (4 == 4) {
    console.log("ok!!!");
}
else {
    console.log("error!!!");
}

const num = 50;
if (num < 49) {
    console.log("error!!!");
}
else if (num > 100) {
    console.log("Многовато");
}
else {
    console.log("OK!!!");
}

(num == 50) ? console.log("OK!!!") : console.log("error!!!");

const sum = 50;
switch (sum) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log("Многовато");
        break;
    case 50:
        console.log("В точку");
        break;
    default:
        console.log("Не в этот раз!!!");
        break;
}

//ЦИКЛЫ

//одинаковое выполнение цикла, разный синтаксис
let mem = 50; 
while (mem<=55) {
    console.log(mem);
    mem++;
}

//одинаковое выполнение цикла, разный синтаксис
let mem = 50;
do {
    console.log(mem);
    mem++;
}
while (mem<=55);

for (let i=1; i<10; i++) {
    if (i == 6) {
    continue;
    }
    console.log(i);
}