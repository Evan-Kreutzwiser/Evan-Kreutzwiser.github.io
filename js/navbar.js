
function navMenu() {
    const navbar = document.getElementById("navbar");
    if (navbar.className === "") {
        navbar.className = "expand";
    } else {
        navbar.className = "";
    }
}

function closeMenu() {
    navbar.className = "";
}