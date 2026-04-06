document.getElementById(formularioAdocao).addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value; 
    let email = document.getElementById("email").value; 
    let moradia = document.getElementById("moradia").value; 
    let quintal = document.querySelector('input[name="quintal"]:checked');
    
    if(nome.length < 3) return alert("Nome Inválido!");
    // como faz o @?????
    if(telefone < 8) return alert("Número de telefone inválido!");
    //cpf obrigaório????
    if(idade < 18) return alert("Você ainda é menor de idade!");
    //cidade obrigatório???
    //tipo de moradia obrigatório??????
    //possui quintal obrigatório????????
    //ja teve pet obrigatóio???
    if(horasSozinho = NaN) return alert("Valor númerico inválido!"); // ta errado
    if(motivo.length < 10) return alert("Motivo da adoção inválido!");
    // termo deve estar marcado ?????????

    document.getElementById("resultado"). innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome;

});