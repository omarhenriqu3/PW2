import { Exames }  from "./examefuncao.js";

const perguntas = ["1", "2", "3"];
const pesos = [2, 3, 5];
const respostas = ["A", "B", "C"];

const prova = new Exames(perguntas, pesos, respostas);

const respostasAluno = ["A", "C", "C"];

console.log("Nota do aluno:", prova.corrigir(respostasAluno));
prova.mostrarGabarito();
