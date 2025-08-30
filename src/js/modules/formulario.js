const formulario = document.querySelector('.form-container');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // impede o recarregamento da página

  formulario.innerHTML = 'Estou aqui'
})