let oddNumber;
while(true){
     oddNumber = prompt("Enter an odd number between 1 and 50");
    if (oddNumber <=50 && oddNumber >= 1 && oddNumber % 2 === 1){
        console.log("Number to skip is: " + oddNumber);
        console.log(" ");
        break;
    }
}
for(let i = 1; i <= 50; i+=2){
    if (oddNumber == i){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number " + i);
}