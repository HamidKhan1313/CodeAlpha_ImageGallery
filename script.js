const cards = document.querySelectorAll('.card');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

const images = [...cards].map(card => card.querySelector('img').src);

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage(){
  lightboxImg.src = images[currentIndex];
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.style.display = 'none';
  }
});

const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    document.querySelector('.filters .active').classList.remove('active');
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach(card => {
      if(filter === 'all' || card.classList.contains(filter)){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
