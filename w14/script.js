const p = document.querySelector('.menu-btn');



p.addEventListener('click', A());

function A(){
    const mainMenu = document.querySelector('.main_nav .main_menu');
    console.log('main_Menu', mainMenu);
    mainMenu.classList.toggle('show');
}