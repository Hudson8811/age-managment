window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.__js_show-modal');
  const closeButtons = document.querySelectorAll('.__js_close-modal');

  if (buttons.length) {
    buttons.forEach((button) => {
      button.onclick = (e) => {
        e.preventDefault();
        Fancybox.show([{ src: "#form", type: "inline", closeButton: null, autoFocus: false, trapFocus: false }]);
      }
    })
  }

  if (closeButtons.length) {
    closeButtons.forEach((button) => {
      button.onclick = (e) => {
        e.preventDefault();
        Fancybox.close();
      }
    });
  }
  
});