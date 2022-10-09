const burgerButton = document.querySelector('button');
const spans = document.querySelectorAll('span');
const burgerMenu = document.querySelector('.mobile ul');

burgerButton.addEventListener('click', () => {
  spans.forEach((element) => {
    element.classList.toggle('hidden');
  });
  burgerMenu.classList.toggle('hidden');
});