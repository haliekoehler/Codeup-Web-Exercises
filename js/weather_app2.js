'use strict';

// ----- MAP OPTIONS ----------------------------------------------------//
var mapOptions = {
    // ZOOM LEVEL
    zoom: 4,
    // DEFAULT CENTER [SA,TX]
    center: {
        lat: 29.42412,
        lng: -98.493629
    },
    scrollwheel: false,
    mapTypeId: 'terrain',
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    scaleControl: true,
    streetViewControl: false,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: false,
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


// ---- DEFAULT: San Antonio Weather Data ------------------------------//
var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
    q: "San Antonio, TX",
    units: "imperial",
    cnt: 3
});

// ----- DEFAULT: Weather Data .done Function ----------------------------------//
weatherData.done(function (data) {

    // put name of city into header
    $('#cityName').text(data.city.name);

    // put number of days into header
    $('#dayCount').text(data.cnt);

    // do this for each day
    var days = '';

    data.list.forEach(function (obj) {
        days +=
            "<div class='dayDiv'>"
            + "<p class='dateText' id='weekday'>" + moment.unix(obj.dt).format("dddd") + "</p>"
            + "<p class='dateText' id='date'>" + moment.unix(obj.dt).format("MMM-DD-YYYY") + "</p>"
            + "<p id='highLow'>" + "<span id='high'>" + Math.round(obj.temp.max) + "&deg" +"</span><span id='low'>" + Math.round(obj.temp.min) + "&deg" + "</span></p>"
            + "<img id='icon' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"

            + "<p id='conditions'>" + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
            + "<p id='humidity'><strong>Humidity:</strong> " + obj.humidity + "</p>"
            // + "<p id='pressure'><strong>Pressure:</strong> " + obj.pressure + "</p>"
            + "</div>";

        $('#forecastDiv').html(days);
    });
}); // -------- end of weatherData.done function


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
                + "<p class='dateText' id='weekday'>" + moment.unix(obj.dt).format("dddd") + "</p>"
                + "<p class='dateText' id='date'>" + moment.unix(obj.dt).format("MMM-DD-YYYY") + "</p>"
                + "<p id='highLow'>" + "<span id='high'>" + Math.round(obj.temp.max) + "&deg" +"</span><span id='low'>" + Math.round(obj.temp.min) + "&deg" + "</span></p>"
                + "<img id='icon' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"

                + "<p id='conditions'>" + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
                + "<p id='humidity'><strong>Humidity:</strong> " + obj.humidity + "</p>"
                // + "<p id='pressure'><strong>Pressure:</strong> " + obj.pressure + "</p>"
                + "</div>";

            $('#forecastDiv').html(days);
        });

        // clear input value
        $('#cityState').val('')
    });

}); // end of cityStateBtn click function

google.maps.event.addListener(marker, 'dragend', function(event) {
    // var dragLat = marker.getPosition().lat();
    // var dragLng = marker.getPosition().lng();

    var dragLat = event.latLng.lat().toFixed(3);
    var dragLng = event.latLng.lng().toFixed(3);

    console.log(dragLat);
    console.log(dragLng);

    var updateFromMap = $.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + dragLat + "&lon=" + dragLng + "&cnt=3", {
        APPID: "1aa73ecf55c9a516cfc7ffeb4fb3613f",
        // lat: dragLat,
        // lng: dragLng,
        units: "imperial",
        // cnt: 3
    });

    updateFromMap.done(function (data) {

        // put name of city into header
        $('#cityName').text(data.city.name);

        var days = '';

        data.list.forEach(function (obj) {
            days +=
                "<div class='dayDiv'>"
                + "<p class='dateText' id='weekday'>" + moment.unix(obj.dt).format("dddd") + "</p>"
                + "<p class='dateText' id='date'>" + moment.unix(obj.dt).format("MMM-DD-YYYY") + "</p>"
                + "<p id='highLow'>" + "<span id='high'>" + Math.round(obj.temp.max) + "&deg" +"</span><span id='low'>" + Math.round(obj.temp.min) + "&deg" + "</span></p>"
                + "<img id='icon' src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'>"

                + "<p id='conditions'>" + obj.weather[0].main + " ( " + obj.weather[0].description + " )</p>"
                + "<p id='humidity'><strong>Humidity:</strong> " + obj.humidity + "</p>"
                // + "<p id='pressure'><strong>Pressure:</strong> " + obj.pressure + "</p>"
                + "</div>";

            $('#forecastDiv').html(days);
        });
    });
});
