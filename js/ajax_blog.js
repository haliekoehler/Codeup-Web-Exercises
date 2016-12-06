/**
 * Created by HKoehler on 12/1/16.
 */
$(document).ready(function(){
    "use strict";


    // array from "blog.json" made global
    var posts = [
        {
            "title": "First Blog Post",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "categories": [
                "greek"
            ],
            "date": "January 25, 2015"
        }, {
            "title": "Second Blog Post",
            "content": "Cupcake ipsum dolor sit amet gummies. Cake chocolate sweet ice cream oat cake biscuit bear claw dessert. Jujubes marzipan toffee apple pie pastry dragée jujubes marshmallow. Dragée chocolate gingerbread liquorice chocolate bar jujubes. Sweet chocolate bar jelly-o chocolate cake candy carrot cake cotton candy macaroon marzipan. Sweet roll biscuit sweet gummies topping sesame snaps tootsie roll sugar plum pie. Sweet muffin croissant chocolate cake chupa chups. Donut croissant gummies donut powder ice cream. Chupa chups halvah apple pie topping jelly beans donut candy canes donut. Bonbon cake gummi bears cheesecake tart topping powder liquorice gummi bears.",
            "categories": [
                "family",
                "candy",
                "sweets",
                "sugar"
            ],
            "date": "February 14, 2015"
        }
    ];


    // store individual posts in variable for later use
        var entries = '';



    // do this for each object in array
        posts.forEach(function (obj) {
            entries +=
                // HTML to go on page
                "<div class='entry'><h2>" + obj.title + " <small>[ " + obj.date + " ]</small></h2><hr>" +
                "<p>" + obj.content + "</p><hr>" +
                "<h6>Categories: " + obj.categories.join(', ') + "</h6></div>"
        });


        // put generated rows into table
        $('#posts').html(entries);


    // action for making new blog post
    $('#post').click(function(){
        event.preventDefault();

        var form = $('#postForm');
        var data = JSON.stringify(form.serializeArray());
        var newEntry = {};
        var obj = $.parseJSON(data);

        console.log(data);
        console.log(obj);

        obj.forEach(function(name, value){
            newEntry +=
                name.stringify(value) + ": " + value.stringify(value);

        });

        $('#posts').append(newEntry);
    });


});







        // ------- CODE FOR INTERACTING WITH BLOG.JSON ---- //



    // // store objects from json in variable for later use
    // var blog = $.ajax('data/blog.json');
    //
    // // do this once data is received
    // blog.done(function(data){
    //
    //     // log data in console to make sure it's working
    //     console.log(data);
    //
    //     // store individual posts in variable for later use
    //     var entries = '';
    //
    //     // do this for each object in json
    //     data.forEach(function (obj) {
    //         entries +=
    //             // HTML to go on page
    //             "<div class='entry'><h2>" + obj.title + " <small>[ " + obj.date + " ]</small></h2><hr>" +
    //             "<p>" + obj.content + "</p><hr>" +
    //             "<h6>Categories: " + obj.categories.join(', ') + "</h6></div>"
    //     });
    //
    //     // put generate rows into table
    //     $('#posts').html(entries);
    // });






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



