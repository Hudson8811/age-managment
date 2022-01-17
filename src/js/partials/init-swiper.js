window.addEventListener('load', () => {
  const wishmapSliderElement = document.querySelector('.wishmap__slider .swiper');

  const certificatesSliderElement = document.querySelector('.certificates__slider .swiper');

  if (wishmapSliderElement) {
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
      }
    });
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
});