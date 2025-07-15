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
}

export function exibirMensagem(local) {
  const erro = document.getElementById(`${local}Erro`);
  const mensagemErro = document.getElementById('Erro');

  // erro.style.color = '#FF0000';
  erro.innerHTML = '&Otimes;';
  mensagemErro.innerHTML = `&Otimes; O campo não foi preenchido corretamente.`;
  

  return false;
}

// Para ocultar ou não o cadastro
export function mostrarCadastro() {
  const cadastro = document.querySelector('form');
    
  cadastro.classList.toggle('ocultar');
}