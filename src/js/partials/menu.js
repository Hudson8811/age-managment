window.addEventListener('load', () => {
  const html = document.documentElement;
  const header = document.querySelector('.header')
  const toggleBtn = header.querySelector('.header__toggle');
  const headerMenu = header.querySelector('.header__menu');
  const menuLinks = headerMenu.querySelectorAll('.nav__link');

  const ModifierClass = {
    HEADER_MENU_OPENED: 'menu-opened',
    OPENED: 'opened',
    ANIMATE: 'animate',
    BODY_HIDDEN: 'hidden'
  };

  const MOBILE_BREAKPOINT = 1079;

  const openMenu = () => {
    document.body.classList.add(ModifierClass.BODY_HIDDEN);
    header.classList.add(ModifierClass.HEADER_MENU_OPENED);
    headerMenu.classList.add(ModifierClass.ANIMATE);
    toggleBtn.classList.add(ModifierClass.OPENED);

    headerMenu.classList.add(ModifierClass.OPENED);
    headerMenu.ontransitionend = () => {
      headerMenu.ontransitionend = null;
      headerMenu.classList.remove(ModifierClass.ANIMATE);toggleBtn.onclick = closeMenu;
    }
  };

  const resetMenu = () => {
    document.body.classList.remove(ModifierClass.BODY_HIDDEN);
    header.classList.remove(ModifierClass.HEADER_MENU_OPENED);
    toggleBtn.classList.remove(ModifierClass.OPENED);
    headerMenu.classList.remove(ModifierClass.OPENED);
    toggleBtn.onclick = openMenu;
  };

  const closeMenu = (cb) => {
    header.classList.remove(ModifierClass.HEADER_MENU_OPENED);
    toggleBtn.classList.remove(ModifierClass.OPENED);

    headerMenu.classList.add(ModifierClass.ANIMATE);
    headerMenu.classList.remove(ModifierClass.OPENED);

    headerMenu.ontransitionend = () => {
      headerMenu.ontransitionend = null;
      headerMenu.classList.remove(ModifierClass.ANIMATE);
      document.body.classList.remove(ModifierClass.BODY_HIDDEN);
      toggleBtn.onclick = openMenu;

      if (cb) {
        cb()
      }
    }
  };

  window.addEventListener('resize', () => {
    if (html.clientWidth > MOBILE_BREAKPOINT) {
      resetMenu();
    }
  });

  toggleBtn.onclick = openMenu;

  menuLinks.forEach((link) => {
    const targetId = link.href.split('#')[1];
    link.onclick = (e) => {
      if (html.clientWidth <= MOBILE_BREAKPOINT && targetId) {
        e.preventDefault();

        closeMenu(() => {
          document.querySelector(`#${targetId}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      }
    }
  })
});