window.addEventListener('load', () => {
  const html = document.documentElement;

  const sectionsClasses = ['program-cards', 'program-detail', 'program-tables'];

  sectionsClasses.forEach((item) => {
    const sectionClass = item;
    const modClass = `${sectionClass}__content--active`;
    const section = document.querySelector(`.${sectionClass}`);

    if (section) {
      const tabsElement = section.querySelector('.tabs');
      const tabsItems = tabsElement.querySelectorAll('.tabs__item');

      const changeTab = (e, slide) => {
      
        const target = e ? e.target.closest('.tabs__item') : null;

        const btn = target || slide;

        if (btn) {
          const targetId =  btn.dataset.target;
          const activeTabsItem = tabsElement.querySelector('.btn--active');
          const activeTabsContentElement = section.querySelector(`.${modClass}`);
          const currentTabsContentElement = section.querySelector(`#${targetId}`);

          activeTabsItem.classList.remove('btn--active');
          btn.classList.add('btn--active');

          activeTabsContentElement.classList.add('animate');
          activeTabsContentElement.classList.remove('opacity');

          activeTabsContentElement.ontransitionend = () => {
            activeTabsContentElement.ontransitionend = null;
            activeTabsContentElement.classList.remove('animate');
            activeTabsContentElement.classList.remove(modClass);
            
            currentTabsContentElement.classList.add(modClass);
            currentTabsContentElement.classList.add('animate');
            currentTabsContentElement.classList.add('opacity');
          };
        }
      }

      tabsItems.forEach((item) => {
        item.onclick = changeTab;
      });

      let tabsSlider = null;
      const init = () => {
        if (html.clientWidth < 768 && !tabsSlider) {
          tabsSlider = new Swiper(tabsElement, {
            speed: 400,
            slidesPerView: 'auto',
            spaceBetween: 21,
            watchOverflow: true,
            //slideToClickedSlide: true,
            /*on: {
              slideChange: (swiper) => {
                changeTab(null, swiper.slides[swiper.realIndex]);
              },
            }*/
          });
        } else if (html.clientWidth >= 768 && tabsSlider instanceof Swiper) {
          tabsSlider.destroy();
          tabsSlider = null;
        }
      }

      init();
      window.addEventListener('resize', init);
  
    }
  });
/*
  const sectionClass = 'program-cards';
  const modClass = `${sectionClass}__content--active`;
  const section = document.querySelector(`.${sectionClass}`);
  const tabsElement = section.querySelector('.tabs');

  const tabsItems = tabsElement.querySelectorAll('.tabs__item');
  const tabsContentElements = section.querySelectorAll(`.${sectionClass}__content`);

  const changeTab = (e, slide) => {
    const target = e.target.closest('.tabs__item');

    if (target) {
      const targetId = target.dataset.target;
      const activeTabsItem = tabsElement.querySelector('.btn--active');
      const activeTabsContentElement = section.querySelector(`.${modClass}`);
      const currentTabsContentElement = section.querySelector(`#${targetId}`);

      activeTabsItem.classList.remove('btn--active');
      target.classList.add('btn--active');

      activeTabsContentElement.classList.add('animate');
      activeTabsContentElement.classList.remove('opacity');

      activeTabsContentElement.ontransitionend = () => {
        activeTabsContentElement.ontransitionend = null;
        activeTabsContentElement.classList.remove('animate');
        activeTabsContentElement.classList.remove(modClass);
        
        currentTabsContentElement.classList.add(modClass);
        currentTabsContentElement.classList.add('animate');
        currentTabsContentElement.classList.add('opacity');
      };

    }
    
  }

  tabsItems.forEach((item) => {
    item.onclick = changeTab;
  });

  if (tabsElement) {
    let tabsSlider = null;

    const init = () => {
      if (html.clientWidth < 768 && !tabsSlider) {
        tabsSlider = new Swiper(tabsElement, {
          speed: 400,
          slidesPerView: 'auto',
          spaceBetween: 21,
          watchOverflow: true
        });
      } else if (html.clientWidth >= 768 && tabsSlider instanceof Swiper) {
        tabsSlider.destroy();
        tabsSlider = null;
      }
    }

    init();
    window.addEventListener('resize', init);
  }*/
});