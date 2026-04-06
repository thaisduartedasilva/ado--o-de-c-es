document.getElementById(formularioAdocao).addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value; 
    let email = document.getElementById("email").value; 
    let moradia = document.getElementById("moradia").value; 
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let telefone = document.getElementById("telefone").value;
    let CPF = document.getElementById("CPF").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let pet = document.querySelector('input[name="pet"]:checked');
    let horasSozinho = document.getElementById("horasSozinho").value;
    let motivo = document.getElementById("motivo").value;
    let responsabilidade = document.getElementById("responsabilidade").value;

    
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
    if(horasSozinho > 8) return alert ("Você não pode adotar! Você fica muito tempo fora de casa!"); //Solicitar justificativa adicional
    if(motivo.length < 10) return alert("Motivo da adoção inválido!");
    // termo deve estar marcado ?????????

    document.getElementById("resultado"). innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome;
    //

});