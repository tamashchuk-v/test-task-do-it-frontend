var close = $('div[id^="close"]');
close.click(function () {
    var idElement = $(this).attr('id');
    $('#body-' + idElement.substr(-1)).fadeOut('fast');
});