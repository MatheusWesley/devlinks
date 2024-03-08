const toggleMode = () => {
  // Capturando os elementos.
  const html = document.documentElement;
  const img = document.querySelector('#profile img');

  // Executando as funções.
  html.classList.toggle('light');

  html.classList.contains('light') ?
    img.setAttribute('src', './assets/avatar-light.png') :
    img.setAttribute('src', './assets/avatar.png');
}