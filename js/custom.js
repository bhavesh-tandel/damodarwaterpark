//Template:Holivilla
//FileName:custom.js
//Author Name: Themevault
//Author URI:http://www.themevault.net/
//License URI: http://www.themevault.net/license/

//Video Popup JS
$(document).ready(function () {
    var $videoSrc = $("#video").attr("src");
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });
});
//End Video Popup JS

$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 5,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
        }
    });
    
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    setTimeout(playYoututbeVideo, 1000);
});

function autoPlayYouTubeModal() {
    var document = window.document.getElementsByTagName('body');
    if(document && document.length > 0){
        var modal = window.document.getElementById('myModal');
        modal.style.width= document[0].clientWidth;
    }
}
function playYoututbeVideo(){
    // $('.video-section__icon').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,

    //     fixedContentPos: false
    // });
    // $('#popup-youtube').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,

    //     fixedContentPos: false
    // });
}