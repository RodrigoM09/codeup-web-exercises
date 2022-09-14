let accessTheDom = document.getElementById("dc");
let showMe = accessTheDom.innerHTML;
console.log(showMe);

let marvel = document.getElementById("marvel");
let preference = "dc";

let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
console.log(output);


accessTheDom.innerHTML += ' Animated Universe';

marvel.setAttribute('class', 'hotPink')