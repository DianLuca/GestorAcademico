import { calcularMedia, alunoJaCadastrado } from './aluno_notas.js';
import { adicionarAlunoNaTabela, limparFormulario, exibirMensagem } from '../utils/utils.js';

export function CadastroAluno() {
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const frequencia = parseFloat(document.getElementById("frequencia_ano").value);
  const notasInput = document.getElementById("notas_geral").value;
  const notas = notasInput.split(",").map(nota => parseFloat(nota.trim()));

  const nomeComposto = nome.split(" ").filter(p => p).length >= 2;

  if (!nomeComposto || !idade || isNaN(frequencia) || notas.length !== 4 || notas.some(isNaN)) {
    // sem alert exibirMensagem("Preencha todos os campos corretamente:\n- Nome composto\n- Idade\n- 4 notas numéricas\n- Frequência numérica");
    return;
  }

//if (alunoJaCadastrado(nome)) { fazer validação
//    exibirMensagem("Aluno já cadastrado.");
//    return;
//  }

  const media = calcularMedia(notas);
  let status = "";

  if (frequencia < 75 || media < 5) {
    status = "Reprovado";
  } else if (media < 7) {
    status = "Recuperação";
  } else {
    status = "Aprovado";
  }

  adicionarAlunoNaTabela({ nome, idade, frequencia, notas, status });
  limparFormulario();
}