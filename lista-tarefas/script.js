//Cria a função adicionarTarefa
function adicionarTarefa() {

  //Cria uma variável que armazena uma mensagem dentro dela
  let mensagemSucesso = "Tarefa adicionada com sucesso!";

  //a variável inputTarefa, recebe o elemento com id de "inputTarefa" do nosso HTML
  let inputTarefa = document.getElementById("inputTarefa");
  //coloca o VALOR do inputTarefa dentro da variável tarefa
  //o trim retira os espaços no começo e no final do texto
  let tarefa = inputTarefa.value.trim();

  //se o valor do input for vazio então mostre uma mensagem de erro para o usuário
  if(tarefa == "")
  {
    mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!!";
    document.getElementById("mensagem").textContent = mensagemErro;
  } else
  {
    //pega o elemento com ID "mensagem" no nosso HTML e troca o conteúdo do texto pela variável mensagem que declaramos no começo do código
    document.getElementById("mensagem").textContent = mensagemSucesso;
    //pega o elemento com o ID "listaTarefas" do nosso HTML (que é uma tag de lista UL)
    let listaTarefas = document.getElementById("listaTarefas");
    //cria um novo elemento LI para a nossa tag lista
    let novaTarefa = document.createElement("li");
    //coloca o VALOR do input tarefa dentro desse LI criado
    novaTarefa.textContent = tarefa;
    //Adiciona a variável "novaTarefa" na nossa lista de tarefas
    listaTarefas.appendChild(novaTarefa);
  }

  //Limpa o nosso campo de input
  inputTarefa.value = "";
}
