$(document).ready(function() {
    // Devices
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

    /* Smooth Scroll function */
    // Browsers info
    let chromeCheck = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    let firefoxCheck = /Firefox/.test(navigator.userAgent);
    let EdgeCheck = /Edg/.test(navigator.userAgent);    

    // Use CSS smooth scroll for modern browsers like Chrome and Firefox
    if ( (chromeCheck && !EdgeCheck) || firefoxCheck) {
        console.log("Smooth scrolling enabled.");
        $('html').css('scroll-behavior', 'smooth');
    }
    // Use a jQuery solution for Edge and other browsers that might not fully support the CSS solution
    else {
        if (EdgeCheck) console.log("Smooth scrolling enabled on Edge, but might not work as smooth as possible due to some limitations, for ex. links with # will probably not scroll smoothly!");
        else console.log("Smooth scrolling enabled but might not work properly on this browser!");
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 200, function(){
                    window.location.hash = hash;
                });
            }
        });
    }

    /* Mobile menu toggle functions */
    let mobileMenuToggle = $('#header .mobile-menu-toggle');
    let mobileMenuOverlay = $('#mobile-menu-overlay');
    let mobileMenuCloseBtn = $('#mobile-menu-overlay .mobile-menu .mobile-menu-header .mobile-menu-close');
    let mobileMenuList = $('#mobile-menu-overlay .mobile-menu .mobile-menu-body .menu-items');
    // Open mobile menu
    mobileMenuToggle.on('click', function() {
        mobileMenuOverlay.fadeIn(300);
    });
    // Close mobile menu
    mobileMenuCloseBtn.on('click', function() {
        mobileMenuOverlay.fadeOut(300);
    });
    // Close mobile menu when clicking on menu items
    mobileMenuList.find('li').on('click', function() {
        mobileMenuOverlay.fadeOut(300);
    });
    // Close mobile menu when clicked outside of modal
    $(document).on('click', function (e) {
        if ( $(e.target).is(mobileMenuOverlay) ) {
            mobileMenuOverlay.fadeOut(300);
        }
    });

    /* Work experience details toggle */
    $('#about .work-experience-container .work-place i').on('click', function() {
        if ( $(this).parent().find('.work-place-desc').is(':hidden') ) {
            $('#about .work-experience-container .work-place .work-place-desc').fadeOut(500);
            $(this).parent().find('.work-place-desc').fadeIn(500);
            $('#about .work-experience-container .work-place i').removeClass('rotated');
            $(this).addClass('rotated');
        } else {
            $(this).parent().find('.work-place-desc').fadeOut(500);
            $(this).removeClass('rotated');
        }
    });

    /* Services section functions */
    let servicesMainContainer = $('#services .services-content-container');
    let backToServiceBtn = $('#services .services-content-container .services-content-info-container .back-to-service-intro-btn');
    let initialServicesContent = $('#services .services-content-container .services-content-info-container .initial-services-content');
    let moreServiceContent = $('#services .services-content-container .services-content-info-container .services-more-content-container');
    let moreServiceContentTitle = $('#services .services-content-container .services-content-info-container .services-more-content-container .service-title');
    let moreServiceContentDesc = $('#services .services-content-container .services-content-info-container .services-more-content-container .service-desc');
    let servicesRightContainer = $('#services .services-content-container .services-content-list-container');

    // Service click
    servicesRightContainer.find('.service').on('click', function() {
        let serviceTitle = $(this).find('h4').text();
        let serviceLongDesc = $(this).find('.long-desc').html();
        // If it's a mobile or tablet, scroll up to the service more content section
        if ( mobile.matches ) {
            $('html, body').animate({
                scrollTop: $("#services-content-info-container").offset().top - 100
            }, 100);
        }
        if ( tablet.matches ) {
            $('html, body').animate({
                scrollTop: $("#services-content-info-container").offset().top - 150
            }, 100);
        }
        // Add class to main services content container
        servicesMainContainer.addClass('a-service-clicked');
        // Remove class from all services and add only to the clicked service
        servicesRightContainer.find('.service').removeClass('service-clicked');
        $(this).addClass('service-clicked');
        // Hide initial service content, show back to initial service content button and service content section
        initialServicesContent.slideUp(300);
        backToServiceBtn.fadeIn(300);
        moreServiceContent.slideDown(300);
        // Add service title and description to the service more content continaer
        moreServiceContentTitle.text(serviceTitle);
        moreServiceContentDesc.html(serviceLongDesc);
    });
    // Back to service button click
    backToServiceBtn.on('click', function() {
        // Remove class from main services content container
        servicesMainContainer.removeClass('a-service-clicked');
        // Remove class from all services
        servicesRightContainer.find('.service').removeClass('service-clicked');
        // Show initial service content, hide back to initial service content button and service content section
        initialServicesContent.slideDown(300);
        backToServiceBtn.fadeOut(300);
        moreServiceContent.fadeOut(300);
    });

    /* Load Typeform after user scrolls */
    let startedForm = 0;
    function startForm() {
        if(startedForm == 0) {
            // $('.contact-content-container').html('<div data-tf-widget="zdz53C" data-tf-opacity="100" data-tf-iframe-props="title=Contact Form Submission" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:600px;"></div>');
            // $('.contact-content-container').append('<script src="//embed.typeform.com/next/embed.js">');
            $('.contact-content-container').html('<button data-tf-popup="zdz53C" data-tf-opacity="100" data-tf-size="70" data-tf-iframe-props="title=Contact Form Submission" data-tf-transitive-search-params data-tf-medium="snippet">Get in Touch</button>');
            $('.contact-content-container').append('<script src="//embed.typeform.com/next/embed.js"></script>');
        }
        startedForm = 1;
    }
    document.addEventListener('scroll', () => {
        startForm();
    });

    /* Toggle contact methods dropdown */
    let connectBtn = $('#contact-methods .contact-methods-container h3');
    let connectList = $('#contact-methods .contact-methods-container .contact-methods-list');
    connectBtn.on('click', function() {
        if ( $(connectList).css('display') === 'none' ) {
            $(connectBtn).addClass('connectListToggled');
            $(connectList).css('display', 'inline-block');
        } else {
            $(connectBtn).removeClass('connectListToggled');
            $(connectList).css('display', 'none');
        }
    });

    /* Easter egg that nobody asked for */
    // Counters
    let clickCounter = 0;
    let countdownCounter = 100;
    // Checks for opacity countdown timer
    function countdownCounterCheck(n){ return (n < 10 ? "0" : n == 10 ? "10" : "") + n; }
    // Image variables
    let clickableImg = $('#banner .banner-image-inner img');
    let clickableImgParent = $('#banner .banner-image');
    let clickableImgInnerParent = $('#banner .banner-image .banner-image-inner');
    // Easter egg magic
    $(clickableImg).on('click', function() {
        clickCounter++;
        countdownCounter--;
        $(clickableImg).css('opacity', '0.'+countdownCounterCheck(countdownCounter));
        if ( clickCounter <= 1 ) $(clickableImgParent).prepend('<div class="easter-egg-container"><p></p></div>');
        if ( clickCounter >= 5 ) {
            $(clickableImgParent).find('.easter-egg-container').fadeIn(300);
            $('.easter-egg-container p').text('So you decided to click on my image');
        }
        if ( clickCounter >= 10 ) { $('.easter-egg-container p').text('You really wanna do this?'); }
        if ( clickCounter >= 25 ) { $('.easter-egg-container p').text('Does this look fun to you?'); }
        if ( clickCounter >= 35 ) { $('.easter-egg-container p').text('I would get bored at this point but go on champ \u{1f64c}'); }
        if ( clickCounter >= 50 ) { $('.easter-egg-container p').text('Meh, continue I guess'); }
        if ( clickCounter >= 65 ) { $('.easter-egg-container p').text('The person in front of the screen still clicking like crazy :D'); }
        if ( clickCounter >= 75 ) { $('.easter-egg-container p').text('Ok, not much left'); }
        if ( clickCounter >= 90 ) { $('.easter-egg-container p').text('Just a few more clicks'); }
        if ( clickCounter == 97 ) { $('.easter-egg-container p').text('Just 3 more clicks'); }
        if ( clickCounter == 98 ) { $('.easter-egg-container p').text('Just 2 more clicks'); }
        if ( clickCounter == 99 ) { $('.easter-egg-container p').text('Just 1 more click dude!!'); }
        if ( clickCounter >= 100 ) { $('.easter-egg-container p').text('Game Over! You just wasted about a minute or so of your life \u{1f389}'); }
        if ( clickCounter == 100 ) {
            $(clickableImgInnerParent).append('<div class="facepalm-emoji">🤦‍♂️</div>');
            $(clickableImgInnerParent).append('<div class="refresh-page"><a href="/">Refresh</a></div>');
            $(clickableImg).css('cursor', 'no-drop');
        }
    });

    /* Dynamic Current Year for Copyright */
    var currentYearElement = $('#copyright-year');
    var currentYear = new Date().getFullYear();
    currentYearElement.text(currentYear);

    /* Dynamic Last Updated Date */
    var lastUpdate = $("#last-update");
    lastUpdate.text("Last Updated: 26/01/2024");
    lastUpdate.attr('alt', 'Friday, January 26th 2024');
    lastUpdate.attr('title', 'Friday, January 26th 2024');
});

/* Hide loader when page is loaded */
$(window).on('load', function(){
    $('#loader').fadeOut();
});

/* Fixed navigation on scroll function */
const headerFixed = () => {
    const header = document.querySelector('#header');
    if (header) {
        let scroll = window.scrollY;
        if (scroll > 10) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    }
};
document.addEventListener('scroll', () => { headerFixed(); });

/* Show Scroll to top and floating socials on scroll */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 300) {
        $("#back-to-top").fadeIn(300).css('display', 'block');
        $("#float-social").fadeIn(300).css('display', 'block');
    } else {
        $("#back-to-top").fadeOut(300);
        $("#float-social").fadeOut(300);
    }
}