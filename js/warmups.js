//Write a function that accepts an array of numbers and returns its average.

// code I found online
// const average = array => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,2,3,4,5]));

// code Javier wrote
// let array = [5, 10, 15];
//
// function arrayAverage(array){
//     let total =0;
//     for (let i = 0; i < array.length; i++){
//         if (!isNumber(array[i])){return false;}
//         total += array[i];
//     }
//     return total/array.length;
// }


//Write a function that accepts an array of strings and returns the longest string.
// If there are two strings of equal length it returns the one with the lowest index

//code javier wrote
// let stringArray = ["Jabba", "Darth Maul", "Hondo"];
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for(let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length){
//             longest = arrayOfStrings[i];
//         }
//     }
// }

// code I found online
// function indexOfSmallest(a) {
//     let lowest = 0;
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < a[lowest]) lowest = i;
//     }
//     return a[lowest];
// }
// console.log(indexOfSmallest(["purple","orange","grey"]))

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];
function calculateTotalStudents(array){
    let totalStudents = 0;
    for (let i = 0; i < array.length; i++){
        totalStudents = totalStudents + array[i].students;
    }
    return totalStudents;
}

console.log(calculateTotalStudents(classes))
// try starting with the simpler form of the problem: write a function that calculates the sum of the elements of an array.  Thus, if you give it
// the function should return 38
let numericArray = [8, 10, 20];


// Write a function called convertToObject that takes
// in a string that is the name of a class,
// and a number that is the number of students,
// and returns an object with the properties `class` and `students`

function convertToObject(string, number){
    return {class: string, number: number};
}
// Arrow Function Version
// const convertToObject = (nameOfClass,numberOfStudents) => {
//     return{
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

console.log(convertToObject("Intro to Programming", 20)); //returns {class: "Intro to Programming", students: 20}

let neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

let neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

let neighborhood3 = {
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable.
// A neighborhood is desirable if the median home price is less than 300000,
// crime rates are low, and the total rating of schools is at least 24.

function desirable(object){
    let total =0;
    for (let i = 0; i < object.schools.length; i++){
        total += object.schools[i].rating;
    }
    return object.medianHomePrice < 300000 && object.crimeRate === "low" && total >= 24;
}

//Let's pretend your company just hired your friend from college and paid you a referral bonus.
// Awesome! To celebrate, you're taking your team out to the terrible dive bar next door
// and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid
// you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level,
// 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid
// you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// what's the cost of each level? level * level * priceOfCan
// need a totalCost accumulator variable and some kind of level
// variable that keeps track of what level im on and i need to keep
// looping until totalCost > bonus
function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus){
        totalCost += levels * levels * price;
        if (totalCost + ((levels +1) ** 2 * price) > bonus){break;}
        levels++;
    }
    return levels;
}
// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the acumulator to the number of levels
//     }
//     return x;
// }



// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:

let fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}
 // {firstName: 'fred', lastName: 'smith'}
// The shape of the output should be the following:
function getSimpleUser(object){
    return {firstName: 'fred', lastName: 'smith' }
}

console.log(getSimpleUser(fred));

// Problem number 2:
//
// Create a function, createNames, that takes in an array of first names and an array of last names.
// The function should return an array of name objects with firstName and lastName properties with the input array values.
// Assume both input arrays are not empty, the same length and only contain string elements.

    let firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
    let lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
    createNames = names => names.map((name) =>{
        const [firstName, lastName] = name.split(' ');
        return {firstName, lastName };
});
console.log(createNames(firstNames,lastNames));

    // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.


const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}

// Given the attendance object, write a function that returns the total attendance across all teams.
function totalAttendance(attendanceObject){
    let attendanceArray = Object.values(attendanceObject);
    let total = 0; // this is an accumulator variable
    for (let i = 0; i < attendanceArray.length; i++){
        total += attendanceArray[i];
    }
    return total;
}

// function totalAttendance(attendanceObject){
// let total = 0;
// for (const prop in attendance){
//     total += attendance[prop];
//     }
//     return total;
// }
// for (const prop in attendance) {
//     console.log(attendance[prop]);
// }


// Given the attendance object, write a function that returns the average attendance
function averageAttendance(attendanceObject){
let total = 0;
for (const prop in attendance){
    total += attendance[prop];
    }
    return total/Object.keys(attendance).length;
}

// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

function createObject(attendanceObject){
    let total = 0;
    for (const prop in attendance){
        total += attendance[prop];
    }
    attendanceObject.statistics = {
        totalAttendance: total,
            averageAttendance: total/Object.keys(attendance).length
    }
    return attendanceObject;
}






// Convert to Number
//  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
//  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
//  *
//  * Examples
//  *
//  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
//  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
//  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
//  */


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

let address = '8646 Sunny Oaks'

function convertsAddressToObject(addressString){
    return {
        streetNumber: addressString.substring(0, addressString.indexOf(' ')), // first number is where to begin and index of is where to stop
        streetName: addressString.substring(addressString.indexOf(' ') + 1), // the is saying go up to the space plus 1
    }
}

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
let totalPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
    ]

function peopleAndPets(arrayOfObjects){
    let total = 0;
    for (let i = 0; i < arrayOfObjects.length; i++){
        total += arrayOfObjects[i].pets;
        return total;
    }
}
// Same as above just using for each.
// function totalPets(arrayOfObjects){
//     let total = 0;
//     arrayOfObjects.forEach(function(object){
//         total += arrayOfObjects.pets;
//     });
//     return total;
// }


/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */


/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */