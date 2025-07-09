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

function contar(select){

  if (select.value == "A") qtdA++;
else if (select.value == "B") qtdB++;
else if (select.value == "C") qtdC++;
else if (select.value == "D") qtdD++;
else if (select.value == "E") qtdE++;

  /*if(select.value==A){
    qtdA++
  }

  else if(select.value==B){
    qtdB++
  }

   else if(select.value==C){
    qtdC++
  }

   else if(select.value==D){
    qtdD++
  }

   else if(select.value==E){
    qtdE++
  }*/
}


function Mostrar(){
    const selects = document.querySelectorAll('select');

    selects.forEach(contar)
    console.log('Quantidade A:', qtdA);
    console.log('Quantidade A:', qtdB);
    console.log('Quantidade A:', qtdC);
    console.log('Quantidade A:', qtdD);
    console.log('Quantidade A:', qtdE);

    document.getElementById("abcde").value = "a" + qtdA + "b" + qtdB + "c" + qtdC + "d" + qtdD + "e" + qtdE;

    if(qtdA > qtdB && qtdA > qtdC){
        if(qtdA > qtdD && qtdA > qtdE){
          document.getElementById("tela").value = "Maioria de 'a':Você tem inclinação para áreas de Ciências Exatas ou Tecnologia (ex.: Engenharia, Ciência da Computação, Matemática)."
        }
    }

     else if(qtdB > qtdA && qtdB > qtdC){
        if(qtdB > qtdD && qtdB > qtdE){
          document.getElementById("tela").value = "Maioria de 'b': Você se identifica com Artes ou Comunicação (ex.: Design, Publicidade, Jornalismo, Letras)."
        }
    }

     else if(qtdC > qtdA && qtdC > qtdB){
        if(qtdC > qtdD && qtdC > qtdE){
          document.getElementById("tela").value = "Maioria de 'c': Você tem interesse em Ciências Humanas ou Saúde (ex.: Psicologia, Medicina, Pedagogia, Serviço Social)."
        }
    }

     else if(qtdD > qtdA && qtdD > qtdC){
        if(qtdD > qtdB && qtdD > qtdE){
          document.getElementById("tela").value = "Maioria de 'd': Você se conecta com Ciências Biológicas ou Ambientais (ex.: Biologia, Agronomia, Gestão Ambiental)."
        }
    }

     else if(qtdE > qtdA && qtdE > qtdC){
        if(qtdE > qtdD && qtdE > qtdB){
          document.getElementById("tela").value = "Maioria de 'e': Você tem perfil para Gestão ou Negócios (ex.: Administração, Economia, Direito)."
        }
    }

     
}

