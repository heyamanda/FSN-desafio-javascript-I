// Base a ser utilizada
const alunosDaEscola= [
    {
      nome:"Henrique",
      notas:[],
      cursos:[],
      faltas:5
    },
    {
      nome:"Edson",
      notas:[],
      cursos:[],
      faltas:2
    },
    {
      nome:"Bruno",
      notas:[10,9.8,9.6],
      cursos:[],
      faltas:0
    },
    {
      nome:"Guilherme",
      notas:[10,9.8,9.6],
      cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
      faltas:0
    },
    {
      nome:"Carlos",
      notas:[],
      cursos:[],
      faltas:0
    },
    {
      nome:"Lucca",
      notas:[10,9.8,9.6],
      cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
      faltas:0
    }
];

// implementação
const adicionarAluno = alunoNovo => {
  alunosDaEscola.push({
      nome: alunoNovo,
      notas: [],
      cursos: [],
      faltas: 0
  });
  console.log(`Aluno ${alunoNovo} inserido na lista!`);
};

const listarAlunos = () => {
  for (let aluno of alunosDaEscola) {
      console.log(`
    Nome: ${aluno.nome}
    Notas: ${aluno.notas}
    Faltas: ${aluno.faltas}`);
      for (let curso of aluno.cursos) {
        console.log(`    Cursos: ${curso.nomeDoCurso}
    ------------------------------------------------------`);
      }        
  }
};

const buscarAluno = nomeAluno => {
    let alunoEncontrado = alunosDaEscola.filter(aluno => aluno.nome == nomeAluno);

    if(alunoEncontrado.length > 0) {
        console.log(`Encontramos um aluno com o nome: ${nomeAluno}`);
    }
    else {
        console.log(`Não encontramos nenhum aluno com esse nome!`);
    }
};

const matricularAluno = (alunoMatricula, curso) => {
    alunosDaEscola.filter((aluno) => {
        if (aluno.nome == alunoMatricula) {
            aluno.cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
            console.log(`O aluno ${alunoMatricula} foi matriculado no curso ${curso}!`);
        }
    });
};

const aplicarFalta = alunoFaltante => {
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == alunoFaltante && alunosDaEscola[i].cursos.length > 0) {
        let numeroDeFaltas = alunosDaEscola[i].faltas + 1;
        console.log(`Foi adicionada ${numeroDeFaltas} falta ao aluno ${alunoFaltante}`);
      }
    }
};

const aplicarNota = (aluno, nota) => {
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == aluno && alunosDaEscola[i].cursos.length > 0) {
        alunosDaEscola[i].notas.push(nota);
        console.log(`Nota ${nota} aplicada ao aluno ${aluno}`);
      }
    }
};

const aprovarAluno = aluno => {
    for (let i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome == aluno && alunosDaEscola[i].cursos.length > 0) {
        let soma = alunosDaEscola[i].notas.reduce((acumulado, valorNota) => acumulado + valorNota);
        let numeroFaltas = alunosDaEscola[i].faltas;
        let media = soma / alunosDaEscola[i].notas.length;
        if (media >= 7 && numeroFaltas <= 3) {
          console.log(`O aluno ${aluno} foi aprovado!!`);
        }
        else {
          console.log("Aluno reprovado");
        } 
      }
    }
};
