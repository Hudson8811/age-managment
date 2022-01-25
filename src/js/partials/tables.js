window.addEventListener('load', () => {
  const html = document.documentElement;
  const tables = document.querySelectorAll('.table');

  

    //changeStateSlider();

  if (tables.length) {
    tables.forEach((table) => {
      const sliderElement = table.querySelector('.table__body.swiper');
      const headCells = table.querySelectorAll('.table__head [data-order]');
      const bodyCells = table.querySelectorAll('.table__body [data-order]');

      const setHeightOfCells = () => {
        const headCellsHeightMap = {};
        const bodyCellsHeightMap = {};
        const cellHeightMap = {};

        headCells.forEach((cell) => {
          const id = cell.dataset.order;
          headCellsHeightMap[id] = cell.clientHeight
        });

        bodyCells.forEach((cell) => {
          const id = cell.dataset.order;
          if (!bodyCellsHeightMap.hasOwnProperty(id) || bodyCellsHeightMap[id] < cell.clientHeight) {
            bodyCellsHeightMap[id] = cell.clientHeight;
          }
        });

        headCells.forEach((it, index) => {
          cellHeightMap[index] = bodyCellsHeightMap[index] > headCellsHeightMap[index] ? bodyCellsHeightMap[index] : headCellsHeightMap[index];
        });

        [...bodyCells, ...headCells].forEach((cell) => {
          const id = cell.dataset.order;

          cell.style.height = `${cellHeightMap[id]}px`;
        });
      };

      const removeHeightStyle = () => {
        [...headCells, ...bodyCells].forEach((cell) => cell.removeAttribute('style'));
      };

      let slider = null;

      const changeStateSlider = () => {
        if (html.clientWidth < 1270 && !slider && sliderElement) {
          slider = new Swiper(sliderElement, {
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1
              },
              // when window width is >= 1270px
              1080: {
                slidesPerView: 3
              }
            },
            
            pagination: {
              el: sliderElement.closest('.program-tables__content').querySelector('.pagination'),
            },
          });
          //console.log(sliderElement.parentElement)
        } else if (html.clientWidth >= 1270 && slider instanceof Swiper) {
          slider.destroy();
          slider = null;
        }
      };

      if (html.clientWidth < 1270) {
        setHeightOfCells();
        changeStateSlider();
      }

      window.addEventListener('resize', () => {
        if (html.clientWidth < 1270) {
          removeHeightStyle();
          setHeightOfCells();
        } else {
          removeHeightStyle();
        }
        changeStateSlider();
      });
    });
  }
})