import { CadastroAluno } from './modulos/cadastro_aluno.js';
import { mostrarCadastro, limparTabela, alternarTema } from './utils/utils.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCadastrar").addEventListener("click", CadastroAluno);
  document.getElementById("mostrarCadastro").addEventListener("click", mostrarCadastro);
  document.getElementById("btnLimparTabela").addEventListener("click", limparTabela);

   const botaoTema = document.getElementById("botaoTema");
  botaoTema.addEventListener("click", () => alternarTema(botaoTema));
});