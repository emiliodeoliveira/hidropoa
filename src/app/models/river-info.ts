export class RiverInfo{
    public horDataHora: Date;
    private horNivelAdotado: number;
    private horEstacao: number;

    constructor(horDataHora: Date, horNivelAdotado: number,horEstacao: number) {
        this.horDataHora = horDataHora;
        this.horNivelAdotado = horNivelAdotado;
        this.horEstacao = horEstacao
    }

    getLastDate(){
        console.log(this.horDataHora)
        return this.horDataHora
    }
    getRiverLevel(){
        return this.horNivelAdotado
    }
    getStationId(){
        return this.horEstacao
    }
}