// Hide and show nav bar when scrolling to the about page
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("nav-bar");
    let firstSection = document.getElementById("about");

    document.addEventListener("scroll", function () {
        if (window.scrollY > firstSection.clientHeight - 50) {
            navbar.style.top = "0";  // Show navbar
        } else {
            navbar.style.top = "-60px";  // Hide navbar
        }
    });
});
