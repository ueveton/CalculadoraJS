class CalcController {

    constructor(){
        this._displayCalEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
    }

    initialize (){
        document.querySelectorAll('td > button');
    }

    get displayCal (){
        return this._displayCalcEl.innerHTML;
    }

    set displayCal (value){
        this._displayCalcEl.innerHTML = value;
    }
}