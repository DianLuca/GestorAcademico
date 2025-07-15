import { calcularMedia, alunoJaCadastrado } from './aluno_notas.js';
import { adicionarAluno, limparFormulario, exibirMensagem } from '../utils/utils.js';

export function CadastroAluno() {
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const frequencia = parseFloat(document.getElementById("frequencia").value);
  const notasInput = document.getElementById("notas").value;
  const notas = notasInput.split(",").map(nota => parseFloat(nota.trim()));

  const nomeComposto = nome.split(" ").filter(palavra => palavra).length >= 2;

  let erro = false;

  if (!nomeComposto || nome === '' || alunoJaCadastrado(nome) === true) {
    exibirMensagem("nome");
    erro = true;
  }

  if (!idade || isNaN(parseInt(idade))) {
    exibirMensagem("idade");
    erro = true;
  }

  if (isNaN(frequencia)) {
    exibirMensagem("frequencia");
    erro = true;
  }

  if (notas.length !== 4 || notas.some(isNaN)) {
    exibirMensagem("notas");
    erro = true;
  }


  const mensagemErro = document.getElementById('Erro');

  if (erro) {
    return;
  } else {
    mensagemErro.innerHTML = '';
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
