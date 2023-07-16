// Preferências de Carne (Radio)
function selecionarCarne(elemento) {
    var opcoes = document.getElementsByClassName("radio");
    for (var i = 0; i < opcoes.length; i++) {
      opcoes[i].classList.remove("selecionar");
    }
    elemento.classList.add("selecionar");
  }

function validarPreferenciaDeCarne() {
    var opcoes = document.getElementsByClassName("radio");
    var algumaSelecionada = false;

    for (var i = 0; i < opcoes.length; i++) {
      if (opcoes[i].classList.contains("selecionar")) {
        algumaSelecionada = true;
        break;
      }
    }

    if (algumaSelecionada) {
      console.log("Seleção ok.");
    } else {
      alert("Selecione ao menos uma opção, por favor.");
    }
  }

//Checkbox
function ligarCheckBox(element) {
    var checkboxInner = element.querySelector('.checkbox-dentro');
    var isSelected = checkboxInner.getAttribute('data-selected') === 'true'
    checkboxInner.setAttribute('data-selected', !isSelected);
    SelecionaTudo();
  }

  function LigarTodosCheckboxes() {
    var checkboxes = document.querySelectorAll('.checkbox-dentro');
    var selectAll = document.getElementById('marcarTodos');
    var allSelected = selectAll.getAttribute('data-selected') === 'true'

    checkboxes.forEach(function (checkbox) {
      checkbox.setAttribute('data-selected', !allSelected);
    });

    SelecionaTudo();
  }

  function SelecionaTudo() {
    var checkboxes = document.querySelectorAll('.checkbox-dentro');
    var selectAll = document.getElementById('marcarTodos');

    var allSelected = true;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.getAttribute('data-selected') !== 'true') {
        allSelected = false;
      }
    });

    selectAll.setAttribute('data-selected', allSelected);
  }


//Validar Formulário 
function validar() {

/* id pro nome = colocarNome
id pro email = proEmail
id pro telefone = proTelefone
*/

let validaNome = document.getElementById("colocarNome");

let validaEmail = document.getElementById("proEmail");

let validaTelefone = document.getElementById("proTelefone");

let validaTextArea = document.getElementById("colocaTextArea");

let regexTelefone = /^(\d{2})?\s*(\d{4,5})\s*(\d{4})$/;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexNome = /^[a-zA-Z]+ [a-zA-Z]+$/;
  
if (validaNome.value.length == ""){

  alert("O nome não pode ficar vazio");
}
  else{
    console.log("Nome correto");
  }

if(regexNome.test(validaNome.value)){
  console.log("Nome válido");
}
  else{
    alert("Coloque um Nome e Sobrenome");
  }

let novoTelefone = validaTelefone.value.replace(/[^\d]/g, '');
if(regexTelefone.test(novoTelefone) && novoTelefone.length == 11){
  console.log("telefone Está valido")
}
  else{
    alert("Coloque o numero de telefone, com 11 caracteres e sem pontuação");
  }
    
if(validaTextArea.value.length == ""){

  alert("Escreva-nos uma mensagem");
}

if(validaTextArea.value.length < 5){
  alert("Escreva uma mensagem de ao menos 5 caracteres");
}

if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validaEmail.value)){

  console.log("Email valido");
}
  else{
    alert("Coloque um E-mail Válido, por favor.")
  }
}  

// let botaoRadio = document.querySelectorAll(".radio");

// botaoRadio.forEach((button) => {
//   button.addEventListener('click', () => {
//     botaoRadio.forEach((btn) => {
//       btn.classList.remove('selected');
//     });
//     button.classList.add('selected');
//   });
// });  

//Fazer Select funcionar.
window.addEventListener('DOMContentLoaded', function() {
    const funcionar = document.querySelector('#favoritas .funcionar');
    const opcoes = document.querySelector('#favoritas .opcoes');
    const opcao = document.querySelectorAll('#favoritas .opcao');

    let opcaoSelecionada = false;

    funcionar.addEventListener('click', () => {
      opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
    });

    opcao.forEach((opcao3) => {
      opcao3.addEventListener('click', () => {
        const selecionada = opcao3.textContent;
        funcionar.textContent = selecionada;
        opcoes.style.display = 'none';
        opcaoSelecionada = true;
      });
    });

    function validarOpcaoSelecionada() {

document.addEventListener('DOMContentLoaded', function() {
  var funcionar = document.querySelector('.funcionar');
  var opcoes = document.querySelector('.opcoes');

  funcionar.addEventListener('click', function() {
    opcoes.style.display = opcoes.style.display === 'none' ? 'block' : 'none';
  });

  var opcaoItens = document.querySelectorAll('.opcao');
  opcaoItens.forEach(function(opcao) {
    opcao.addEventListener('click', function() {
      var selecao = opcao.innerText;
      funcionar.innerText = selecao;
      opcoes.style.display = 'none';
    });
  });
});
      if (!opcaoSelecionada) {
        alert('Selecione ao menos uma opção.');
      }else{
        console.log('Seleção Tudo ok.')
      }
    }

    document.querySelector('form').addEventListener('submit', (e) => {
      validarOpcaoSelecionada();
      e.preventDefault();
    });
  })



function entregarFormulario() {
  let validaNome = document.getElementById("colocarNome");
  let validaEmail = document.getElementById("proEmail");
  let validaTelefone = document.getElementById("proTelefone");
  let validaTextArea = document.getElementById("colocaTextArea");
  let opcaoSelecionada = false;


  if (validaNome.value.length === 0) {
    alert("O nome não pode ficar vazio");
    return;
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(validaNome.value)) {
    alert("Coloque um Nome e Sobrenome");
    return;
  }


  let novoTelefone = validaTelefone.value.replace(/[^\d]/g, '');
  if (novoTelefone.length !== 11) {
    alert("Coloque o numero de telefone com 11 caracteres e sem pontuação");
    return;
  }


  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validaEmail.value)) {
    alert("Coloque um E-mail Válido, por favor.");
    return;
  }


  if (validaTextArea.value.length === 0) {
    alert("Escreva-nos uma mensagem");
    return;
  } else if (validaTextArea.value.length < 5) {
    alert("Escreva uma mensagem de pelo menos 5 caracteres");
    return;
  }

  
  var funcionar = document.querySelector('#favoritas .funcionar');
  if (funcionar.textContent === 'Seleciona uma opção') {
    alert('Selecione pelo menos uma opção');
    return;
  }


  alert("Formulário enviado com sucesso!");
  location.reload();
}

//caso der errado, voltar pra cá. 7930
