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
  var msgSuccess = document.getElementById('msg-Success'); 

  if (email !== ComfirEmail) {
    MsgError.style.display = 'inline'; 
    return false; 
  }
  else {
    MsgError.style.display = 'none'
    msgSuccess.style.display = 'inline'
    return true; 
  }
}

document.getElementById("submit-form").addEventListener('click', function(event) {
  event.preventDefault(); 
  
  if (valedateEmails())  {
    document.getElementById('email-Form').valreset(); 
  }
});

document.querySelectorAll("#email-Form").forEach(input => {
  input.addEventListener("input", function() {
    document.getElementById("msg-Success").style.display = 'none';
  });

  document.getElementById('email').addEventListener('input', function() {
      document.getElementById('MsgError').style.display = 'none'; 
  });
  
  document.getElementById('ConfirEmail').addEventListener('input', function() {
      document.getElementById('ConfirEmail').style.display = 'none'; 
  })

});