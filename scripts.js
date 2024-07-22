// nav bar
document.addEventListener("DOMContentLoaded", function() {
    console.log(window.location.pathname);
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (currentPage == "") {
            console.log(currentPage);
            navLinks[0].classList.add('active');
            return;
        } 
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});