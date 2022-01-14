$(document).ready(function(){
    $('.movies_new').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
        speed:500,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

        ]
    });
    $('.movie-relationship__list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        autoplay:true,
        speed:500,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

        ]
    });
});

