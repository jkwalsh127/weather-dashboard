var config = {
    OPEN_WEATHER_KEY : '1097f0fbe89a0cce275a74f432222784',
  }
var key = config.OPEN_WEATHER_KEY;

var currentDayContainter = document.getElementById('currentDayHeader');
var cityNameHeader = document.getElementById('cityNameHeader');
var searchInput = document.getElementById('search-input');
var searchForm = document.getElementById('searchForm');
// var todaysDate = $('#todaysDate');
var currentTemp = $('#currentTemp');
var currentHumidity = $('#currentHumidity');
var currentWindspeed = $('#currentWindspeed');
var currentUV = $('#currentUV');

var forecastCard1 = $('#forecastCard1');
var forecastCard2 = $('#forecastCard2');
var forecastCard3 = $('#forecastCard3');
var forecastCard4 = $('#forecastCard4');
var forecastCard5 = $('#forecastCard5');

var forecastDate1 = $('#forecastDate1');
var forecastDate2 = $('#forecastDate2');
var forecastDate3 = $('#forecastDate3');
var forecastDate4 = $('#forecastDate4');
var forecastDate5 = $('#forecastDate5');
var forecastIcon1 = $('#forecastIcon1');
var forecastIcon2 = $('#forecastIcon2');
var forecastIcon3 = $('#forecastIcon3');
var forecastIcon4 = $('#forecastIcon4');
var forecastIcon5 = $('#forecastIcon5');
var forecastTemp1 = $('#forecastTemp1');
var forecastTemp2 = $('#forecastTemp2');
var forecastTemp3 = $('#forecastTemp3');
var forecastTemp4 = $('#forecastTemp4');
var forecastTemp5 = $('#forecastTemp5');
var forecastHumidity1 = $('#forecastHumidity1');
var forecastHumidity2 = $('#forecastHumidity2');
var forecastHumidity3 = $('#forecastHumidity3');
var forecastHumidity4 = $('#forecastHumidity4');
var forecastHumidity5 = $('#forecastHumidity5');
forecastDateArray = [forecastDate1, forecastDate2, forecastDate3, forecastDate4, forecastDate5];
forecastIconArray = [forecastIcon1, forecastIcon2, forecastIcon3, forecastDate4, forecastIcon5];
forecastTempArray = [forecastTemp1, forecastTemp2, forecastTemp3, forecastTemp4, forecastTemp5];
forecastHumidityArray = [forecastHumidity1, forecastHumidity2, forecastHumidity3, forecastHumidity4, forecastHumidity5];
forecastCardArray = [forecastCard1, forecastCard2, forecastCard3, forecastCard4, forecastCard5];

var cityName = '';
var temp = '';
var humidity = '';
var windspeed = '';

todaysDate = moment().format("dddd, MMM Do, YYYY");
$('#todaysDate').text(todaysDate);

// function getGeoCoordinates() {
//     var userInput = searchInput.value;
//     // console.log(userInput);

//     // var cityName = localStorage.getItem("userInput");
//     var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput + '&limit=1&appid=' + key;
//     // clear user input from input element
//     searchInput.value = null;
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // console.log(data);
//             // set variables to carry integer values
//             var lon = data[0].lon;
//             var lat = data[0].lat;

//             localStorage.setItem("lat", lat);
//             localStorage.setItem("lon", lon);

//             if (lat !== null) {
//                 getWeather();
//                 getForecast();
//             }
//         })
// };

function getWeather() {

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
                // console.log(data);
                // set variable to carry the 'icon' key value representative of the weather logo
                var iconKey = data.weather[0].icon;
                var iconUrl = "https://openweathermap.org/img/w/" + iconKey + ".png";
                // assign url as source to img element
                $('#weathericon').attr('src', iconUrl);



                cityName = data.name;
                temp =  ' ' + parseInt(((data.main.temp - 273.15) * (9/5) + 32)) + ' °F';
                humidity = ' ' + data.main.humidity + '%';
                windspeed = ' ' + data.wind.speed + ' MPH';

                cityNameHeader.innerHTML = cityName;

                $('#currentTemp').text(temp);
                $('#currentHumidity').text(humidity);
                $('#currentWindspeed').text(windspeed);
            });
};

function getForecast() {

    // receive lat and lon inputs as strings
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    // concatenate lat and lon into the requestUrl to obtain the weather data for that location
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=' + key;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for(var i = 0; i < 5; i++) {

                var futureDate = moment().add((i + 1), 'days').format("ddd, MMM Do");
                var temp =  ' ' + parseInt(((data.daily[i + 1].temp.day - 273.15) * (9/5) + 32)) + ' °F';
                var humidity = ' ' + data.daily[i + 1].humidity + '%';

                forecastDateArray[i].text(futureDate);
                forecastTempArray[i].text('Temperature: ' + temp);
                forecastHumidityArray[i].text('Humidity: ' + humidity);
            }
            var iconKey1 = data.daily[1].weather[0].icon;
            var iconUrl1 = "https://openweathermap.org/img/w/" + iconKey1 + ".png";
            $('#weatherIcon1').attr('src', iconUrl1);
            var iconKey2 = data.daily[2].weather[0].icon;
            var iconUrl2 = "https://openweathermap.org/img/w/" + iconKey2+ ".png";
            $('#weatherIcon2').attr('src', iconUrl2);
            var iconKey3 = data.daily[3].weather[0].icon;
            var iconUrl3 = "https://openweathermap.org/img/w/" + iconKey3 + ".png";
            $('#weatherIcon3').attr('src', iconUrl3);
            var iconKey4 = data.daily[4].weather[0].icon;
            var iconUrl4 = "https://openweathermap.org/img/w/" + iconKey4 + ".png";
            $('#weatherIcon4').attr('src', iconUrl4);
            var iconKey5 = data.daily[5].weather[0].icon;
            var iconUrl5 = "https://openweathermap.org/img/w/" + iconKey5 + ".png";
            $('#weatherIcon5').attr('src', iconUrl5);

            uvIndex = data.current.uvi;
            if (uvIndex < 2.0) {
                $('#uvColorCode').attr('class', 'uvColorCodeLow')
            } else if (2.0 < uvIndex && uvIndex < 7.0) {
                $('#uvColorCode').attr('class', 'uvColorCodeMod')
            } else if (uvIndex > 7.0) {
                $('#uvColorCode').attr('class', 'uvColorCodeHigh')
            }
            $('#currentUV').text(uvIndex);
        });
};

var cityList = document.getElementById("cityList");

var cities = [];

function renderCities() {
    cityList.innerHTML = "";

    for (var i = 0; i < cities.length; i++) {
        var cityIndex = cities[i];
        console.log(cities);    
        console.log(typeof cities);
        console.log(cityIndex);    
        console.log(typeof cityIndex);

        var li = document.createElement("button");
        li.textContent = cityIndex;
        li.setAttribute("data-city", cityIndex);
        cityList.appendChild(li);
    }
}

function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
    }
    renderCities();
};

function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
};

// This event listener stores the city from the users input upon submission
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var cityText = searchInput.value.trim();
    // If search input is empty, exit the function
    if (cityText === "") {
        return;
    }
    // Add new city to the cities array
    cities.push(cityText);

    // Store the list of cities along with the new submission in local storage and then render the updated list
    storeCities();
    renderCities();
    var userInput = searchInput.value;
    // console.log(userInput);

    // var cityName = localStorage.getItem("userInput");
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + userInput + '&limit=1&appid=' + key;
    // clear user input from input element
    searchInput.value = null;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            // set variables to carry integer values
            var lon = data[0].lon;
            var lat = data[0].lat;

            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);

            if (lat !== null) {
                getWeather();
                getForecast();
            }
            // Clear the search input
            searchInput.value = "";
        })
});

// Add a listener to the saved cities so that the user can fetch weather data for previously searched cities
cityList.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element);
    console.log("I was clicked");

    if (element.matches("button") === true) {
        // Get data on city name of the saved city in order to send a new data request
        var dataCity = element.getAttribute("data-city");
        console.log(dataCity);
        var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + dataCity + '&limit=1&appid=' + key;
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                // set variables to carry integer values
                var lon = data[0].lon;
                var lat = data[0].lat;
    
                localStorage.setItem("lat", lat);
                localStorage.setItem("lon", lon);
    
                if (lat !== null) {
                    getWeather();
                    getForecast();
                }
                // Clear the search input
                searchInput.value = "";
            })
    }
});

// Calls function to retrieve data and render it to the page upon load
init();