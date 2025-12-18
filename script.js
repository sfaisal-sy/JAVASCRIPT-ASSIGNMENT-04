




/*
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
*/

let studentsName = ['Faisal', 'SAAD', 'FAIZAN'];
let studentsScore = [380, 420, 400];

let totalMarks = 500;

for (let i = 0; i < studentsName.length; i++) {
    console.log(`The score of ${studentsName[i]} is ${studentsScore[i]} and he got percentage ${studentsScore[i]/totalMarks*100}%`);   

};


// let colors = ['RED', 'YELLOW', 'BLUE'];
// console.log(colors)

// let user = prompt('ENTER COLOR AT END');

// colors.push(user);

// console.log('COLOR ADD AT END : '+ colors);

// user = prompt ('ENTER COLOR AT BEGINNING');

// colors.unshift(user);

// console.log('COLOR ADD AT BEGINNING : '+ colors);

// user = +prompt('Enter index number to DELETE the color');

// let indexLength = +prompt('ENTER length to be DELETED');

// colors.splice(user, indexLength);

// console.log(colors);


// let scoreStudent = [320, 230, 480, 120];

// scoreStudent.sort();

let citiesList = ['KARACHI', 'LAHORE', 'ISLAMABAD', 'QUETTA', 'PESHAWAR'];

let selectedCities = citiesList.slice(3,5);

console.log(selectedCities);


let string = ['This', 'is', 'my', 'cat'];

console.log(string.join(','));
console.log(string.join(' '));



let fifoArray = [];

fifoArray.push('Keyboard');
fifoArray.push('Mouse');
fifoArray.push('Printer');
fifoArray.push('Monitor');

console.log(fifoArray);

fifoArray.shift();
console.log(fifoArray);

fifoArray.shift();
console.log(fifoArray);

fifoArray.shift();
console.log(fifoArray);

fifoArray.shift();
console.log(fifoArray);





let lifoArray = [];

lifoArray.push('Keyboard');
lifoArray.push('Mouse');
lifoArray.push('Printer');
lifoArray.push('Monitor');

console.log(lifoArray);

lifoArray.pop();
console.log(lifoArray)
lifoArray.pop();
console.log(lifoArray)
lifoArray.pop();
console.log(lifoArray)
lifoArray.pop();
console.log(lifoArray)
