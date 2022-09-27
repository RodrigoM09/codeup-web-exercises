mapboxgl.accessToken = 'pk.eyJ1IjoicmlnbzkxIiwiYSI6ImNsOGVwbXB0ZTAxZHMzb3E0bTdiN2M2YnMifQ.MVwHK5IAocSxHQUifCCINQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.48527, 29.423017], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});


$('#find').on('click', function (e){
    e.preventDefault()
    let address = $('#weatherIn').val();
    geocode(address, MAPBOX_API_TOKEN).then(function(result){
        map.setCenter(result);
        let markerLngLat = {
            lng: result[0],
            lat: result[1]

        }
        const marker = new mapboxgl.Marker()
            .setLngLat(markerLngLat)
            .addTo(map);
        updateWeather(result[0], result[1])
    });
});

$(function (){
    updateWeather(-98.48527, 29.423017);
});

function updateWeather(lng, lat){
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function(data) {


        $('#currentCity').html(`Current City: ${data.city.name}`)
        $('#day1Head').html(`Date: ${data.list[0].dt_txt} <img class="d-flex ms-5" src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png">`)
        $('#day1').html(`Temperature: ${data.list[0].main.temp} <br><hr> Humidty: ${data.list[0].main.humidity}<br><hr> Wind Speed: ${data.list[0].wind.speed}`);

        $('#day2Head').html(`Date: ${data.list[8].dt_txt} <img class="d-flex ms-5" src="http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png">`)
        $('#day2').html(`Temperature: ${data.list[8].main.temp} <br><hr> Humidty: ${data.list[8].main.humidity}<br><hr> Wind Speed: ${data.list[8].wind.speed}`);

        $('#day3Head').html(`Date: ${data.list[16].dt_txt} <img class="d-flex ms-5" src="http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png">`)
        $('#day3').html(`Temperature: ${data.list[16].main.temp} <br><hr> Humidty: ${data.list[16].main.humidity}<br><hr> Wind Speed: ${data.list[16].wind.speed}`);

        $('#day4Head').html(`Date: ${data.list[24].dt_txt} <img class="d-flex ms-5" src="http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png">`)
        $('#day4').html(`Temperature: ${data.list[24].main.temp} <br><hr> Humidty: ${data.list[24].main.humidity}<br><hr> Wind Speed: ${data.list[24].wind.speed}`);

        $('#day5Head').html(`Date: ${data.list[32].dt_txt}<br><img class="d-flex ms-5" src="http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png">`)
        $('#day5').html(`Temperature: ${data.list[32].main.temp} <br><hr> Humidty: ${data.list[32].main.humidity}<br><hr> Wind Speed: ${data.list[32].wind.speed}`);

    });

}


