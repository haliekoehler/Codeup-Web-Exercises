/**
 * Created by HKoehler on 12/1/16.
 */

$(document).ready(function() {
    "use strict";

    // get data from inventory.json and store in variable
    var inventory = $.ajax("data/inventory.json");

    // do all of this once data is received
    inventory.done(function(data) {

        // make sure info is coming through in console
        console.log("Data returned from server: ");
        console.log(data);

        // store rows in a variable for later use
        var rows = '';

        // do this for each object in json
        data.forEach(function (obj) {
            rows += '<tr>'
                + "<td>" + obj.title + "</td>" +
                "<td>" + obj.quantity + "</td>" +
                "<td>" + obj.price + "</td>" +
                "<td>" + obj.categories + "</td>" +
                "</tr>"
        });

        // put generate rows into table
        $('#insertProducts').html(rows);


        // refresh page
        $('#reset').click(function(){
            location.reload();
        })

    });
});