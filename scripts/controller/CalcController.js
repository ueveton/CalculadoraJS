class CalcController {

    constructor(){
        this._displayCalEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
    }

    initialize (){
        let buttons = document.querySelectorAll('td > button');

        buttons.forEach(btn=>{
            btn.addEventListener('click', e=>{
                console.log(btn.className.replace('btn-',''));
            });
        })
    }

    get displayCal (){
        return this._displayCalcEl.innerHTML;
    }

    set displayCal (value){
        this._displayCalcEl.innerHTML = value;
    }
}