export function calcularMedia(notas) {
  const soma = notas.reduce((soma, valor) => soma + valor, 0);
  return soma / notas.length;
}
//fazer validacao de ver se aluno ja esta na lista com nome 'alunoJaCadastrado
