var marginForm = function () {
    var form = $('.form');
    setTimeout(function () {
        if ($(window).width() >= '992'){
            form.addClass('test');
            var submenu = $('#submenu');
            if (submenu.height() >= 417) {
                form.css('margin-top',submenu.height() - 400)
            }
        }
    },250);
    if (form.hasClass('test')) {
        form.css('margin-top','15px');
        form.removeClass('test');
        console.log('done');
    }
};

$('#aside-item__dropdown-1').click(function () {
    $('#drop_items-1').toggle('fast');
    marginForm();
});
$('#drop_items-2').css('display','block');
$('#aside-item__dropdown-2').click(function () {
    $('#drop_items-2').toggle('fast');
    marginForm();
});
$('#aside-item__dropdown-3').click(function () {
    $('#drop_items-3').toggle('fast');
    marginForm();
});
