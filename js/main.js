/* Intro Loader Animation function */
$(document).ready(function() {
    $("#loader").introLoader({
        animation: {
            name: 'simpleLoader',
            options: {
                exitFx:'slideUp',
                ease: "easeInOutCirc",
                style: 'light',
                delayBefore: 1000,
                exitTime: 500
            }
        },    

        spinJs: {
            lines: 13,
            length: 20,
            width: 5,
            radius: 25,
            corners: 1,
            color: '#000',
        }
    });
});
/* End Intro Loader Animation function */

/* Fixed navigation on scroll function */

$(document).ready(function() {
    $('#nav').scrollToFixed();
});

$(document).ready(function() {
    $('#navigation').scrollToFixed();
});

/* End Fixed navigation on scroll function */

/* Navigation Change Color and Background on Scroll */

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('#navigation');

        if (scrollPos > 400) {
            navbar.addClass('nav-change');
        } else {
            navbar.removeClass('nav-change');
        }
    });
});

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('#nav');

        if (scrollPos > 350) {
            navbar.addClass('navmenu-change');
        } else {
            navbar.removeClass('navmenu-change');
        }
    });
});

/* End Navigation Change Color and Background on Scroll */

/* Typed.js functions */
  /* document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.type-element', {
        strings: ["Undergraduate IT Student,", "Front-End Web Developer.", "Web Developer! &#9996;"],
        typeSpeed: 110,
        backDelay: 400
      });
  }); */
/* End Typed.js functions */

/* Animations on Scroll */

new WOW().init();

/* End Animations on Scroll function */

/* Smooth Scroll function */

document.addEventListener("DOMContentLoaded", () => {
    const sweetScroll = new SweetScroll({
        trigger: "[data-scroll]",
        duration: 1000,
        delay: 0,
        easing: "easeInOutCubic",
        offset: 0,
        verticalScroll: true,
        horizontalScroll: false,
        stopScroll: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        quickMode: false,
    });
  }, false);

/* End Smooth Scroll function */

/* Scroll to top function */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("float-social").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("float-social").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* End Scroll to top function */