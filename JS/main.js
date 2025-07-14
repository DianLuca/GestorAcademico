// Iniciar os comandos JS 

// Oque está faltando:
// - Validação de verificar se o aluno ja esta cadastrado
// - verificar se tem outra forma de fazer os alertas sem ser pelo alert('')
 
document.addEventListener("DOMContentLoaded", () => {
  const AdicionarAluno = document.getElementById("btnCadastrar");
  const Tabela = document.getElementById("TabelaAluno").querySelector("tbody");


  AdicionarAluno.addEventListener("click", () => {
    const Nome = document.getElementById("nome").value.trim();
    const Idade = document.getElementById("idade").value.trim();
    const Frequencia = parseFloat(document.getElementById("frequencia_ano").value);
    const Notas = document.getElementById("notas_geral").value.split(",").map((nota) => parseFloat(nota.trim()));


    const NomeComposto = Nome.split(" ").filter((nome) => nome.length > 0).length >= 2;
    if (!NomeComposto || !Idade || isNaN(Frequencia) || Notas.length !== 4 || Notas.some(isNaN)) {
      alert("Preencha todos os campos corretamente:\n- Nome composto\n- Idade válida\n- 4 notas numéricas\n- Frequência numérica");
      return;
    }


    const SomarNotas = Notas.reduce((total, nota) => total + nota, 0);
    const Media = SomarNotas / 4;


    let status = "";
    if (Frequencia < 75 || Media < 5) {
      status = "Reprovado";
    } else if (Media < 7) {
      status = "Recuperação";
    } else {
      status = "Aprovado";
    }


    const NovoDado = document.createElement("tr");
    NovoDado.innerHTML = `
      <td>${Nome}</td>
      <td>${Idade}</td>
      <td>${Frequencia}%</td>
      <td>${Notas.join(", ")}</td>
      <td>${status}</td>
      <td><button>Remover</button></td>
    `;


    NovoDado.querySelector("button").addEventListener("click", () => {
      NovoDado.remove();
    });


    Tabela.appendChild(NovoDado);


    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("frequencia_ano").value = "";
    document.getElementById("notas_geral").value = "";
  });



  // Para ocultar ou não o cadastro
  const mostrarCadastro = document.querySelector('#mostrarCadastro');

  mostrarCadastro.addEventListener('click', () => {
    const cadastro = document.querySelector('form');
    
    cadastro.classList.toggle('ocultar');
    
  })

});
