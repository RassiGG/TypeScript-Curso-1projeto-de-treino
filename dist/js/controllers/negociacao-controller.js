import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        const data = document.querySelector('#data');
        const quantidade = document.querySelector('#quantidade');
        const valor = document.querySelector('#valor');
        if (!data || !quantidade || !valor) {
            throw new Error('Elemento do formulário não encontrado');
        }
        this.inputData = data;
        this.inputQuantidade = quantidade;
        this.inputValor = valor;
    }
    adiciona() {
        const negociacao = this.crianegociacao();
        console.log(negociacao);
        this.limparformulario();
    }
    crianegociacao() {
        const exp = /-/g;
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const date = new Date(this.inputData.value.replace(exp, ','));
        return new Negociacao(date, quantidade, valor);
    }
    limparformulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
