let  squareColors = document.getElementById('square')

function randomHue() {
    let colors = ["#002942", "#0Ca708", "red", "blue", "green", "black", "orange", "purple"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    squareColors.style.backgroundColor = randomColor;
    alert(randomColor);
}
    theButton.onclick = randomHue;

// let theSquare = document.querySelector('.square'){
//     let theHandler = function(){
//         alert("I am a square " + window.getComputedStyle(document.querySelector(".square"),
//             null).getPropertyValue('background-color'));
//     }
// }
// theSquare.addEventListener('click', theHandler)
// theSquare.addEventListener('click',function (event){
//     console.log(event.target.click);
// })
//
//     let theButton = document.querySelector('button');
//     let buttonClickFunction = function(){
//         document.querySelector('p').innerText = "You Changed Me"
//     }
//
//     theButton.onclick = buttonClickFunction;

//
let formInput = document.getElementById("forInput");
formInput.onkeyup