const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

// loading animation
window.addEventListener('load', (event) => {
    bind1('.loading').style.display = "none"
    bind1('body').classList.remove('isLoading')
});

// Handle nav
// const toggleNavMobile = () => {
//     bind1('.soft-menu').classList.toggle('open')
//     bind1('.soft-menu__list').classList.toggle('open')
// }

// bind2('.soft-menu__item').forEach((element) => {
//   element.onclick = () => {
//     toggleNavMobile()
//   }
// })

// SWIPER
var swiper4 = new Swiper(".section-4-swiper", {
    // slidesPerView: 1,
    // Set the index of the active slide to 1
    activeIndex: 1,
    slideWidth: 200,
    // centeredSlides: true,
    spaceBetween: 30,
    // auto
    autoplay: true,
    slideActiveClass: 'swiper-slide-active',
    slideClass: 'swiper-slide',
    // loopAdditionalSlides: 1,
    breakpoints: {
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    },
    loop: true,
    loopedSlides: 50,
    on: {
        // slideChange: function () {
        //     resizeThePromotionSwiper()
        // },
    },
});

var swiper6 = new Swiper(".section-6-swiper", {
    breakpoints: {
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    },
    // centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-6-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".section-6-arrow-right",
        prevEl: ".section-6-arrow-left",
    },
});

var swiper7 = new Swiper(".section-7-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".section-7-next",
        prevEl: ".section-7-arrow-left",
    },
    loop: true,
});

var swiper8 = new Swiper(".section-8-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-8-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".section-8-arrow-right",
        prevEl: ".section-8-arrow-left",
    },
});

// SECTION 3
var swiper3 = new Swiper(".section-3-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".section-3-infor-arrow-right",
        prevEl: ".section-3-infor-arrow-left",
    },
});

// SECTION 5
var swiper5 = new Swiper(".section-5-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".section-5-arrow-right",
        prevEl: ".section-5-arrow-left",
    },
    on: {
        slideChange: function () {
            handleActiveBuilding(swiper5.activeIndex);
        }
    },
});

bind2('.section-5-building').forEach((element, index) => {
    element.onclick = function () {
        swiper5.slideTo(index)
    }     
});

const handleActiveBuilding = (i) => {

    bind2('.section-5-building')[i].style.opacity = 1;
    bind2('.section-5-building')[i].style.zIndex = 3;

    bind2('.section-5-building').forEach((element, index) => {
        if(index !== i) {
            element.style.opacity = 0.5;
            element.style.zIndex = 1;
        }
    });
}

handleActiveBuilding(0);