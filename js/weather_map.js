/**
 * Created by HKoehler on 12/5/16.
 */
"use strict";

var weatherDiv = $('#weatherDiv');



// get current weather data & store in variable
var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
        q: "San Antonio, TX",
        units: "imperial",
        cnt: 3
    });

    // do this once data is received
    weatherData.done(function (data) {

        // console.log for reference
        console.log(data);
        console.log(data.list);

        // put name of city into header
        $('#cityName').text(data.city.name);

        // put number of days into header
        $('#dayCount').text(data.cnt);

        // var date = moment.unix(obj.dt);
        var days = '';

        data.list.forEach(function(obj){
            days +=
                "<div class='dayDiv'>"
                + "<h4>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
                + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
                + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
                + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
                + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
                + "<img class='center-block' src='http://openweathermap.org/img/w/" + obj.weather[0].icon +".png'>"
                + "</div>";

            $('#weatherDiv').html(days);
        });

        // put HTML into target div
        $('#weatherDiv').html(days);



      }); // end of weatherData.done function

// weatherData.done(function(data){
//    console.log(data.list);
//
//     // make a variable for the date
//     // var date = moment.unix(object.dt);
//
//     // make variable for storing HTML
//     var populateForecast = "<div>"
//         // + "<h2>Date: " + date.format("ddd, MM-DD-YYYY") + "</h2>"
//         + "<div><p> High - Low: " + object.temp.max + "/" + object.temp.min + "</p>"
//         + "<p>Conditions: " +object.weather[0].main + "</p>"
//         + "<p>Humidity: " + object.humidity + "</p>"
//         + "<p>Wind Speed: " + object.speed + "</p></div>";
//
//     // empty string that will be filled with populated forecasts
//     var days = '';
//
//     // populateForecast for each object in data.list
//     data.list.forEach(function(obj){
//         days += populateForecast;
//         $('.row').html(populateForecast);
//     })
// });

        // function populate(obj, i, high, low, conditions, humidity, wind, pressure){
        //     return '<div>'
        //         + high + "/" + low
        //         + 'Conditions: ' + conditions
        //         + 'Humidity: ' + humidity
        //         + 'Wind: ' + wind
        //         + 'Pressure: ' + pressure
        // }
        //
        // data.list.forEach(function(obj, i){
        //     var forecast = populate(
        //         object, i,
        //         data.list[i].temp.max,
        //         data.list[i].temp.min,
        //         data.list[i].weather[i].description
        //     )
        // })











