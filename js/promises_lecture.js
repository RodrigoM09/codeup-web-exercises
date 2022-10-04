//AJAX request with jQuery
$.get("../data/murals.json", function(data){
    console.log(data)
});

// Fetch API
fetch("../data/murals.json").then(function(response){
    return response.json();
}).then(function (data){
    console.log(data);
});
// abbreviated version of above ------------------------------------------------->
fetch("../data/murals.json").then(resp => resp.json()).then(data =>
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


const myFetchPromise = fetch("../data/murals.json").then(response =>{
    console.log(response.status);
    console.log(response.headers);
    console.log(response.url);
    return response.json();
}
    ).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work!")).finally(()=> console.log("Im going to happen no matter what"));
console.log(myFetchPromise);

//-----FETCHES INFORMATION FROM MY GITHUB AND LOGS AN OBJECT-------------------------------->
fetch('https://api.github.com/users/rodrigoM09', {
    headers: {
        'Authorization': `token ${GITHUB_PROMISES_TOKEN}`
    }
}).then(response => response.json())
    .then(events => console.log(events))
    .catch (error => console.error(error));


// ------FETCHES INFORMATION FROM CITY OF CHICAGO JSON AND LOGS IT AS AN OBJECT--------------->
const trafficCrashesRequest = fetch('https://data.cityofchicago.org/resource/85ca-t3if.json');
const serviceRequests = fetch("https://data.cityofchicago.org/resource/v6vf-nfxy.json")

Promise.all([trafficCrashesRequest, serviceRequests]).then(function (responses){
    return Promise.all(responses.map(function(response){
        return response.json();
    }));
}).then(function (data){console.log(data)})
    .catch(function (error){
        console.log(error);
    });

