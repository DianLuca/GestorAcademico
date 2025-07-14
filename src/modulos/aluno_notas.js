export function calcularMedia(notas) {
  const soma = notas.reduce((soma, valor) => soma + valor, 0);
  return soma / notas.length;
}

export function alunoJaCadastrado(nome) {
  const linhas = document.querySelectorAll("#TabelaAluno tbody tr");
  for (const linha of linhas) {
    if (linha.children[0].textContent.toLowerCase() === nome.toLowerCase()) {
      return true;
    }
  }
  return false;
}