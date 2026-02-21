import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        const data = document.querySelector('#data');
        const quantidade = document.querySelector('#quantidade');
        const valor = document.querySelector('#valor');

        if (!data || !quantidade || !valor) {
            throw new Error('Elemento do formulário não encontrado');
        }

        this.inputData = data as HTMLInputElement;
        this.inputQuantidade = quantidade as HTMLInputElement;
        this.inputValor = valor as HTMLInputElement;
    }

        adiciona(): void{
            const negociacao = this.crianegociacao();
        console.log(negociacao);
        this.limparformulario();
    }
    crianegociacao(): Negociacao{
            const exp = /-/g;  
            const quantidade = parseInt(this.inputQuantidade.value);
            const valor = parseFloat(this.inputValor.value);
            const date = new Date(this.inputData.value.replace(exp, ','));
            return new Negociacao( date, quantidade, valor );
        
    }
    limparformulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        
    }
}