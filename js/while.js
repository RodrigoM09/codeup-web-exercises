// let number = 1;
// while (number < 65536){
//     number *= 2;
//     console.log(number);
// }


// let number = Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess)
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
//
// } while(guess !== number)
// alert(`Your guess of ${guess} matches the number ${guess}!`);
//

// generate a random number between 50 and 100
//generate another random number between 1 and 5

let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let number = Math.floor(Math.random() * 5) + 1;
    if (number > allCones){
        console.log("We do not have " + number)
        allCones -= allCones
    }else {
        allCones = allCones - number
        console.log(number  + " cones sold")

    }

} while(allCones !== 0)
console.log(`We're sold out!`)

// let allCones =  = Math.floor(Math.random() * 51) + 50;
// do {
//      let conesWanted = Math.floor(Math.random() * 5) + 1;
//      if (conesWanted > allCones){
//          console.log(`Can not sell you ${conesWanted} I only have ${allCones}`);
//      }else{
//          console.log(`${conesWanted} sold...`);
//          allCones = allCones - ConesWanted;
//  }
//  console.log(`${allCones} left`);
//}while (allCones > 0);
//console.log("Yay! I sold them all!")
