import { calcularMedia, alunoJaCadastrado } from './aluno_notas.js';
import { adicionarAluno, limparFormulario, exibirMensagem } from '../utils/utils.js';

export function CadastroAluno() {
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const frequencia = parseFloat(document.getElementById("frequencia").value);
  const notasInput = document.getElementById("notas").value;
  const notas = notasInput.split(",").map(nota => parseFloat(nota.trim()));

  const nomeComposto = nome.split(" ").filter(p => p).length >= 2;

  // if (!nomeComposto || !idade || isNaN(frequencia) || notas.length !== 4 || notas.some(isNaN)) {
  //   exibirMensagem("Preencha todos os campos corretamente:\n- Nome composto\n- Idade\n- 4 notas numéricas\n- Frequência numérica");
  //   return;
  // }
  if (!nomeComposto || nome === ''){
    exibirMensagem("nome");
  }

  if (!idade) {
    exibirMensagem("idade");
  }

  if (isNaN(frequencia)) {
    exibirMensagem('frequencia');
  }

  if ((notas.length !==4) || notas.some(isNaN)){
    exibirMensagem('notas')
  }

  if (exibirMensagem() === false){
    return
  }

  const media = calcularMedia(notas);
  let status = "";

  if (frequencia < 75 || media < 5) {
    status = "Reprovado";
  } else if (media < 7) {
    status = "Recuperação";
  } else {
    status = "Aprovado";
  }

  adicionarAluno({ nome, idade, frequencia, notas, status });
  limparFormulario();
}
