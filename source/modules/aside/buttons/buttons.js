var areaButton = $('.area-button');
areaButton.click(function () {
    if (areaButton.hasClass('area-button-active')) {
        areaButton.removeClass('area-button-active')
    } else {
        areaButton.addClass('area-button-active')
    }
});



(function() {
    $("#range").slider({
        range: "min",
        min: 0,
        max: 100,
        value: 30,
    });
}).call(this);


$(function() {
    $("#range2").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#range2" ).slider( "values", 0 ) +
        " - $" + $( "#range2" ).slider( "values", 1 ) );
});


// (function() {
//     $("#range2").slider({
//         range: "min",
//         min: 0,
//         max: 100,
//         values: [ 10, 25 ]
//     });
// }).call(this);
