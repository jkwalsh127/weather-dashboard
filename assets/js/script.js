var currentDayContainter = document.getElementById('currentDayContainer');

// var cityName = 

function getGeoCoordinates() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=50508f792fb6351a821be7b026bc4041';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            var cityName = document.createElement('h3');
            var lon = data[0].lon;
            var lat = data[0].lat;

            cityName.textContent = data;
            console.log(lat);
            console.log(lon);
            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);

            currentDayContainter.append("lat: " + lat);
            currentDayContainter.append("lon: " + lon);
            
         })
};


getGeoCoordinates();

function getWeather() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=50508f792fb6351a821be7b026bc4041';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                // var cityName = document.createElement('h3');
                // var temperature = document.createElement('h4');
                // var humidity = document.createElement('h4'); 
                // var windSpeed = document.createElement('h4'); 
                var uvIndex = document.createElement('h4'); 

                // cityName.textContent = data[i].name;
                // temperature.textContent = data[i].name;
                // humidity.textContent = data[i].name;
                // windSpeed.textContent = data[i].name;
                uvIndex.textContent = data;

                console.log(data.coord.lat);
                console.log(data.coord.lon);

                // currentDayContainter.append(uvIndex);
            });
};

getWeather();