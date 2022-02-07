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

// window.onload = () => {
//    const consentPopUp = document.getElementById('consent-popup');
//    const acceptBtn = document.getElementById('accept');

//    const acceptFn = event => {
//        saveToStorage(storageType);
//        consentPopUp.classList.add('hidden');
//    };

//    acceptBtn.addEventListener('click', acceptFn);

//    if (shouldShowPopup(storageType)) {
//        consentPopUp.classList.remove('hidden');
//    }
// }


// function noscroll(){
//     window.scrollTo(0,0);

// }

// window.addEventListener("scroll", noscroll);  

const storageType = localStorage;
const consentPropertyName = 'jdc-consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);



window.onload = () => {
    const consentPopUp = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept');
    document.getElementById("h").style.overflow = "auto";

    const acceptFn = event => {
        
        saveToStorage(storageType);
        

        consentPopUp.classList.add('hidden');
        //To stop scrolling
        // document.getElementById("h").style.overflow = "auto";
    };

    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup()) {
        consentPopUp.classList.remove('hidden'); 
        document.getElementById("h").style.overflow = "hidden";
        
    } else {
        document.getElementById("h").style.overflow = "scroll";
    }


    
};
//Sidebar Button
    const menu_btn = document.querySelector('.lines-button');
    const mobile_menu = document.querySelector('.main');
    const dimmed = document.querySelector('.menu-active');
    const shut_menu = document.querySelector('.menu-active');

    menu_btn.addEventListener('click', function() {
        toggleMenu();
        $('#overlay').show();
        $('.lines-button').addClass('close');
        document.getElementById("h").style.overflow = "hidden";
    });

    dimmed.addEventListener('click', function(){
        toggleMenu();
        $('#overlay').hide();
        $('.lines-button').removeClass('close');
        document.getElementById("h").style.overflow = "scroll";
    })

function toggleMenu() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      dimmed.classList.toggle('is-active');
}

$('#topbar').scrollupbar();
