// swiper-setup.js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  


  document.querySelectorAll('.slide-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent triggering Swiper's drag behavior
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    });
});