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

const menu_btn = document.querySelector('.hamburger-box');
const mobile_menu = document.querySelector('.main');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
$('#topbar').scrollupbar();