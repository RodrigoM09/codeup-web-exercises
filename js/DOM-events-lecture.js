// The three steps of event handling

//1. get a reference to the element that will trigger the event.
let theButton = document.querySelector("button");

// 2. Write the function that will be triggered by the
// event.
// A function is a set of instructions  this kind of function
// that is triggered by an event is called an event handler
// or also a callback.
// The function contains the instructions that will run when the event is triggered
function eventHandler(){
    alert("you have clicked me");
}

// 3. register the handler
// theButton.addEventListener('click', eventHandler);

theButton.onclick = eventHandler;

// advanced way all in ome.
// document.querySelector("button").addEventListener
// ('click', function (){
//     alert ('You clicked me!')
// });

