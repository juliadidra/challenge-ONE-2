
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");
var formcontato__botao = document.getElementsByClassName("formcontato__botao")[0]
var formcontato__form = document.getElementsByClassName("formcontato__form")[0]

var arrayInputs = [nome, email, assunto, mensagem]

function validaInputVazio(){

    arrayInputs.forEach((input) =>{
        if(input.value == ""){
            input.placeholder = `insira um ${input.id}`
        }

    })
  
}


formcontato__form.addEventListener("submit", (e) => {
    e.preventDefault()
     
    validaInputVazio()

 })



