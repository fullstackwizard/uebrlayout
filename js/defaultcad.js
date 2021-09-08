"use strict";

// Formatação de CPF/CNPJ RegEX 

function formatarCampo(campoTexto) {
    if (campoTexto.value.length <= 11) {
        campoTexto.value = mascaraCpf(campoTexto.value);
    } else {
        campoTexto.value = mascaraCnpj(campoTexto.value);
    }
}
function retirarFormatacao(campoTexto) {
    campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g,"");
}
function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}
function mascaraCnpj(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}

// FIM 

 

// Valida E-mail 

function validarEmail(){
    var email = document.querySelector('#txtEmail');
    var error = document.querySelector('#error-email');
    var label = document.querySelector('#labelEmail');
    if(!email.checkValidity()){
      
      error.style.display = 'flex';
      label.style.top = '0';
      label.style.fontSize = '13px';

    } else {
        error.style.display = 'none';
        label.style.top = '0';
        label.style.fontSize = '13px';
           }
     
  }
  
  // FIM 

  
  // valida TELEFONE 

 


