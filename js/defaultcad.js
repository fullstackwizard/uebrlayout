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

  function inputHandler(masks, max, event) {
	var c = event.target;
	var v = c.value.replace(/\D/g, '');
	var m = c.value.length > max ? 1 : 0;
	VMasker(c).unMask();
	VMasker(c).maskPattern(masks[m]);
	c.value = VMasker.toPattern(v, masks[m]);
}

var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
var tel = document.querySelector('input[attrname=telephone1]');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);

 
  // valida TELEFONE 

 


