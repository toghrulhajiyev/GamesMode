const header = document.querySelector('#header');
const btnContainer = document.querySelector('.btn-container');
btnContainer.addEventListener('click', function(e) {
    e.preventDefault();

    if(!header.classList.contains('activeSideMenu') && !btnContainer.classList.contains('activeBtn')) {
        header.classList.add('activeSideMenu');
        btnContainer.classList.add('activeBtn');
        header.style.transform = "translateX(0)";
        header.style.opacity = 1;
    } else {
        header.classList.remove('activeSideMenu');
        btnContainer.classList.remove('activeBtn');
        header.style.transform = "translateX(-200%)";
        header.style.opacity = 0;
    }
});