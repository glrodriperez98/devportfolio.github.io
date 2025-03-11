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

// Highlight active navbar link when scrolling to a section and remove highlight when moving to another
document.addEventListener("DOMContentLoaded", function () {  
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-selectors");

    function changeActiveLink() {
        let fromTop = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 60;
            let sectionHeight = section.offsetHeight;
            let sectionID = section.getAttribute("id");

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));

                let activeLink = document.querySelector(`.nav-selectors[href="#${sectionID}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});
