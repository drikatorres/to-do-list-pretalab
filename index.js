let id = 0

const tarefa = (id, novaTarefa) => `<div id = '${id}'>
<input type="checkbox" onchange="marcarTarefa(${id})"/>
<p id='${id}'>${novaTarefa}</p>
<button onclick="removerTarefa(${id})">Remover Tarefas</button>
</div>`


function exibirLista() {
    const tarefas = JSON.parse(localStorage.getItem('lista-tarefa'))
    if (tarefas) {
        tarefas.forEach(tarefaListada => {
            id++
            document.querySelector('#lista-tarefas').innerHTML += tarefa(id, tarefaListada)
        });
    }
}

const marcarTarefa = (id) => {
    const strike = document.getElementById(`strike${id}`)
    if(strike){
        document.getElementById(id).innerHTML = strike.innerHTML
    } else {
        const tarefaConcluida = document.getElementById(id).innerHTML
        document.getElementById(id).innerHTML = `<strike id='strike${id}'>${tarefaConcluida}</strike>`
    }
}

const validarTarefa = (novaTarefa) => {
    let tarefaExistente = false
    const listaTarefas = JSON.parse(localStorage.getItem('lista-tarefas'))
    listaTarefas.map(tarefa => {
        if (tarefa === novaTarefa) {
            tarefaExistente = true
            alert('Tarefa já adicionada')
        }
        
    })
        return tarefaExistente
}

function adicionarTarefa() {
    id++
    const novaTarefa = document.getElementById('nome-tarefa').value //pega o valor que está inserido no input
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id, novaTarefa)
    const listaTarefas = localStorage.getItem('lista-tarefas')
    validarTarefa(JSON.parse(listaTarefas))
    if (listaTarefas) {
        //incrementar a lista de tarefas
        const novaLista = JSON.parse(listaTarefas)
        novaLista.push(novaTarefa)
        localStorage.setItem('lista-tarefas', JSON.stringify(novaLista))
    } else {
        localStorage.setItem('lista-tarefas', JSON.stringify([novaTarefa]))
    }  
}

const removerTarefa = (id) => {
    const tarefaDeletada = document.getElementById(id).innerHTML
    //JSON.parse transforma String em array
    const listaTarefas = JSON.parse(localStorage.getItem('lista-tarefas'))
    //retorna tarefas diferentes de tarefas deletadas
    const novaListaTarefa = listaTarefas.filter(tarefa => tarefa !== tarefaDeletada)
    localStorage.setItem('lista-tarefas', JSON.stringify(novaListaTarefa))
    document.querySelector('#lista-tarefas').innerHTML = ''
    alert('Esse botão remove todas as tarefas')
    exibirLista()

}

exibirLista()
