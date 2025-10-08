export class Exames {
    constructor(perguntas, pesos, respostas) {
        this.perguntas = perguntas;
        this.pesos = pesos;
        this.respostas = respostas;
    }

    corrigir(respostasAluno) {
        let totalPeso = 0;
        for (let i = 0; i < this.pesos.length; i++) {
            totalPeso += this.pesos[i];
    }

    let pontos = 0;
    for (let i = 0; i < this.perguntas.length; i++) {
        if (respostasAluno[i] === this.respostas[i]) {
            pontos += this.pesos[i];
        }
    }

    let notaFinal = (pontos / totalPeso) * 10;
    return Number(notaFinal.toFixed(1));
    }

    mostrarGabarito() {
        console.log("Gabarito:");
        for (let i = 0; i < this.perguntas.length; i++) {
            console.log(`Pergunta ${this.perguntas[i]} - Resposta correta: ${this.respostas[i]} (Peso ${this.pesos[i]})`);
        }
    }
}
