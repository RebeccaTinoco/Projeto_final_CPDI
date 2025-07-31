const botaoHamburguer = document.querySelector('.botao-hamburguer');
const mobileLinks = document.querySelector('.mobile-links');

botaoHamburguer.addEventListener('click', () => {
  mobileLinks.classList.toggle('ativo');
});
