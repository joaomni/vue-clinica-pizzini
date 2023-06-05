function slideEffect() {
  const imagem1 = document.getElementById('imagem1');
  const imagem2 = document.getElementById('imagem2');

  // Definir classe para fade-in
  imagem1.classList.add('fade-in');

  setTimeout(() => {
    // Remover classe para fade-in e adicionar classe para fade-out
    imagem1.classList.remove('fade-in');
    imagem1.classList.add('fade-out');

    setTimeout(() => {
      // Remover classe para fade-out
      imagem2.classList.remove('fade-out');
      imagem2.classList.add('fade-in');
      
      // Definir classe para fade-in
      setTimeout(() => {
        imagem2.classList.remove('fade-in');
        imagem2.classList.add('fade-out');
        // Remover classe para fade-in e adicionar classe para fade-out

        setTimeout(() => {
          // Remover classe para fade-out
          imagem1.classList.remove('fade-out');

          // Chamar a função novamente para reiniciar o loop
          slideEffect();
        }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem2
      }, 5000); // Aguardar 5 segundos antes de passar para a próxima imagem
    }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem1
  }, 5000); // Aguardar 5 segundos antes de iniciar o fade-out da imagem1
}
/** function slideEffect() {
  const imagem1 = document.getElementById('imagem1');
  const imagem2 = document.getElementById('imagem2');

  // Verifica se a imagem1 possui a classe fade-out, caso contrário, aplica fade-in
  if (imagem1.classList.contains('fade-out')) {
    imagem1.classList.remove('fade-out');
    imagem1.classList.add('fade-in');
  } else {
    imagem1.classList.remove('fade-in');
    imagem1.classList.add('fade-out');
  }

  setTimeout(() => {
    // Verifica se a imagem2 possui a classe fade-out, caso contrário, aplica fade-in
    if (imagem2.classList.contains('fade-out')) {
      imagem2.classList.remove('fade-out');
      imagem2.classList.add('fade-in');
    } else {
      imagem2.classList.remove('fade-in');
      imagem2.classList.add('fade-out');
    }

    // Chamar a função novamente após 5 segundos para continuar o loop
    setTimeout(slideEffect, 5000);
  }, 5000);
} **/


export default slideEffect