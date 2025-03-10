<script>
    document.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        let firstSection = document.getElementById("section");

        if (window.scrollY > firstSection.clientHeight - 50) {
            navbar.classList.remove("hidden-nav");  // Show navbar
        } else {
            navbar.classList.add("hidden-nav");  // Hide navbar
        }
    });
</script>
