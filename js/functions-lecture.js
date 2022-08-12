// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with or without parameters
// 4. multiple parameters are seperated by ,
// 5. Curly brace contains the function body
// 6. the function body contains the code that runs when the function is envoked
// 7.[Optional but common] return statement
// function sayHello(greeting, name){
//     return `${greeting}, ${name}`;
// }
// // here number has local scope
//
// // function localOrGlobal(){
// // func
//
// // Here number has global scope
// let number = 20;
// function localOrGlobal(){
//     console.log(number);
//  }
//
// let number = 20;
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
// }
// localOrGlobal();
// console.log(number);

// function expression
// function expressions are not hoisted, so this wont work
// bark();
//
// const bark = function(){
//     console.log("woof");
// }
// // function declaration
// // function declarations are hoisted, so this will work.
// yap();
//
// function yap(){
//     console.log("yip,yip,yip");
// }

// // function declaration
// function add(num1,num2){
//     return num1 + num2;
// }

// function expression
// const add = function(num1, num2){
//     return num1 + num2;
// }

// arrow function -- if it only returns
// something, you dont need a return keyword
const add = (num1, num2) => num1 + num2;


// if there is only one parameter, you dont need these
// parentheses around the parameter
const addTen = number => number + 10;


// if there are no parameters, you use empty parentheses
const helloWorld = () => "Hello World";
