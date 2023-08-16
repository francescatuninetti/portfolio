const menuIcon = document.querySelector('#menu-icon');
const menuItems = document.querySelector('.menu-items');
const exitMenu = document.querySelector('.exit');
const aboutMe = document.getElementById('aboutMe');
const myProjects = document.getElementById('myProjects');
const logo = document.getElementById('logo');


exitMenu.addEventListener('click', () => {
    menuItems.classList.add('displayNone');
    menuIcon.style.display = 'flex';
    exitMenu.classList.add('displayNone');
});

menuIcon.addEventListener('click', () => {
    menuItems.classList.remove('displayNone');
    menuIcon.classList.remove('flex');
    menuIcon.style.display = 'none';
    exitMenu.classList.remove('displayNone');
});

document.addEventListener("DOMContentLoaded", function() {
    let textAboutMe = 'aboutMe = francesca.describe() ';
    let textMyProjects = 'myProjects = francesca.projects() ';
    let textLogo = 'FRANCESCA( ) '
    let i = 0;

    logo.addEventListener('mouseover', function() {
        i = 0; // Reimposta l'indice per l'animazione
        animateText(textLogo, logo);
    });

    logo.addEventListener('mouseout', function() {
        logo.textContent = 'F() '
    });

    aboutMe.addEventListener('mouseover', function() {
        i = 0; // Reimposta l'indice per l'animazione
        animateText(textAboutMe, aboutMe);
    });

    myProjects.addEventListener('mouseover', function() {
        i = 0; // Reimposta l'indice per l'animazione
        animateText(textMyProjects, myProjects);
    });

    aboutMe.addEventListener('mouseout', function() {
        aboutMe.textContent = 'aboutMe';
    });

    myProjects.addEventListener('mouseout', function() {
        myProjects.textContent = 'myProjects';
    });

    function animateText(text, element) {
        if (i < text.length) {
            element.textContent = text.substring(0, i++);
            requestAnimationFrame(function() {
                animateText(text, element);
            });
        }
    }
});
