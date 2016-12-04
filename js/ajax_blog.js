/**
 * Created by HKoehler on 12/1/16.
 */
$(document).ready(function(){
    "use strict";

    // store objects from json in variable for later use
    var blog = $.ajax('data/blog.json');

    // do this once data is received
    blog.done(function(data){

        // log data in console to make sure it's working
        console.log(data);

        // store individual posts in variable for later use
        var entries = '';

        // do this for each object in json
        data.forEach(function (obj) {
            entries +=
                // HTML to go on page
                "<div class='entry'><h2>" + obj.title + " <small>[ " + obj.date + " ]</small></h2><hr>" +
                "<p>" + obj.content + "</p><hr>" +
                "<h6>Categories: " + obj.categories.join(', ') + "</h6></div>"
        });

        // put generate rows into table
        $('#posts').html(entries);
    });



    $('#post').click(function(){
        event.preventDefault();
        var form = $('#postForm');
        var data = JSON.stringify(form.serialize());

        console.log(data);



        //
        //
        // $.ajax({
        //     url: 'data/blog.json',
        //     type: 'POST',
        //     dataType: 'json',
        //     data: data,
        //     success: function(results){
        //         results.push(data);
        //         console.log(results[0], results[1]);
        //     },
        //     error: function () {
        //         console.log('Something went wrong. Fix your code, Halie.')
        //     }
        // });

    })

});