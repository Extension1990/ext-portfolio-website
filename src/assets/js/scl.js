window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 313) {
        document.getElementById("navbar-header").style.padding = "80px 10px";
        document.getElementById("navbar-brand").style.fontSize = "35px";
    } else if (document.documentElement.scrollTop < 313) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    }
}
