$(document).ready(function () { 
    $('.pagination li .curent').parent().addClass('active');
    if($('.nav-slider')){
        $('.nav-slider').slick({
            infinite: false,
            vertical: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            dots: false,
            swipe: true,
            swipeToSlide: false,
            draggable: false,
        });
    };
    $('.bottom-sliders').slick({
        infinite: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        dots: false,
        swipe: true,
        swipeToSlide: false,
        draggable: false,
    });
    if($(".coments-sidebar")){
        $('.coments-sidebar').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            dots: false,
            swipe: true,
            swipeToSlide: false,
            draggable: false,
        });
    };
    if ($(window).width() <= 992.5) {
        $(".bottom-slider-section").remove();

        $(".page-header").remove();
        $(".main-header").remove();

        $('.bottom-sliders-mob').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            dots: false,
            swipe: true,
            swipeToSlide: false,
            draggable: false,
            responsive: [
                {
                  breakpoint: 500.5,
                  settings: {
                    variableWidth: true
                  }
                },
              ]
        });
    }else{
        $(".mobile-header").remove();
        $(".bottom-slider-section-mob").remove();
    }
    if ($(window).width() <= 768.5) {
        $('.coments-main').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            dots: false,
            swipe: true,
            swipeToSlide: false,
            draggable: false,
        });
    }
    // form ------------------------------------------
    (function ($) {
        function floatLabel(inputType) {
            $(inputType).each(function () {
                var $this = $(this);
                // on focus add cladd active to label
                $this.focus(function () {
                    $this.next().addClass("active");
                });
                //on blur check field and remove class if needed
                $this.blur(function () {
                    if ($this.val() === '' || $this.val() === 'blank') {
                        $this.next().removeClass();
                    }
                });
            });
        }
        // just add a class of "floatLabel to the input field!"
        floatLabel(".floatLabel");
    })(jQuery);
});



// Menu burger ------------------------------------
let menuBtn = document.querySelectorAll('.menu-btn'),
    menuStatus = document.querySelectorAll('.mobile-header');
    
if(menuBtn[0] != undefined){
    menuBtn[0].addEventListener('click', (e)=> {
        e.preventDefault();
        menuBtn[0].classList.toggle('menu-btn-active');
        menuStatus[0].classList.toggle('nav-bar-active');
    });
}
// Lang in menu ------------------------------------
let lengBtn = document.querySelector('.menu-body-mobile .lang span'),
    lengStatus = document.querySelector('.menu-body-mobile .lang .lang-list');

    lengBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    lengBtn.classList.toggle('active');
    lengStatus.classList.toggle('active');
});
// Menu show more ------------------------------------
let moreMenuBtn = document.querySelector('header.mobile-header .row-bot .nav-bar .menu-item-has-clildren'),
    navbarStatus = document.querySelector('header.mobile-header .row-bot .nav-bar'),
    moreWordsBtn = document.querySelector('header.mobile-header .row-bot .nav-bar .menu-item-has-clildren>a');

moreMenuBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    moreMenuBtn.classList.toggle('active');
    navbarStatus.classList.toggle('active');
    if(moreMenuBtn.classList.contains('active')){
        moreWordsBtn.innerText = "Менше";
    }else{
        moreWordsBtn.innerText = "Більше";
    }
});
// Footer show more ------------------------------------
let moreFootBtn = document.querySelector('.mob-foot-more'),
    footStatus = document.querySelector('.foot-right .text-foot');

moreFootBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    footStatus.classList.toggle('active');
    if(footStatus.classList.contains('active')){
        moreFootBtn.innerText = "Менше";
    }else{
        moreFootBtn.innerText = "Більше";
    }
});
// Mobile search ------------------------------------
let mobSearchBtn = document.querySelector('.mob-search .search-no'),
    mobSearchForm = document.querySelector('.mob-search');

mobSearchBtn.addEventListener('click', (e)=> {
    console.log('ds');
    
    e.preventDefault();
    mobSearchForm.classList.add('active');
    document.querySelector('body').classList.add('search-open');
});
document.querySelector('body main').addEventListener('click', (e)=> {
    document.querySelector('body').classList.remove('search-open');
    mobSearchForm.classList.remove('active');
});

// Tabs (team and partners) ------------------------------------
function openInfo(evt, member) {
        
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("open-tabs");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        let arrow = tablinks[i].parentElement;
        arrow.className = arrow.className.replace(" active-this", "");
        tablinks[i].classList.add("bloop");
    }

    document.getElementById(member).style.display = "flex";
    evt.currentTarget.className += " active";
    evt.currentTarget.parentElement.className += " active-this";
}
// Close info tabs (team and partners) ------------------------------------
let closeBigBlockBtn = document.querySelectorAll('.open-tabs button'),
    bigBlockClose = document.querySelectorAll('.open-tabs'),
    arrowClose = document.querySelectorAll('.tabs'),
    bloopClose = document.querySelectorAll('.tabs .img');

for (i = 0; i < closeBigBlockBtn.length; i++) {
    closeBigBlockBtn[i].addEventListener('click', (e)=> {
        e.preventDefault();
        for (i = 0; i < bigBlockClose.length; i++) {
            bigBlockClose[i].style.display = "none";
        }
        for (i = 0; i < bloopClose.length; i++) {
            bloopClose[i].classList.remove('bloop');
        }
        for (i = 0; i < arrowClose.length; i++) {
            arrowClose[i].classList.remove('active-this');
        }
    });
}

// Popup -----------------------------------------
let clickPopup = document.getElementById('popupclickid'),
    openPopup = document.getElementById('popupopenid'),
    closePopup = document.querySelector('.close-popup');

clickPopup.addEventListener('click', (e)=> {
    e.preventDefault();
    openPopup.classList.add('active');
    document.querySelector('body').classList.add('modal-open');
});

closePopup.addEventListener('click', (e)=> {
    e.preventDefault();
    openPopup.classList.remove('active');
    document.querySelector('body').classList.remove('modal-open');
});