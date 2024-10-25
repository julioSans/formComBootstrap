$(document).ready(function(){
  $('#telefone').inputmask('(99) 99999-9999'); 
});

// Sintaxed preciso criar uma funcao que ao colocar os email faca 
// uma verificacao se o email for igual enviar o email 
// se não peca para colocar um email valido 

function valedateEmails(){
  var email = document.getElementById("email").value;
  var ComfirEmail = document.getElementById('ComfirEmail').value; 
  var MsgError = document.getElementById('MsgError'); 

  if (email !== ComfirEmail) {
    MsgError.style.display = 'inline'; 
    return false; 
  }
  else {
    MsgError.style.display = 'none'
    return true; 
  }
}
document.getElementById('email').addEventListener('input', function(){
    document.getElementById('MsgError').style.display = 'none'; 
})

document.getElementById('ComfirEmail').addEventListener(input, function(){
    document.getElementById('MsgError').style.display = 'none';
}); 