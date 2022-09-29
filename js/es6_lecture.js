// const Test = {
//     name: "Rodrigo",
//     old
//     output(){
//         console.log("Does this work?");
//     }
// }
//
// Test.output();

let listItems = document.getElementById('li');

for ( let listItem of listItems){
    console.log(listItem);
}

console.log(document.getElementsByTagName('ul')[0]);

document.getElementsByTagName('li')[2].nextElementSibling.innerHTML = "Change anything, the DOM belongs to you";