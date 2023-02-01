class CalcController {

    constructor(){
        this._operation = [];
        this._displayCalcEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){
        this._operation = [];
    }

    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    setLastOperation(value){
        this._operation[this._operation.length -1] = value;
    }

    isOperator(value){
        return(['+','-','/','*'].indexOf(value) > -1);
    }

    addOperation (value){

        if (isNaN(this.getLastOperation())){

            if(this.isOperator(value)){
                this._setLastOperation(value);
            } else if(isNaN(value)) {
                console.log(value);
            } else{
                this._operation.push(value);
            }

        } else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));

        }
        console.log(this._operation);
    }

    errorCalc(){
        this.displayCal = 'Error';
    }

    execBtn(value){
        switch (value) {
            case 'c':
                this.clearAll();
            break;
            case 'soma':
                this.addOperation('+');
            break;
            case 'subtracao':
                this.addOperation('-');
            break;
            case 'multiplicacao':
                this.addOperation('*');
            break;
            case 'divisao':
                this.addOperation('/');
            break;
            case 'igual':
                
            break;
            case 'ponto':
                this.addOperation('.');
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.errorCalc();
            break;
        }
    }

    initialize (){
        let buttons = document.querySelectorAll('td > button');

        buttons.forEach(btn=>{
            this.addEventListenerAll(btn, 'click drag', e=>{
                
                let textBtn = btn.className.replace('btn-','');
                this.execBtn(textBtn);
                
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