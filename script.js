const toggleBtn = document.getElementsByClassName('toggle')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log("works!");
})