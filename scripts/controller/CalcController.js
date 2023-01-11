class CalcController {

    constructor(){
        this._displayCalEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    initialize (){
        let buttons = document.querySelectorAll('td > button');

        buttons.forEach(btn=>{
            this.addEventListenerAll(btn, 'click drag', e=>{
                console.log(btn.className.replace('btn-',''));
            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=>{
                btn.style.cursor = 'pointer';
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