import { CadastroAluno } from './modulos/cadastro_aluno.js';
import { mostrarCadastro } from './utils/utils.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCadastrar").addEventListener("click", CadastroAluno);
  document.getElementById("mostrarCadastro").addEventListener("click", mostrarCadastro);
});