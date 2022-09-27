$(function (){

    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data)

        $('#currentCity').append(`${data.city.name}`)
        $('#day1Head').append(`Date: ${data.list[0].dt_txt}`)
        $('#day1').append(`Temperature: ${data.list[0].main.temp} <br><hr> Humidty: ${data.list[0].main.humidity}<br><hr> Wind Speed: ${data.list[0].wind.speed}`);
        $('#day2Head').append(`Date: ${data.list[8].dt_txt}`)
        $('#day2').append(`Temperature: ${data.list[8].main.temp} <br><hr> Humidty: ${data.list[8].main.humidity}<br><hr> Wind Speed: ${data.list[8].wind.speed}`);
        $('#day3Head').append(`Date: ${data.list[16].dt_txt}`)
        $('#day3').append(`Temperature: ${data.list[16].main.temp} <br><hr> Humidty: ${data.list[16].main.humidity}<br><hr> Wind Speed: ${data.list[16].wind.speed}`);
        $('#day4Head').append(`Date: ${data.list[24].dt_txt}`)
        $('#day4').append(`Temperature: ${data.list[24].main.temp} <br><hr> Humidty: ${data.list[24].main.humidity}<br><hr> Wind Speed: ${data.list[24].wind.speed}`);
        $('#day5Head').append(`Date: ${data.list[32].dt_txt}`)
        $('#day5').append(`Temperature: ${data.list[32].main.temp} <br><hr> Humidty: ${data.list[32].main.humidity}<br><hr> Wind Speed: ${data.list[32].wind.speed}`);




        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function(data) {

        });

    });
});