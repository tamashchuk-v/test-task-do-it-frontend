var buttonMob = document.getElementById('button-mob-menu');
var menu = document.getElementsByClassName('navigation')[0];
buttonMob.onclick = function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};