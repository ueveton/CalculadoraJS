class CalcController {

    constructor(){
        this._displayCalc = '0';
        this.initialize();
    }

    initialize (){
        let displayCalEl = document.querySelector('#resultado');

        displayCalEl.innerHTML = '1253';

    }

    get displayCal (){
        return this._displayCalc;
    }

    set displayCal (valor){
        this._displayCalc = valor;
    }
}