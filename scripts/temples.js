// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#last-modification').textContent = document.lastModified;

// menubutton.addEventListener('click', () => { menuitems.classList.toggle('#open');});

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);