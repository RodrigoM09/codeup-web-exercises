// let accessTheDom = document.getElementById("dc");
// let showMe = accessTheDom.innerHTML;
// console.log(showMe);
//
// let marvel = document.getElementById("marvel");
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
//
// accessTheDom.innerHTML += ' Animated Universe';
//
// marvel.setAttribute('class', 'hotPink');
//
// let hotPinks = document.getElementsByClassName('hotPink');
//
// for (let i = 0; i < hotPinks.length; i++){
//     hotPinks[0].style.color = 'red';
// }
//
// hotPinks.forEach(function (element){
//     element.style.color ='green'
// })

let submitButton = document.getElementById('colorSubmission');
submitButton.onclick = function() {
    let colorInput = document.getElementById('colorPreference');
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
}

let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
    transformButton.onclick = function (){
        let theHulk = document.getElementById("hulk");
        let hulkState = theHulk.dataset.state;
        let hulkStrength = theHulk.dataset.strength;
        let hulkIntelligence = theHulk.dataset.intelligence;
        if (hulkState === "hulk") {
            theHulk.dataset.state = "Bruce Banner";
        } else {
            theHulk.dataset.state = "hulk";
        }
        theHulk.innerText = `The Hulk is in ${hulkState} state. `
    }