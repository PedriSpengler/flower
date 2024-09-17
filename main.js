window.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('./img/vouteflor.mp3');
  audio.load();

  // Adiciona evento de toque e clique para iniciar a reprodução
  const playAudio = () => {
      audio.play().then(() => {
          console.log('Áudio reproduzindo');
      }).catch(error => {
          console.error('Erro ao tentar reproduzir o áudio:', error);
      });

      // Remove os eventos após a reprodução
      document.body.removeEventListener('click', playAudio);
      document.body.removeEventListener('touchstart', playAudio);
  };

  document.body.addEventListener('click', playAudio);
  document.body.addEventListener('touchstart', playAudio);
});

document.addEventListener('DOMContentLoaded', () => {
  const initialScreen = document.getElementById('initial-screen');
  const questionContainer1 = document.querySelector('#initial-screen .question-container');
  const questionContainer2 = document.getElementById('question-container-2');
  const questionContainer3 = document.getElementById('question-container-3');
  const imageContainer = document.querySelector('.image-container'); // Novo elemento
  const scoreElement = document.querySelector('.score'); // Elemento que exibe o score
  let score = parseInt(scoreElement.textContent, 10); // Inicializa o score com o valor atual

  const continueBtn1 = document.querySelector('#initial-screen #continue-btn');
  const stopBtn1 = document.querySelector('#initial-screen #stop-btn');
  const continueBtn2 = document.querySelector('#question-container-2 #continue-btn2');
  const stopBtn2 = document.querySelector('#question-container-2 #stop-btn2');
  const continueBtn3 = document.querySelector('#question-container-3 #continue-btn3');
  const stopBtn3 = document.querySelector('#question-container-3 #stop-btn3');

  stopBtn1.addEventListener('click', () => {
    // Incrementa o score
    score += 1;
    // Atualiza o elemento do score
    scoreElement.textContent = score;

    // Ocultar a primeira pergunta
    questionContainer1.style.display = 'none';
    // Mostrar a segunda pergunta
    questionContainer2.style.display = 'block';
  });

  continueBtn1.addEventListener('click', () => {
    // Comportamento do botão "continuar" da primeira pergunta
    alert('TA DOIDINHA NÉ ?? TO DE OLHO NÓIA');
  });

  continueBtn2.addEventListener('click', () => {
    // Incrementa o score
    score += 1;
    // Atualiza o elemento do score
    scoreElement.textContent = score;

    // Ocultar a segunda pergunta
    questionContainer2.style.display = 'none';
    // Mostrar a terceira pergunta
    questionContainer3.style.display = 'block';
  });

  stopBtn2.addEventListener('click', () => {
    // Comportamento do botão "parar" da segunda pergunta
    alert('CE TEM O GOSTO RUIM EM');
  });

  continueBtn3.addEventListener('click', () => {
    // Incrementa o score
    score += 1;
    // Atualiza o elemento do score
    scoreElement.textContent = score;

    // Ocultar a terceira pergunta
    questionContainer3.style.display = 'none';
    
    // Remover a tela inicial
    initialScreen.style.display = 'none';

    // Remover a classe "container" do body
    document.body.classList.remove('container');

    // Exibir a imagem após a conclusão das perguntas
    imageContainer.style.display = 'block';
  });

  stopBtn3.addEventListener('click', () => {
    // Comportamento do botão "parar" da terceira pergunta
    alert('SE TU ERROU ISSO AQ, MEU DEUS EM');
  });
});
