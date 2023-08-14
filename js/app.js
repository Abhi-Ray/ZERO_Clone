function hideLoader() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none';
  }

  window.addEventListener('load', hideLoader);

