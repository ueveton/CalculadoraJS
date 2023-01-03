class CalcController {

    constructor(){
        this._displayCalc = '0';
    }

    get displayCal (){
        return this._displayCalc;
    }

    set displayCal (valor){
        this._displayCalc = valor;
    }
}