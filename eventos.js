
function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = buscar().length;
}


function listarTarefas() {
    let conteudo = buscar().map(function (tarefa) {
        return `
            <div>
                <input type="checkbox"> 
                ${tarefa.titulo.toLowerCase()}
                <span class="badge 
                ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
                ${tarefa.prioridade === 'Media' && 'bg-warning'} 
                ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                    ${tarefa.prioridade}
                </span>
            </div>
        `;
    }).sort();
    document.getElementById('tarefas').innerHTML = conteudo.join('');

}

function addTarefa() {

    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    let tituloValido = false;

    if (titulo.trim() !== '') {
        let titulos = buscar().map((tarefa) => {
            return tarefa ? tarefa.titulo : ""; //transformando o objeto tarefa em um array de string pra poder ser comparada 
        });


        titulos.forEach((t) => {
            if (true === t.includes(titulo)) {
                tituloValido = false; 
                return;
            }
        });
        
    }else{
        alert('Tarefa vazia não pode ser listada');
        return;
    }

    if(tituloValido === true)
    {
        salvar(titulo,input_prioridade.value);
        atualizarQuantidade();
        document.getElementById('input_nova_tarefa').value = '';
        listarTarefas();
    }else{
        alert('Tarefa duplicada ou vazia não pode ser listada');
    }
}



//vai acontecer assim que o usuario entrar na pagina
listarTarefas();
