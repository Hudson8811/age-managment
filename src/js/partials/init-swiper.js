window.addEventListener('load', () => {
  const html = document.documentElement;

  const wishmapSliderElement = document.querySelector('.wishmap__slider .swiper');

  const certificatesSliderElement = document.querySelector('.certificates__slider .swiper');

  const wishmapListElement = document.querySelector('.wishmap__list');
  
  const coachingProgramsSliderElement = document.querySelector('.coaching-programs__slider.swiper');

  const programDetailSliderElements = document.querySelectorAll('.program-detail__slider');

  const costSliderElement = document.querySelector('.cost__slider.swiper ');

  const stepsSliderElement = document.querySelector('.steps__aside .swiper');



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
        clickable: true
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
      slidesPerView: 1,
      spaceBetween: 48,
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 48
        },
        // when window width is >= 1270px
        1270: {
          slidesPerView: 3,
          spaceBetween: 48,
          centeredSlides: true
        }
      },

      // If we need pagination
      pagination: {
        el: '.pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: certificatesSliderElement.parentElement.querySelector('.nav-btn--next'),
        prevEl: certificatesSliderElement.parentElement.querySelector('.nav-btn--prev'),
      }
    });
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
            clickable: true
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

  if (programDetailSliderElements.length) {
    const programDetailSlider = new Set();

    const init = () => {
      if (html.clientWidth < 768 && programDetailSlider.size === 0) {

        programDetailSliderElements.forEach((element) => {
          const slider = new Swiper(element, {
            speed: 400,
            slidesPerView: 'auto',
            spaceBetween: 8,
            loop: true
          });

          programDetailSlider.add(slider);
        })
        
      } else if (html.clientWidth >= 768 && programDetailSlider.size) {
        [...programDetailSlider].forEach((slider) => {
          slider.destroy();
          programDetailSlider.delete(slider)
        });
      }
    }

    init();
    window.addEventListener('resize', init);
  }

  if (costSliderElement) {
    let costSlider = null;

    const init = () => {
      if (html.clientWidth < 768 && !costSlider) {
        costSlider = new Swiper(costSliderElement, {
          speed: 400,
          slidesPerView: 'auto',
          spaceBetween: 13,
          loop: true
        });
      } else if (html.clientWidth >= 768 && costSlider instanceof Swiper) {
        costSlider.destroy();
        costSlider = null;
      }
    }

    init();
    window.addEventListener('resize', init);
  }

  if (stepsSliderElement) {
    const stepsSliderPagination = document.querySelector('.steps__aside-pagination');
    const autoplayDelay = 2000;

    const stepsSlider = new Swiper(stepsSliderElement, {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: autoplayDelay
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: stepsSliderPagination,
        clickable: true
      }
   
    });

    stepsSliderElement.addEventListener('mouseleave', () => {
      stepsSlider.autoplay.start()
    });

    stepsSliderElement.addEventListener('mouseenter', () => {
      stepsSlider.autoplay.stop()
    });

    stepsSliderPagination.onclick = () => {
      setTimeout(() => {
              stepsSlider.autoplay.start();
            }, autoplayDelay)
    }
  }

});