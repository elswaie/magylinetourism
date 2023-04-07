
let searchbtn = document.querySelector("#search-btn")
let searchform = document.querySelector(".search-form")
let loginform = document.querySelector(".login-form")
let menubar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")

function showbar() {
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
}
function showform() {
    loginform.classList.add("active")
}
function hideform() {
    loginform.classList.remove("active")
}
function showmenu() {
    menubar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}


////// home slide show ///////////////////////////
var swiper = new Swiper(".home-slider", {
    loop: true,
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

//////////////// navbar scroll //////////////////////

/*
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 500) {
        header.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled');
    }
})
*/

//////////////// Reviews slider //////////////////////

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInercation: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

//////////////// brands slider //////////////////////

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInercation: false,
    },
    breakpoints: {
        440: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});