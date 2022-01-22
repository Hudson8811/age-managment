window.addEventListener('load', () => {
  const html = document.documentElement;

  const sectionsClasses = ['program-cards', 'program-detail', 'program-tables'];

  sectionsClasses.forEach((item) => {
    const sectionClass = item;
    const modClass = `${sectionClass}__content--active`;
    const section = document.querySelector(`.${sectionClass}`);

    const prevBtn = section.querySelector(`.${sectionClass}__prev`);
    const nextBtn = section.querySelector(`.${sectionClass}__next`);
    const pagination = section.querySelector(`.${sectionClass}__pagination`);

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

          if (pagination) {
            pagination.querySelector('.pagination__dot.active').classList.remove('active');
            pagination.querySelector(`[data-target="${targetId}"]`).classList.add('active');
          }
        }
      };

      if (nextBtn && prevBtn) {
        const onNextBtnClick = () => {
          const activeTabsItem = tabsElement.querySelector('.btn--active');
          const targetTabsItem = activeTabsItem.nextElementSibling || tabsItems[0];

          changeTab(null, targetTabsItem);
        };

        const onPrevBtnClick = () => {
          const activeTabsItem = tabsElement.querySelector('.btn--active');
          const targetTabsItem = activeTabsItem.previousElementSibling || tabsItems[tabsItems.length - 1];

          changeTab(null, targetTabsItem);
        };

        nextBtn.onclick = onNextBtnClick;
        prevBtn.onclick = onPrevBtnClick;

        if (pagination) {
          pagination.onclick = (e) => {
            const dot = e.target.closest('.pagination__dot');

            if (dot && !dot.classList.contains('active')) {
              const targetTabsItem = tabsElement.querySelector(`[data-target="${dot.dataset.target}"]`);

              changeTab(null, targetTabsItem);
            }
          }
        }
      }

      tabsItems.forEach((item, index) => {
        item.onclick = changeTab;

        if (pagination) {
          const dot = document.createElement('button');
          dot.setAttribute('type', 'button');
          dot.className = index > 0 ? 'pagination__dot' : 'pagination__dot active';
          dot.dataset.target = item.dataset.target;
          dot.innerHTML = `<span class="visually-hidden">${item.dataset.target}</span>`;
          pagination.appendChild(dot);
        }
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
      };

      init();
      window.addEventListener('resize', init);
    }
  });
});