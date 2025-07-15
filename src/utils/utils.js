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
  document.getElementById("frequencia").value = "";
  document.getElementById("notas").value = "";

  ['nome', 'idade', 'frequencia', 'notas'].forEach(id => {
    document.getElementById(`${id}Erro`).textContent = "";
  });
}

export function exibirMensagem(local) {
  const erro = document.getElementById(`${local}Erro`);
  let campo = local;

  if (local === 'frequencia') {
    campo = 'frequência';
  }

  erro.textContent = `O campo ${campo} não foi preenchido corretamente.`;
  return false;
}

export function mostrarCadastro() {
  const cadastro = document.querySelector('form');
  cadastro.classList.toggle('ocultar');
}

// mantenha somente essa, pois estava danod erro com função duplicada
export function limparTabela(){
  if(confirm("Deseja excluir os registros de todos os alunos?")){
    const tabela = document.querySelector("#TabelaAluno tbody");
    tabela.innerHTML = "";
    exibirMensagem("Os registros foram exluidos");
  };
}