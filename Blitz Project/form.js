<script>
var botaoAdicionar = document.querySelector("#adicionar-paciente");
var run = google.script.run.withFailureHandler(onFailure);
function onFailure(e) {

}
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //pega as informações do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteForm(form);

    //cira tr e td's
    var pacienteTr = montarTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMenssagensDeErro(erros);
        return;
    }

    //adiciona na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    form.reset();
    
    var mensagemDeErro = document.querySelector("#mensagem-erro");
    mensagemDeErro.innerHTML = "";
    
    run.withSuccessHandler(function(response) {
    console.log(response);
   }).addPlanilha(paciente);
});

function obtemPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    //coloca as strings como variavel global, se tiver que mudar a string, só impacta a variável global
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo 'gordura' não pode ser em branco!");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo 'peso' não pode ser em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo 'altura' não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido!");
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push("Peso Inválido!");
    }
    return erros;
}

function exibeMenssagensDeErro(erros){

    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
</script>