// /*** Created by HKoehler on 12/5/16.*/

"use strict";


// ---- DEFAULT: San Antonio Weather Data ------------------------------//
var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
    q: "San Antonio, TX",
    units: "imperial",
    cnt: 3
});

// ----- DEFAULT: Weather Data .done Function ----------------------------------//
weatherData.done(function (data) {

    // console.log for reference
    console.log(data);
    console.log(data.list);

    // put name of city into header
    $('#cityName').text(data.city.name);

    // put number of days into header
    $('#dayCount').text(data.cnt);

    // do this for each day
    var days = '';

    data.list.forEach(function (obj) {
        days +=
            "<div class='dayDiv'>"
            + "<h4 class='dateText'>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
            + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
            + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
            + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
            + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
            + "<img class='icon' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"
            + "</div>";

        $('#weatherDiv').html(days);
    });


    // data.list.forEach(function (obj) {
    //     var day = "<div class='dayDiv'>"
    //         + "<h4>" + moment.unix(obj.dt).format("ddd, MMM-DD-YYYY") + "</h4>"
    //         + "<p><strong>High:</strong> " + Math.round(obj.temp.max) + "&deg" + " /// " + "<strong>Low:</strong> " + Math.round(obj.temp.min) + "&deg" + "</p>"
    //         + "<p><strong>Conditions:</strong> " + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
    //         + "<p><strong>Humidity:</strong> " + obj.humidity + "</p>"
    //         + "<p><strong>Pressure:</strong> " + obj.pressure + "</p>"
    //         + "<img class='center-block' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"
    //         + "</div>";
    //
    //     // put HTML into target div
    //     $('#weatherDiv').append(day);


}); // -------- end of weatherData.done function

// ---- LAT/LONG BUTTON FUNCTION ----------------------------------- //
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
    });

}); //end of latLongBtn click function

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

}); // end of cityStateBtn click function

// ----- MAP OPTIONS ----------------------------------------------------//
var mapOptions = {
    // ZOOM LEVEL
    zoom: 5,
    // DEFAULT CENTER [SA,TX]
    center: {
        lat: 29.42412,
        lng: -98.493629
    }
    // // SCROLLWHEEL OFF
    // scrollwheel: false,
};


// ---- RENDER MAP -----------------------------------------------------//
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


// ---- DEFAULT: CREATE MARKER ---------------------//
var marker = new google.maps.Marker({
    position: {
        lat: 29.42412,
        lng: -98.493629
    },
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true
});

google.maps.event.addListener(marker, 'dragend', function(event) {
    var dragLat = marker.getPosition().lat();
    var dragLng = marker.getPosition().lng();

    console.log(dragLat);
    console.log(dragLng);

    var updateFromMap = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
        lat: dragLat,
        lng: dragLng,
        units: "imperial",
        cnt: 3
    });

    updateFromMap.done(function (data) {

        // put name of city into header
        $('#cityName').html("New Location" + (data.city.coord.lat) + " / " + (data.city.coord.lng));

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
    });
});




