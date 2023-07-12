$(document).ready(function(){
  
    $('.testimonial__slider-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        customPaging: function(slider, i) {
            return `<div class="pager__item" id="dot-${i}"> <div class='custom__dot'> </div>`;
          },
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
            },
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }, 
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
});