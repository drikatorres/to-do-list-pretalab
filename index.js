function adicionarTarefa() {
    const tarefa = document.createElement('div')
    tarefa.innerHTML = 'Tarefa'
    tarefa.id = 'id-tarefa'
    document.querySelector('#lista-tarefas').appendChild(tarefa)
}