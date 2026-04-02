const menuButton = document.querySelector('header > menu > i');
const menuClosedIcon = document.querySelector('header > menu > i#menuClosedIcon');
const menuOpenedIcon = document.querySelector('header > menu > i#menuOpenedIcon');
const menu = document.querySelector('header > menu > ul');

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && menu.style.display === 'flex') {
        menu.style.display = 'none';
        menuOpenedIcon.style.display = 'none';
        menuClosedIcon.style.display = 'block';
    } else if (menuButton.contains(event.target)) {
        menu.style.display = 'flex';
        menuOpenedIcon.style.display = 'block';
        menuClosedIcon.style.display = 'none';

    }
});