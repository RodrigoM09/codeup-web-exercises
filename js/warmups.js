//Write a function that accepts an array of numbers and returns its average.

// code I found online
// const average = array => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,2,3,4,5]));

// code Javier wrote
let array = [5, 10, 15];

function arrayAverage(array){
    let total =0;
    for (let i = 0; i < array.length; i++){
        if (!isNumber(array[i])){return false;}
        total += array[i];
    }
    return total/array.length;
}


//Write a function that accepts an array of strings and returns the longest string.
// If there are two strings of equal length it returns the one with the lowest index

//code javier wrote
let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings){
    let longest = '';
    for(let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length){
            longest = arrayOfStrings[i];
        }
    }
}

// code I found online
// function indexOfSmallest(a) {
//     let lowest = 0;
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < a[lowest]) lowest = i;
//     }
//     return a[lowest];
// }
// console.log(indexOfSmallest(["purple","orange","grey"]))