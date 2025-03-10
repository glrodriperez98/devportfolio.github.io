// Hide and show nav bar when scrolling to the about page
document.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav-bar");
        let firstSection = document.getElementById("about");

        if (window.scrollY > firstSection.clientHeight - 50) {
            navbar.classList.remove("hidden-nav");  // Show navbar
        } else {
            navbar.classList.add("hidden-nav");  // Hide navbar
        }
    });
