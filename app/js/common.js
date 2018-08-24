$(function() {

    var swiper = new Swiper('.slider', {
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });

    if ($(window).width() >= 768) {
        function sticky() {
            var y = $(window).scrollTop();
            if (y > (1)) {
                $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky');
            }
        };
    }

    $(window).scroll(sticky);
    $(window).resize(sticky);
    $(document).on("scrollstop",sticky);

    $("#form_btn_send").click(function(e) {
        e.preventDefault();
        console.log('setBtnClass');
        $(".thanks").addClass("active");
        $(".container").addClass('blur_bg');
        setTimeout(function(){
            console.log('removeBtnClass');
            $('.thanks.active').removeClass('active')
            $(".container").removeClass('blur_bg');
        },2000);
    });





});
