var nav = document.getElementById("navfile");

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        nav.style.background = "darkgray";
    } else {
        nav.style.background = "transparent";
    }
}