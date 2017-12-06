let buttonMob = document.getElementById('button-mob-menu');
let menu = document.getElementsByClassName('navigation')[0];
buttonMob.onclick = function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};