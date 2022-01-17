// window.addEventListener('scroll', reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++){

//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }

const storageType = sessionStorage;
const consentPropertyName = 'jdc-consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopUp = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopUp.classList.add('hidden');
    };

    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup()) {
        consentPopUp.classList.remove('hidden');    
    }
    
};
$(document).ready(function () {
const menu_btn = document.querySelector('.lines-button');
const mobile_menu = document.querySelector('.main');
const dimmed = document.querySelector('.menu-active');
const shut_menu = document.querySelector('.menu-active');

menu_btn.addEventListener('click', function() {
    toggleMenu();
    $('#overlay').show();
    $('.lines-button').addClass('close');
});

dimmed.addEventListener('click', function(){
    toggleMenu();
    $('#overlay').hide();
    $('.lines-button').removeClass('close');
})

function toggleMenu() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      dimmed.classList.toggle('is-active');
}

$('#topbar').scrollupbar();
