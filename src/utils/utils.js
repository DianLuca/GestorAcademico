export function adicionarAluno({ nome, idade, frequencia, notas, status }) {
  const tabela = document.querySelector("#TabelaAluno tbody");
  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${idade}</td>
    <td>${frequencia}%</td>
    <td>${notas.join(", ")}</td>
    <td>${status}</td>
    <td><button class="remover-btn">Remover</button></td>
  `;

  novaLinha.querySelector(".remover-btn").addEventListener("click", () => {
    novaLinha.remove();
  });

  tabela.appendChild(novaLinha);
}

export function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("frequencia_ano").value = "";
  document.getElementById("notas_geral").value = "";
}

export function exibirMensagem(mensagem) {
 alert(mensagem); 
}

// Para ocultar ou não o cadastro
export function mostrarCadastro() {
  const cadastro = document.querySelector('form');
    
  cadastro.classList.toggle('ocultar');
}

export function limparTabela(){
  if(confirm("Deseja excluir os registros de todos os alunos?")){
    const tabela = document.querySelector("#TabelaAluno tbody");
    tabela.innerHTML = "";
    exibirMensagem("Os registros foram exluidos");
  }
}