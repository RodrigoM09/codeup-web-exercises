//AJAX request with jQuery
$.get("data/murals.json", function(data){
    console.log(data)
});

// Fetch API
fetch("data/murals.json").then(function(response){
    return response.json();
}).then(function (data){
    console.log(data);
});
// abbreviated version of above ------------------------------------------------->
fetch("data/murals.json").then(resp => resp.json()).then(data =>
console.log(data))

// Callback: a function passed as an argument to another function
// it can run after another function has finished running

function sayHello(greeting, name){
    greeting = `${greeting}, ${name}`;
    displayOutput(greeting)
}
sayHello("Hola", "Rodrigo");

function displayOutput(output){
    $("#output").html(output);
}

