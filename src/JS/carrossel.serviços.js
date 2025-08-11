document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});

