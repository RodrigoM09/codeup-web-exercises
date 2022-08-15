let decision = confirm("Are you sure you want to leave this page?");

// if (decision) {
//     alert("Ok closing the page.")
// }else{
//     alert("Ok,keeping page open.")
// }

//(decision)?alert("Closing Page"):alert("Keeping page open.");

// let number = prompt("Enter a number")
//
// function divisibleByFive(number){
//     if (number % 5 === 0 && number !== null && number !== "") {
//         alert("That number s divisible by five.");
//     }else{
//         alert("That number is not divisible by 5");
//     }
// }
// divisibleByFive(prompt("Enter a number:"));

// written as a ternary operator.
// function divisibleByFive(number){
// number % 5 === 0 ? alert("that number is divisible by 5") :
// alert("That number is not divisible by 5");
// divisibleByFive(prompt("Enter a number:"));


// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP!")
//     }
// }
// alertMVPCustomer(1001);

function isMvp(purchaseTotal){
    return purchaseTotal > 1000;
}
let customer1purchase = 1001;

if (isMvp(customer1purchase)){
    alert("MVP!")
}

