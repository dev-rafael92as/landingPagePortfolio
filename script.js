const btnMobile = document.getElementById('c-menu__btn')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const ul = document.getElementById('c-menu__nav-list')
  ul.classList.toggle('active')
  const a1 = document.getElementById('nav-link1')
  a1.classList.toggle('ativo')
  const a2 = document.getElementById('nav-link2')
  a2.classList.toggle('ativo')
  const a3 = document.getElementById('nav-link3')
  a3.classList.toggle('ativo')
  const btn = document.getElementById('btn-ativado')
  btn.classList.toggle('c-btn--active')
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)