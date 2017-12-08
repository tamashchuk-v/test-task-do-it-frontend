let areaButton = $('.area-button');
areaButton.click(function () {
    if (areaButton.hasClass('area-button-active')) {
        areaButton.removeClass('area-button-active')
    } else {
        areaButton.addClass('area-button-active')
    }
});