document .getElementById("formAdocao").addEventListener("submit", function (e) {
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
    if(!email.includes("@")) return alert("Email inválido!");
    if(telefone.length < 8) return alert("Número de telefone inválido!");
    if(CPF === "") return alert("CPF obrigatório!");//
    if(idade < 18) return alert("Você ainda é menor de idade!");
    if(cidade === "") return alert("Cidade obrigatória!");
    if(moradia === "") return alert("Selecione o tipo de moradia!");
    if(!quintal) return alert("Informe se possui quintal!");
    if(!pet) return alert("Informe se já teve pet!");
    if(isNaN(horasSozinho)) return alert("Valor numérico inválido!");
    if(horasSozinho > 8){
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if(!justificativa || justificativa.length < 5){
            return alert("Justificativa insuficiente!");
        }
    }
    if(motivo.length < 10) return alert("Motivo da adoção inválido!");

    let motivosInvalidos = ["quero", "porque sim", "sim", "gosto"];
    if(motivosInvalidos.includes(motivo)){
        return alert("O motivo da adoção não pode ser genérico!");
    }
    if(!responsabilidade.checked) return alert("Você deve aceitar os termos de responsabilidade!");
    if(pet.value === "nao"){
        alert("Você nunca teve pets antes. A ONG devera acompanhar sua adaptação com o pet.");
    }

    document.getElementById("resultado"). innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome;

});