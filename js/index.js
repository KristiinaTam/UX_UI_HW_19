console.log("bananas")
//i hate this 
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    // Toggle navigation menu visibility when hamburger menu button is clicked
    hamburgerBtn.addEventListener('click', function () {
        // Toggle hamburger button animation
        this.classList.toggle('animate');
        
        // Toggle navigation menu animation
        navMenu.classList.toggle('animate');
    });
});