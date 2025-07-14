const textareas = document.querySelectorAll('textarea.auto-expand');

textareas.forEach(textarea => {
  function autoExpand() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  textarea.addEventListener('input', autoExpand);
});

// Ajusta todas as textareas quando a página carregar
window.addEventListener('load', () => {
  textareas.forEach(textarea => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
});

var qtdA = 0;
var qtdB = 0;
var qtdC = 0;
var qtdD = 0;
var qtdE = 0;

function contar(select) {
  if (select.value == "A") qtdA++;
  else if (select.value == "B") qtdB++;
  else if (select.value == "C") qtdC++;
  else if (select.value == "D") qtdD++;
  else if (select.value == "E") qtdE++;
}

function Mostrar() {
  qtdA = qtdB = qtdC = qtdD = qtdE = 0;

  const selects = document.querySelectorAll('select');
  selects.forEach(contar);

  document.getElementById("abcde").value = "a(" + qtdA + ");b(" + qtdB + ");c(" + qtdC + ");d(" + qtdD + ");e(" + qtdE + ")";

  let max = Math.max(qtdA, qtdB, qtdC, qtdD, qtdE);
  let contagem = 0;

  if (qtdA === max) contagem++;
  if (qtdB === max) contagem++;
  if (qtdC === max) contagem++;
  if (qtdD === max) contagem++;
  if (qtdE === max) contagem++;

  if (contagem === 1) {
    if (qtdA === max) {
      document.getElementById("tela").value = "Maioria de 'a': Você tem inclinação para áreas de Ciências Exatas ou Tecnologia (ex.: Engenharia, Ciência da Computação, Matemática).";
    } else if (qtdB === max) {
      document.getElementById("tela").value = "Maioria de 'b': Você se identifica com Artes ou Comunicação (ex.: Design, Publicidade, Jornalismo, Letras).";
    } else if (qtdC === max) {
      document.getElementById("tela").value = "Maioria de 'c': Você tem interesse em Ciências Humanas ou Saúde (ex.: Psicologia, Medicina, Pedagogia, Serviço Social).";
    } else if (qtdD === max) {
      document.getElementById("tela").value = "Maioria de 'd': Você se conecta com Ciências Biológicas ou Ambientais (ex.: Biologia, Agronomia, Gestão Ambiental).";
    } else if (qtdE === max) {
      document.getElementById("tela").value = "Maioria de 'e': Você tem perfil para Gestão ou Negócios (ex.: Administração, Economia, Direito).";
    }
  } else {
    document.getElementById("tela").value = "Empate entre categorias. Você possui interesses equilibrados entre várias áreas. Considere explorar mais de uma opção para definir sua vocação.";
  }
}

