import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement | null;
    private inputQuantidade: HTMLInputElement | null;
    private inputValor: HTMLInputElement | null;
    
    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

        adiciona(){
        if (!this.inputData || !this.inputQuantidade || !this.inputValor) {
            throw new Error('Um ou mais campos de input não foram encontrados no DOM.');
        }
        const data = new Date(this.inputData.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(
            data,
            quantidade,
            valor
        );
        console.log(negociacao);
    }
}