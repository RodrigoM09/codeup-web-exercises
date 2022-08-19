let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}
console.log(currentWeather.temp);
console.log(currentWeather.description);

let fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,
    attack: function (opponent){
        console.log(opponent.name + " has " + opponent.hitPoints + " hit points!");
        console.log(this.name + "attacks!");
        let damage = Math.ceil(Math.random() * this.maxDamage);
        opponent.hitPoints -= damage;
        console.log(this.name + " does" + damage + " points of damage")
        console.log(opponent.name + " now has " + opponent.hitPoints + " hit points.");
    }
}

let monster = {
    name: "goblin",
    hitPoints: 8,
    maxDamage: 6
}