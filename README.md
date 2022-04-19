# Weather Dashboard

|   Languages/Libraries/APIs   | Used |
| ----------- | ----------- |
| HTML     |    ✅    |
| CSS  |    ✅     |
| JavaScript  |    ✅    |
| jQuery  |    ✅    |
| Moment.js  |    ✅    |
| OpenWeatherMap  |    ✅    |

## Usage

Click <a href="https://jkwalsh127.github.io/weather-dashboard/" target="_blank">**here**</a> to check out the deployed weather app!

## Description

This project is a web app that provides weather data for user-requested cities. Javascript and jQuery is used to accepts user input, save these inputs to local storage, and maintain a list of previously searched cities whose items can be clicked to reload data for that search. The OpenWeatherMap and Moment.js APIs are used to get the date and weather information for the user input, as well as the same information for a five day forecast. The name of the city that a user submits is sent to the OpenWeatherMap API in order to retrieve the latitude and longitude of the requested city, which is then passed into requests for the same API that seperately fetches current and forecast data. jQuery and for loops pass this data to be appended to the page.

### Workflow

1. Initiate fetch requests to get geocoordinates
2. Initiate fetch requests to use geocoordinates to retrieve current weather data
3. Initiate fetch requests to use geocoordinates to retrieve forecast weather data
4. Format the HTML page to append the desired data and present it cleanly
5. Use Moment.js to add dates to the current weather data as well as each of the forecast days
6. Create submission form to pass user input through the request functions
7. Add inputs into an array that is stored locally
8. Render the list of stored cities upon new searches as well as page reloads

### App demonstration
![gif demonstration of the app](./assets/images/weather-dashboard-readme-gif.gif)

### Collaborators

Just myself! Get in touch with me:

email: jkwalsh127@gmail.com

linkedIn: https://www.linkedin.com/in/jake--walsh/

#### Credits

Staff at UC Berkeley Extension full-stack coding bootcamp

#### Liscense 

MIT

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.