let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      vid.play();
    }
  })
});

observer.observe(vid);