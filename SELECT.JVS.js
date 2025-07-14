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

  const resultados = [
    { letra: "A", quantidade: qtdA, mensagem: "Você tem inclinação para Ciências Exatas ou Tecnologia (ex.: Engenharia, Ciência da Computação, Matemática)." },
    { letra: "B", quantidade: qtdB, mensagem: "Você se identifica com Artes ou Comunicação (ex.: Design, Publicidade, Jornalismo, Letras)." },
    { letra: "C", quantidade: qtdC, mensagem: "Você tem interesse em Ciências Humanas ou Saúde (ex.: Psicologia, Medicina, Pedagogia, Serviço Social)." },
    { letra: "D", quantidade: qtdD, mensagem: "Você se conecta com Ciências Biológicas ou Ambientais (ex.: Biologia, Agronomia, Gestão Ambiental)." },
    { letra: "E", quantidade: qtdE, mensagem: "Você tem perfil para Gestão ou Negócios (ex.: Administração, Economia, Direito)." }
  ];

  const maior = Math.max(qtdA, qtdB, qtdC, qtdD, qtdE);
  const empatados = resultados.filter(r => r.quantidade === maior);

  if (empatados.length === 1) {
    document.getElementById("tela").value = "Maioria de '" + empatados[0].letra.toLowerCase() + "': " + empatados[0].mensagem;
  } else {
    const letrasEmpatadas = empatados.map(r => r.letra).join(", ");
    document.getElementById("tela").value = "Empate entre as opções: " + letrasEmpatadas +
      ". Você possui interesses variados, sugerimos explorar diferentes áreas para descobrir sua verdadeira vocação.";
  }
}
