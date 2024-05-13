//navigation bar and menu icon
let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.naviga');

menu.onclick = () => {
    menu.innerHTML = menu.innerHTML == '<ion-icon name="menu-outline"></ion-icon>' ? '<ion-icon name="close-outline"></ion-icon>' : '<ion-icon name="menu-outline"></ion-icon>';
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
}

let header = document.querySelector('header');
window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
}

menu.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
navbar.classList.remove('active');

//scroll ,left and right animation
ScrollReveal({
    distance:'80px',
    duration :2000,
    delay:200,
});

ScrollReveal().reveal('.homecontent, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .containers,.contacts form ',{origin: 'button'});
ScrollReveal().reveal('.homecontent h1, about-img',{origin: 'left'});
ScrollReveal().reveal('.homecontent p,.about-content',{origin: 'right'});
