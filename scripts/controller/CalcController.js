class CalcController {

    constructor(){
        this._displayCalEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
    }

    initialize (){

    }

    get displayCal (){
        return this._displayCalcEl.innerHTML;
    }

    set displayCal (valor){
        this._displayCalcEl.innerHTML = valor;
    }
}