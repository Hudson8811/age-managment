window.addEventListener('load', () => {
  const forms = document.querySelectorAll('form');

  if (forms.length) {
    forms.forEach((form) => {
      new IMask(form.elements.phone, {
        mask: '+{7} (000) 000-00-00',
        lazy: false
      });
    })
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
});