const hamburger = document.getElementById('hamburger');
const navToggle = document.getElementById('nav-toggle');
const cross = document.getElementById('cross');
const mobileNav = document.getElementById('mobile-nav');

const handleNavToggleClick = ()=>{
    hamburger.classList.toggle('hide');
    mobileNav.classList.toggle('hide');
    document.body.classList.toggle('lock-scroll');
}

navToggle.addEventListener('click', handleNavToggleClick)
cross.addEventListener('click',handleNavToggleClick)
