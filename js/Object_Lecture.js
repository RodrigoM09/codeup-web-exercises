// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }
//
// // use dot notation to access object values under most circumstances
//
// // console.log(currentWeather.temp);
// // console.log(currentWeather.description);
// // console.log(currentWeather.feels_like);
// //
//
//
// // use bracket notation to access object property values when you need
// // to use variable-driven property names
//
// // console.log(currentWeather["humidity"]);
// // let userChoice = "clouds";
// // console.log(currentWeather[userChoice]);
// // userChoice = "temp";
// // console.log(currentWeather[userChoice]);
//
//
//
// // you can do anything to an object that you can do to any other variable
//
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95) {
//     console.log("its kind of hot");
// }else{
//     console.log("its cool today for texas");
// }
//
//
// //loop through an array using for loop
//
// for(let property in currentWeather){
//     console.log(property + ": " + currentWeather[property]);
// }
//
//
//
// // dynamically add new properties to existing objects
//
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);

// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

// Loop over an array objects

// using the for loop to loop through array object
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log((`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`));
// }

// forEach looping through array objects.

// hourlyWeather.forEach(function (forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });

// forEach loop with arrow syntax

// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// );
//
// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
// console.log("the temperature in " +texasInfo[1].city + " is " +
//     texasInfo[1].currentWeather.temp);


// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8
// }
//
// let monster = {
//     name: "goblin",
//     hitPoints: 8,
//     maxDamage: 6
// }

// Controller object to handle anything players or
// game objects do that affects the state of game.
// The controller might hande taking user input and
// calculating the inputs effect on the game

// let controller = {
//     attack: function (attacker, defender){
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
// }

// The view object handles output

// let view = {
//     displayAttackResults: function (attacker, defender,defenderHPBeforeAttack, damage){
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage`);
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points`);
//         console.log("-------------");
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8
//     },
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6
//     }
// }
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster,model.fighter);

// creating objects
// define an empty object and create properties dynamically
// let goblin = {};
// goblin.name = "Goblin";


// create a function that returns objects
// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     }
// }

// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);

// use an object constructor
// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// model.hobGoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
// controller.attack(model.hobGoblinCaptain, model.fighter);

// Object Destructuring
const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}
// let make = car.make;
// let carModel = car.model;

const {make, model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model, year, mileage} = car) => {
    console.log(`${year} ${make} ${model} with ${mileage}`)}
outputCarInfo(car)