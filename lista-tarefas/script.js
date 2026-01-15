let tarefas = [];

function adicionarTarefa()
{
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  if(tarefa == "")
  {
    mensagem.style.color = "#A34743";
    mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!!";
    
    mensagem.textContent = mensagemErro;
  } else
  {
    mensagem.style.color = "#28A745";
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;

    tarefas.push(tarefa);

    renderizarTarefas();
  }

  inputTarefa.value = "";
}

function renderizarTarefas()
{
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++)
  {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.appendChild(botaoRemover);
    novaTarefa.appendChild(botaoEditar);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa (i)
{
  tarefas.splice(i, 1);
  mensagem.style.color = "#000000";
  let mensagemRemover = "Tarefa Removida com sucesso!";
  mensagem.textContent = mensagemRemover;
  renderizarTarefas();
}

function editarTarefa (i)
{
  let tarefaEditada = prompt("Edite a tarefa:");
  if (tarefaEditada.trim() !== "")
  {
    tarefas[i] = tarefaEditada;
    mensagem.style.color = "#000000";
    let mensagemEditar = "Tarefa Editada com sucesso!";
    mensagem.textContent = mensagemEditar;
    renderizarTarefas();
  }
}

function limparLista ()
{
  if (tarefas.length == 0)
  {
    mensagem.style.color = "#000000";
    let mensagemVazia = "Não existem tarefas para serem limpas!";
    mensagem.textContent = mensagemVazia;
    renderizarTarefas();
  } else
  {
    tarefas.length = 0;
    mensagem.style.color = "#000000";
    let mensagemLista = "Lista limpa com sucesso!";
    mensagem.textContent = mensagemLista;
    renderizarTarefas();
  }
  
}