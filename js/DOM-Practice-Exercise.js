let  squareColors = document.querySelector("button");

function randomHue() {
    let colors = ["#002942", "#0Ca708", "red", "blue", "green", "black", "orange", "purple"];

    let randomIndex = Math.floor(Math.random() * colors.length);

    let randomColor = colors[randomIndex];

    squareColors.style.backgroundColor = randomColor;
    alert(randomColor);

}

    squareColors.onclick = randomHue;
