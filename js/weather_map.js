$(function (){

    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        $('#day1Head').append(`Date: ${data.list[0].dt_txt}`)
        $('#day1').append(`Temperature: ${data.list[0].main.temp} <br><hr> Humidty: ${data.list[0].main.humidity}<br><hr> Wind Speed: ${data.list[0].wind.speed}`);
        $('#day2Head').append(`Date: ${data.list[8].dt_txt}`)
        $('#day3Head').append(`Date: ${data.list[16].dt_txt}`)
        $('#day4Head').append(`Date: ${data.list[24].dt_txt}`)
        $('#day5Head').append(`Date: ${data.list[32].dt_txt}`)




        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function(data) {
            // $('#day1').append(`Temperature: ${data.main.temp} <br><hr> Humidty: ${data.main.humidity}<br><hr> Wind Speed: ${data.wind.speed}`);
            // $('#day2').append(`Temperature: ${data.main.temp} <br><hr> Humidty: ${data.main.humidity}<br><hr> Wind Speed: ${data.wind.speed}`);
            // $('#day3').append(`Temperature: ${data.main.temp} <br><hr> Humidty: ${data.main.humidity}<br><hr> Wind Speed: ${data.wind.speed}`);
            // $('#day4').append(`Temperature: ${data.main.temp} <br><hr> Humidty: ${data.main.humidity}<br><hr> Wind Speed: ${data.wind.speed}`);
            // $('#day5').append(`Temperature: ${data.main.temp} <br><hr> Humidty: ${data.main.humidity}<br><hr> Wind Speed: ${data.wind.speed}`);

        });

    });
});