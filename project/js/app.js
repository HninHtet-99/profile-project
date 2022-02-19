

    let screenHeight = $(window).height();
    console.log(screenHeight);
    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if (currentPosition >= screenHeight-100) {
            // $(".side-nav").css("position","fixed")
            $(".side-nav").addClass("side-nav-scroll")
        }else{
            $(".side-nav").removeClass("side-nav-scroll");
            setActive("home");
        }
    });

    $('.navbar-toggler').click(function(){
        let result = $(".navbar-collapse").hasClass('show');
        console.log(result);
        if(result){
            // $('.navbar-toggler').html(
            //     `<i class="fa fa-bars menu-icon" style="font-size: 1.5em;"></i>`
            // )
            $(".menu-icon").addClass('fa-bars').removeClass('fa-times');
        }else{
            // $('.navbar-toggler').html(
            //     `<i class="fa fa-times menu-icon" style="font-size: 1.5em;"></i>`
            // )
            $(".menu-icon").removeClass('fa-bars').addClass('fa-times');
        }
    });
    
    function setActive(current){
        $('.nav-link').removeClass("current-page");
        $(`.nav-link[href="#${current}"]`).addClass("current-page");
    }
    
    function navScroll(){
        let currentSection = $('section[id]');

        currentSection.waypoint(function (direction) {
            if(direction == "down"){
                let currentId = $(this.element).attr('id');
                // console.log(currentId);
                setActive(currentId)
            }
        },{
            offset:'150px'
        });

        currentSection.waypoint(function (direction) {
            if(direction == 'up'){
                let currentId = $(this.element).attr('id');
                // console.log(currentId);
                setActive(currentId)
            }
        },{
            offset:'150px'
        });
    }
    navScroll();

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

$('.my-slick').slick({
dots: true,
infinite: true,
slidesToShow: 3,
slidesToScroll: 3,
autoplay: true,
autoplaySpeed: 3000,
speed: 1500,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
infinite: true,
dots: true
}
},

{
breakpoint: 667,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
$('.my-counter').counterUp({
delay: 20,
time: 1000,
});

$(window).on("load",function () {
    // $(".page-loading").remove();
    $(".page-loading").fadeOut(500,function () {
        $(this).remove();
    })
})
