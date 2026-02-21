export class Negociacao {
   private _data: Date = new Date();
    private _quantidade: number = 0;
    private _valor: number = 0;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date{
        return this._data;
    }
    get quantidade(): number{

return this._quantidade;

    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }
}