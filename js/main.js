$(document).ready(function () {

    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();
    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $("#owl-demo1").owlCarousel({
        items: 1,
        lazyLoad: true,
        autoPlay: true,
        itemsDesktop: 2,
    });
    $(document).ready(function () {
        $("#owl-demo2").owlCarousel({
            items: 5,
            lazyLoad: true,
            autoPlay: true,
            pagination: false,
        });
    });
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    $("#owl-demo").owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: true,
    });

    $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

    $().UItoTop({
        easingType: 'easeOutQuart'
    });

});