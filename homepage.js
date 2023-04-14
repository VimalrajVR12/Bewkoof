// <!-- Include Swiper JS -->
    
var swiper = new Swiper('.swiper-container', {
    loop: true, // Enable loop mode
    slidesPerView: 1, // Show 3 slides at a time
    spaceBetween: 10, // Add space between slides
    centeredSlides: true, // Center the slides
    initialSlide: 1, // Start from slide index 2 (3rd slide)
    autoplay: {
      delay: 2000, // Set delay between slides in milliseconds
      disableOnInteraction: false, // Autoplay even when user interacts with slider
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed: 800, // Set slide transition speed in milliseconds
    effect: 'slide', // Set slide transition effect

    // Media Queries for Mobile Responsiveness
    breakpoints: {
      // When screen size is 768px or less (mobile devices)
      768: {
        slidesPerView: 2.8, // Show 1 slide at a time
        spaceBetween: 0, // Remove space between slides
        centeredSlides: false, // Do not center the slides
      }
    }
  });



      
   

$(document).ready(function() {
  $('.widgetSliderWrapper').each(function() {
    var $wrapper = $(this);
    var $list = $wrapper.find('.widgetSliderList');
    var $items = $wrapper.find('.widgetSliderItem');
    var itemWidth = $items.first().outerWidth();
    var itemsPerPage = Math.floor($wrapper.width() / itemWidth);

    $wrapper.on('scroll', function() {
      if ($list.width() > $wrapper.width()) {
        if ($wrapper.scrollLeft() > $list.width() - $wrapper.width() - 1) {
          $wrapper.scrollLeft(0);
        } else if ($wrapper.scrollLeft() === 0) {
          $wrapper.scrollLeft($list.width());
        }
      }
    });

    $wrapper.on('mouseenter', function() {
      $wrapper.off('scroll');
    });

    $wrapper.on('mouseleave', function() {
      $wrapper.on('scroll', function() {
        if ($list.width() > $wrapper.width()) {
          if ($wrapper.scrollLeft() > $list.width() - $wrapper.width() - 1) {
            $wrapper.scrollLeft(0);
          } else if ($wrapper.scrollLeft() === 0) {
            $wrapper.scrollLeft($list.width());
          }
        }
      });
    });
  });
});