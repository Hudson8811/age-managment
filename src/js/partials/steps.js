window.addEventListener('load', () => {
  const html = document.documentElement;
  const stepsSliderElement = document.querySelector('.steps__slider.swiper');

  const stepsElements = document.querySelectorAll('.steps__slider-step');

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  };

  const changeActiveState = () => {
    let scroll = window.pageYOffset + 400;

    stepsElements.forEach((stepElement) => {
      const isActive = scroll >= getOffset(stepElement).top;

      stepElement.classList[isActive ? 'add' : 'remove']('active');
    });
  };

  window.addEventListener('scroll', () => {
    if (html.clientWidth >= 768) {
      changeActiveState();
    }
  });

  if (stepsSliderElement) {
    let stepsSlider = null;

    const init = () => {
      if (html.clientWidth < 768 && !stepsSlider) {
        stepsSlider = new Swiper(stepsSliderElement, {
          speed: 400,
          slidesPerView: 'auto',
          spaceBetween: 0,
        });
      } else if (html.clientWidth >= 768 && stepsSlider instanceof Swiper) {
        stepsSlider.destroy();
        stepsSlider = null;
      }
    }

    init();
    window.addEventListener('resize', init);
  }
});