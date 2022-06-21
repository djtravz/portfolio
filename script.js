// async
// src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@latest/dist/lazyload.min.js"
  // Set the options globally
  // to make LazyLoad self-initialize
  window.lazyLoadOptions = {
      // Your custom settings go here
  };
  
  // Listen to the initialization event
  // and get the instance of LazyLoad
  window.addEventListener("LazyLoad::Initialized", function (event) {
      window.lazyLoadInstance = event.detail.instance;
  }, false);