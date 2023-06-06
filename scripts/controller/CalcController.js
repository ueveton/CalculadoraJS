class CalcController {

    constructor(){
        this._audio = new Audio('./music/click.mp3');
        this._audioOnOff = false;
        this._lastOperator = '';
        this._lastNumber = '';
        this._operation = [];
        this._displayCalcEl = document.querySelector('#resultado');
        //this._displayCalc = '0';
        this.initialize();
        this.clickAc();
        this.initKeyBoard();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){
        this._operation = [];
        this._lastNumber = '';
        this._lastOperator = '';
        this.setLastNumberToDisplay();
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

    pushOperation(value){
        this._operation.push(value);

        if(this._operation.length > 3) {
            this.calc();

        }
    }

    getResult(){
        return eval(this._operation.join(""));
    }

    calc(){

        let last = '';

        this._lastOperator = this.getLastItem();

        if (this._operation.length < 3){
            let firstItem = this._operation[0];

            this._operation = [firstItem, this._lastOperator, this._lastNumber];
        }

        if (this._operation.length > 3){
            last = this._operation.pop();
            this._lastNumber = this.getResult();

        }else if(this._operation.length == 3){
            this._lastNumber = this.getResult(false);
        }

        let result = this.getResult();

        this._operation = [result];
        if (last) this._operation.push(last);
        this.setLastNumberToDisplay();
    }

    getLastItem(isOperator = true){
        let lastItem;

        for (let i = this._operation.length - 1; i >= 0; i--){
            
            if (this.isOperator(this._operation[i]) == isOperator){
                lastItem = this._operation[i];
                break;
            }
        }

        if (!lastItem){
            lastItem = (isOperator)? this._lastOperator : this._lastNumber;
        }

        return lastItem;
    }

    setLastNumberToDisplay(){
            let lastNumber = this.getLastItem(false);
            
            if (!lastNumber) lastNumber = 0;
            this.displayCal = lastNumber;
    }

    addOperation (value){

        if (isNaN(this.getLastOperation())){

            if(this.isOperator(value)){
                this.setLastOperation(value);

            } else{
                this.pushOperation(value);
                this.setLastNumberToDisplay();
            }

        } else {

            if (this,this.isOperator(value)){
                this.pushOperation(value);

            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(newValue);

                this.setLastNumberToDisplay();
            }
        }
    }

    errorCalc(){
        this.displayCal = 'Error';
    }

    addDot(){

        let lastOperation = this.getLastOperation();

        if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;

        if (this.isOperator(lastOperation) || !lastOperation){
            this.pushOperation('0.');

        } else {
            this.setLastOperation(lastOperation.toString() + '.');
        }
        this.setLastNumberToDisplay();
    }

    execBtn(value){

        this.playAudio();

        switch (value) {
            case 'clear':
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
                this.calc();
            break;
            case 'ponto':
                this.addDot();
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

    clickAc(){

        document.querySelectorAll('.btn-clear').forEach(btn =>{
            btn.addEventListener('dblclick', e=>{
                
                this.toggleAudio();
            })
        })
    }

    toggleAudio(){

        this._audioOnOff = !this._audioOnOff;

    }

    playAudio (){
        if (this._audioOnOff){
            this._audio.currentTime = 0;
            this._audio.play();
        }
    }

    initKeyBoard(){

        document.addEventListener('keyup', e=>{

            this.playAudio();

            switch (e.key) {
                case 'Escape':
                case 'Backspace':
                    this.clearAll();
                break;
                case '+':
                case '-':
                case '*':
                case '/':
                    this.addOperation(e.key);
                break;
                case 'Enter':
                case '=':
                    this.calc();
                break;
                case '.':
                case ',':
                    this.addDot();
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
                    this.addOperation(parseInt(e.key));
                break;
            }
        });

    }

    get displayCal (){
        return this._displayCalcEl.innerHTML;
    }

    set displayCal (value){
        this._displayCalcEl.innerHTML = value;
    }
}