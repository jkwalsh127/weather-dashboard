var currentDayContainter = document.getElementById('currentDayContainer');

// var cityName = 

function getGeoCoordinates() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=50508f792fb6351a821be7b026bc4041';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            // set variables to carry integer values
            var lon = data[0].lon;
            var lat = data[0].lat;

            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);

            currentDayContainter.append("lat: " + lat);
            currentDayContainter.append("lon: " + lon);
            if (lat !== null) {
                getWeather();
            }
    })
};


getGeoCoordinates();


function getWeather() {
    // receive lat and lon inputs as strings
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    // concatenate lat and lon into the requestUrl to obtain the weather data for that location
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=50508f792fb6351a821be7b026bc4041';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

                console.log(data.wind.speed);
                // set variable to carry the 'icon' key value representative of the weather logo as a string
                var iconKey = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconKey + ".png";
                // assign url as source to img element
                $('#weathericon').attr('src', iconUrl);

            });
};



