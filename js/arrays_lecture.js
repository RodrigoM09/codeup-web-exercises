// declaring an array literal
// each item in an array is called an element.


let groceryList = ['bread','eggs','butter','milk']
// for(i = 0; i < groceryList.length; i++ ) {
//     if (i === groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
// }
//
// let cars = ['Porsche','Mercedes','Lamborghini', 'Ferrari']
// // for (i = 0; i < cars.length; i++ ){
// //     if (i === cars.length - 1) {
// //         console.log(cars[i])
// //     } else {
// //         console.log(cars[i])
// //     }
// // }
//
// function outputArray(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// outputArray(cars);
//
 let prices = [32, 99, 21, 6.99, 4.99, 12.99, 8.98, 5.99]
// //for each loop takes an anonymous function
// //the function we pass to the foreach loop has up to three parameters
// // The first parameter represents the array elements
// // the second parameter represents the array itself
// // the third parameter represents the array itself
// // the second and third parameters are optional
//
// // prices.forEach(function(price, index){
// //     console.log("item number " + (index+1) + " costs " + price)
// // });
//
// // Arrow Function version of above
// prices.forEach((price, index) => {
//     console.log(price)
// });

groceryList.push("Potatoes");
console.log(groceryList);
groceryList.pop();
console.log(groceryList);

groceryList.unshift("Sliced cheddar");
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

groceryList[indexOfButter] = "Peanut Butter";
console.log(groceryList);


groceryList[0] = "avocados"
console.log(groceryList);

let firstHalfOfGroceryList = groceryList.slice(0,2);
console.log(firstHalfOfGroceryList);

let secondHalfOfGroceryList = groceryList.slice(2)
console.log(secondHalfOfGroceryList)

firstHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList)

groceryList.sort();
console.log(groceryList)
console.log(groceryList.reverse());

prices.sort(function (a,b){
    return a-b;
});
console.log(prices);

groceryList[3] = "Blueberries"
console.log(groceryList);
console.log(groceryList.sort());


for (let i = 0; i < groceryList.length; i++){
    groceryList[i] = groceryList[i].toLowerCase();
}
console.log(groceryList.sort());

groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();

})
console.log(groceryList);