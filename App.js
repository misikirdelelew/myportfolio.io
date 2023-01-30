const navHeader = document.querySelector('.header');
const mobNave = document.querySelector('.menu');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobNave.addEventListener('click', () => toggleNavbar());