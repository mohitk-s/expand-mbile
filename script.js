let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  nextSlide();
});

prev.addEventListener('click', function () {
  prevSlide();
});

function nextSlide() {
  let items = document.querySelectorAll('.item');
  let currentSlide = document.querySelector('.slide .item:first-child');
  let nextSlide = currentSlide.nextElementSibling || items[0];
  currentSlide.style.display = 'none';
  nextSlide.style.display = 'block';
}

function prevSlide() {
  let items = document.querySelectorAll('.item');
  let currentSlide = document.querySelector('.slide .item:first-child');
  let prevSlide = currentSlide.previousElementSibling || items[items.length - 1];
  currentSlide.style.display = 'none';
  prevSlide.style.display = 'block';
}
