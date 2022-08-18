// let slices = 4;
// console.log(`There are ${slices} slices`)
// while (slices > 0){
//     console.log("I'll have a slice.");
//     slices = slices -1;
//     console.log(`Now there's ${slices} left`);
// }
// console.log("No more pizza")

// let counter = 100;
// while (counter >= 100){
//     console.log(counter);
//     counter--;
// }

// let number = 5
// while (number < 200){
//     number = number * 2;
//     // number *= 2;
//     console.log(number)
// }
//


//Price total accumulator
// ask user for input -- how much does something cost
// assign the user input to a variable
//declare a variable to hold the total cost
//tell the user what the total is
// get the user input for the next items cost
// there needs to be a way for the user to say there's no more items

// let total = 0;
// let priceOfItem = parseFloat(prompt("enter the price of your item"))
// total = total + priceOfItem;
// alert("Your total is now" + total);
// let userInput = "";
// while (userInput !== "stop") {
//     userInput = prompt("Enter the price of your next item:");
//     if (userInput === "stop"){
//         alert("Your final total is:" + total);
//     }else{
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is now " + total)
//     }
//
// }

// let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your first item:" +
//         "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }
//
//
// random number generator between 1 and 6
// math.floor rounds down
// math.floor(math.random() * 6 + 1
// math.ceil rounds up
// math.ceil(math.random() * 6
//
// let number = Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess)
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
//
// } while(guess !== number)
// alert(`Your guess of ${guess} matches the number ${guess}!`);

// this is the loop control variable
//intialize it to a starting value
// let count = 100;
// //check the value of the loop control
// //variable in a conditional test
// while (count >= 0){
//     console.log(count);
//     // change the value of the loop control
//     count = count -1;
// }
//
// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }
//
// let i = 0;
// while(i<100){
//     console.log(i);
//     i++;
// }
// console.log("Outside the loop: " + i)

for(let i = 0; i < 100; i++){
    console.log(i)
}