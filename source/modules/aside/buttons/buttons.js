var areaButton = $('.area-button');
var asideItemDrag = $('.aside-item__drag');
areaButton.click(function () {
    if (areaButton.hasClass('area-button-active')) {
        areaButton.removeClass('area-button-active')
        asideItemDrag.fadeOut('fast');
    } else {
        areaButton.addClass('area-button-active')
        asideItemDrag.fadeIn('fast');
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
