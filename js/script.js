const swiper = new Swiper(".mySwiper", {
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

const btn = document.querySelector('.block-btn'),
    close = document.querySelector('.hero--logo__modal--block__gen--close'),
    block = document.querySelector('.hero--logo__modal--block');

btn.addEventListener('click', () => {
    block.style.display = 'block'
})
close.addEventListener('click', () => {
    block.style.display = 'none'
})