document.getElementById("formAdocao").addEventListener("submit", function (e) {
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
    let responsabilidade = document.getElementById("responsabilidade");


    if (nome.length < 3) return alert("Nome Inválido!");
    if (!email.includes("@")) return alert("Email inválido!");
    if (telefone.length < 8) return alert("Número de telefone inválido!");
    if (CPF === "") return alert("CPF obrigatório!");

    let cpfsExistentes = ["12345678900", "11111111111"];
    if(cpfsExistentes.includes(CPF)) {
        return alert("CPF já cadastrado! Informar um CPF válido!");
    }

    if (idade < 18) return alert("Você ainda é menor de idade!");
    if (cidade === "") return alert("Cidade obrigatória!");

    if (moradia === "") return alert("Selecione o tipo de moradia!");

    if (moradia === "apartamento") {
        if (quintal.value === "sim") {
            return alert("Você mora em apartamento, você não tem quintal!");

        }
    }

    if (!quintal) return alert("Informe se possui quintal!");
    if (!pet) return alert("Informe se já teve pet!");
    if (isNaN(horasSozinho)) return alert("Valor numérico inválido!");
    if (horasSozinho > 8) {
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if (!justificativa || justificativa.length < 5) {
            return alert("Justificativa insuficiente!");
        }
    }
    if (motivo.length < 10) return alert("Motivo da adoção inválido!");
    if (motivo.includes("hoje") || motivo.includes("agora")) {
        alert("Decisão impulsiva! Você não pode adotar um pet!");
    }

    let motivosInvalidos = ["quero", "porque sim", "sim", "gosto"];
    if (motivosInvalidos.includes(motivo)) {
        return alert("O motivo da adoção não pode ser genérico!");
    }

    if (!responsabilidade.checked) return alert("Você deve aceitar os termos de responsabilidade!");

    if (pet.value === "nao") {
        alert("Você nunca teve pets antes. A ONG devera acompanhar sua adaptação com o pet.");
    }

    let salario = prompt("Informe o seu salário: ");
    if (salario <= 1000) {
        return alert("Salário insuficiente! Você não tem codições de ter um pet!");
    } else {
        alert("Você tem condições financeiras de ter um pet!");
    }

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso ! <br>" + "Nome: " + nome; 


});

document.getElementById("moradia").addEventListener("change", function(e) {

    let aceitaPet = document.getElementById("aceitaPet");

    if (this.value === "apartamento") {
        aceitaPet.innerHTML = `
            <label>O apartamento aceita pets?</label><br>
            <input type="radio" name="aceitaPet" value="sim"> Sim
            <input type="radio" name="aceitaPet" value="nao"> Não
        `;
    } else if(this.value === "casa") { 
        aceitaPet.innerHTML = `
            <label>O seu quintal é seguro?</label><br>
            <input type="radio" name="aceitaPet" value="sim"> Sim
            <input type="radio" name="aceitaPet" value="nao"> Não
        `;
    }

});