window.addEventListener('load', () => {
  const html = document.documentElement;

  const wishmapSliderElement = document.querySelector('.wishmap__slider .swiper');

  const certificatesSliderElement = document.querySelector('.certificates__slider .swiper');

  const wishmapListElement = document.querySelector('.wishmap__list');
  
  const coachingProgramsSliderElement = document.querySelector('.coaching-programs__slider.swiper');

  console.log(coachingProgramsSliderElement)


  if (wishmapSliderElement) {
    const wishmapItems = document.querySelectorAll('.wishmap-result-item');

    const onWishmapSliderChange = (currentSlideIndex) => {
      wishmapItems.forEach((wishmapItem, index) => {
        wishmapItem.classList[index === currentSlideIndex ? 'add' : 'remove']('active');
      } )
    };

    const wishmapSlider = new Swiper(wishmapSliderElement, {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      // Responsive breakpoints
      /*breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }*/

      // If we need pagination
      pagination: {
        el: '.pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.nav-btn--next',
        prevEl: '.nav-btn--prev',
      },
       on: {
        slideChange: (swiper) => {
          onWishmapSliderChange(swiper.realIndex)
        }
      }
    });
  }

  if (wishmapListElement) {
    let wishmapListCarousel = null;

    const init = () => {
      if (html.clientWidth < 768 && !wishmapListCarousel) {
        wishmapListCarousel = new Swiper(wishmapListElement, {
          speed: 400,
          slidesPerView: 'auto',
          spaceBetween: 8,
          loop: true
        });
      } else if (html.clientWidth >= 768 && wishmapListCarousel instanceof Swiper) {
        wishmapListCarousel.destroy();
        wishmapListCarousel = null;
      }
    }

    init();
    window.addEventListener('resize', init);
  }

  if (certificatesSliderElement) {
    const certificatesSlider = new Swiper(certificatesSliderElement, {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 48,
      loop: true,
      centeredSlides: true,
      // Responsive breakpoints
      /*breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }*/

      // If we need pagination
      pagination: {
        el: '.pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: certificatesSliderElement.parentElement.querySelector('.nav-btn--next'),
        prevEl: certificatesSliderElement.parentElement.querySelector('.nav-btn--prev'),
      }
    });

    console.log(certificatesSlider)
  }

  if (coachingProgramsSliderElement) {
    let coachingProgramsSlider = null;

    const init = () => {
      if (html.clientWidth < 768 && !coachingProgramsSlider) {
        coachingProgramsSlider = new Swiper(coachingProgramsSliderElement, {
          speed: 400,
          slidesPerView: 1,
          spaceBetween: 8,
          
          pagination: {
            el: '.pagination',
          },
        });
      } else if (html.clientWidth >= 768 && coachingProgramsSlider instanceof Swiper) {
        coachingProgramsSlider.destroy();
        coachingProgramsSlider = null;
      }
    }

    init();
    window.addEventListener('resize', init);
  }
});