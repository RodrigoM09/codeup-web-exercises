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

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}