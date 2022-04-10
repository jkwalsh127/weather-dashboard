var key = config.OPEN_WEATHER_KEY;

var currentDayContainter = document.getElementById('currentDayHeader');
var cityNameHeader = document.getElementById('cityNameHeader');
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var currentTemp = $('#currentTemp');
var currentHumidity = $('#currentHumidity');
var currentWindspeed = $('#currentWindspeed');
var currentUV = $('#currentUV');

var cityName = '';
var temp = '';
var humidity = '';
var windspeed = '';

searchBtn.addEventListener("click", getGeoCoordinates);


// function grabCity() {
//     localStorage.setItem("userInput", userInput);
//     console.log(userInput);
//     getGeoCoordinates();
// };
function getGeoCoordinates() {
    var userInput = searchInput.value;
    console.log(userInput);

    // var cityName = localStorage.getItem("userInput");
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput + '&limit=1&appid=' + key;
    // clear user input from input element
    searchInput.value = null;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // set variables to carry integer values
            var lon = data[0].lon;
            var lat = data[0].lat;

            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);

            if (lat !== null) {
                getWeather();
            }
    })
};


// getGeoCoordinates();


function getWeather() {
    // cityName.innerHTML = '';
    // temp.innerHTML = '';
    // humidity.innerHTML = '';
    // windspeed.innerHTML = '';
    // cityNameHeader.innerHTML = '';
    // currentTemp.append(temp);
    // currentHumidity.append(humidity);
    // currentWindspeed.append(windspeed);
    // console.log(temp);


    // receive lat and lon inputs as strings
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    // concatenate lat and lon into the requestUrl to obtain the weather data for that location
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data);
                // set variable to carry the 'icon' key value representative of the weather logo
                var iconKey = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconKey + ".png";
                // assign url as source to img element
                $('#weathericon').attr('src', iconUrl);



                cityName = data.name;
                temp =  ' ' + parseInt(((data.main.temp - 273.15) * (9/5) + 32)) + ' °F';
                humidity = ' ' + data.main.humidity + '%';
                windspeed = ' ' + data.wind.speed + ' MPH';
                console.log(parseInt(temp));
                console.log(Math.floor(temp));
                tempRounded = Math.floor(parseInt(temp));
                console.log(tempRounded);


                cityNameHeader.innerHTML = cityName;

                $('#currentTemp').text(temp);
                $('#currentHumidity').text(humidity);
                $('#currentWindspeed').text(windspeed);
            });
};

getForecast();

function getForecast() {
    // receive lat and lon inputs as strings
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    // concatenate lat and lon into the requestUrl to obtain the weather data for that location
    var requestUrl = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + lat + '&lon=' + lon + '&appid=' + key;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data);
        });
};