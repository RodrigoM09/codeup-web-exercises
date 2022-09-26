$(function (){

    // $.get("https://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    //
    // });
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log("current weather")
        console.log(data);
        console.log(data.city.population)
        console.log(data.list[0].visibility);
        console.log(data.list[0])
        console.log(data.list[0].dt_txt)
        // data.list.forEach(forecast =>{
        //     console.log(forecast)
        // });
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function(data) {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.wind.speed);


        });

    });
});