var dropdownButton = $('.dropdown__button');
var dropdown = $('.dropdown');
var dropdownList = $('.dropdown__list');
var dropdownText = $('.dropdown__text');
var delta = $('.delta');

dropdownButton.click(function () {
    if (dropdown.hasClass('active')){
        dropdown.removeClass('active');
        dropdownList.css('display','none');
        delta.css('display','none');
        dropdownText.text('Dropdown normal');
    } else {
        dropdown.addClass('active');
        dropdownList.css('display','block');
        delta.css('display','block');
        dropdownText.text('Dropdown active');
    }
});