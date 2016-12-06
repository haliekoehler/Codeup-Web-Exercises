/**
 * Created by HKoehler on 12/5/16.
 */
"use strict";

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

    data.list.forEach(function (obj) {
        days +=
            "<div class='dayDiv'>"
            + "<h4>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
            + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
            + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
            + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
            + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
            + "<img class='center-block' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"
            + "</div>";

        $('#weatherDiv').html(days);
    });

    // put HTML into target div
    $('#weatherDiv').html(days);


}); // end of weatherData.done function


$('#latLongBtn').click(function () {

    var newLat = $('#lat').val();
    var newLong = $('#long').val();

    console.log(newLat);
    console.log(newLong);

    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
        lat: newLat,
        lon: newLong,
        units: "imperial",
        cnt: 3
    }).done(function (data) {

        // console.log for reference
        console.log(data);
        console.log(data.list);

        // put name of city into header
        $('#cityName').text(data.city.name);

        // put number of days into header
        $('#dayCount').text(data.cnt);

        // var date = moment.unix(obj.dt);
        var days = '';

        data.list.forEach(function (obj) {
            days +=
                "<div class='dayDiv'>"
                + "<h4>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
                + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
                + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
                + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
                + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
                + "<img class='center-block' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"
                + "</div>";

            $('#weatherDiv').html(days);
        });

        // put HTML into target div
        $('#weatherDiv').html(days);
    });

});

    $('#cityStateBtn').click(function () {

        var newCity = $('#cityState').val();

    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
            q: newCity,
            units: "imperial",
            cnt: 3
        }).done(function (data) {

            // put name of city into header
            $('#cityName').text(data.city.name);

            // put number of days into header
            $('#dayCount').text(data.cnt);

            // var date = moment.unix(obj.dt);
            var days = '';

            data.list.forEach(function (obj) {
                days +=
                    "<div class='dayDiv'>"
                    + "<h4>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
                    + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
                    + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
                    + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
                    + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
                    + "<img class='center-block' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"
                    + "</div>";

                $('#weatherDiv').html(days);
            });

            // put HTML into target div
            $('#weatherDiv').html(days);

            // clear input value
            $('#cityState').val('')
        });

    });








