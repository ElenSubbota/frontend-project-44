#!/usr/bin/env node
console.log('Welcome to the Brain Games!');

import readlineSync from 'readline-sync';


const name = readlineSync.question('May I have your name?');
console.log('Hello, ' + name + '!');

const randomNumber = Math.random();
const question = readlineSync.question('Question:' + randomNumber);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
