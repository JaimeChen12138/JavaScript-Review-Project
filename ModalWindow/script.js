'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Btn clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btn.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
