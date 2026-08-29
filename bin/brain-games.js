#!/usr/bin/env node
console.log('Welcome to the Brain Games!');

import readlineSync from 'readline-sync';


const name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('Question: ' + randomNumber);
const question = readlineSync.question('Your answer: ');

const even = randomNumber % 2 === 0;
const noEven = randomNumber % 2 !== 0;

if(even && question === 'yes'){
     console.log('Correct!');
     correctAnswers += 1;
}
else if(noEven && question === 'no'){
    console.log('Correct!');
     correctAnswers += 1;
}
else{
    console.log("is wrong answer ;(. Correct answer was 'no'");
}

}
if (correctAnswers === 3) {
  console.log('Congratulations!');
}
else if (correctAnswers !== 3) {
  console.log("Let's try again, " +  name + "!");
}