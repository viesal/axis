import {Canvas} from "../Canvas/Canvas";
import {createElement} from "../../utils/createElement";
import {inputText} from "../../utils/field2Text";
import {addElementEventListener} from "../../utils/addElementEventListener";
import './App.css';

export class App {
    constructor(container, numOne, numTwo) {
        this.container = container;
        this.numOne = numOne;
        this.numTwo = numTwo;
        this.app = createElement(this.container, 'div', 'app');

        this.task = createElement(this.app, 'div', 'task');

        this.termOne = createElement(this.task, 'span');
        this.termOne.innerText = this.numOne;
        this.plus = createElement(this.task, 'span');
        this.plus.innerText = ' + ';
        this.termTwo = createElement(this.task, 'span');
        this.termTwo.innerText = this.numTwo;
        this.equally = createElement(this.task, 'span');
        this.equally.innerText = ' = ';
        this.ammount_span = createElement(this.task, 'span');
        this.ammount_span.innerText = '?';

        this.ammount_input = document.createElement('input');
        this.ammount_input.size = 2;
        addElementEventListener(this.ammount_input, 'input', (event) => {
            this.ammount_span.innerText = this.numOne + this.numTwo;
            inputText(event, this.ammount_span, () => {
                console.log('Конец')
            });
        });

        this.canvas = new Canvas(this.app);

        this.inputOne = document.createElement('input');
        this.inputOne.classList.add('input')
        this.inputOne.style.position = 'absolute';
        this.inputOne.size = 1;
        addElementEventListener(this.inputOne, 'input', (event) => {
            inputText(event, this.termOne, () => {
                this.canvas.promise.then(() => {
                    this.canvas.drawArc(numOne, numOne + numTwo, this.inputTwo, 'green')
                });
            });
        });

        this.inputTwo = document.createElement('input');
        this.inputTwo.classList.add('input')
        this.inputTwo.style.position = 'absolute';
        this.inputTwo.size = 1;
        addElementEventListener(this.inputTwo, 'input', (event) => {
            inputText(event, this.termTwo, () => {
                this.task.replaceChild(this.ammount_input, this.ammount_span)
            });
        });

        this.canvas.promise.then(() => {
            this.canvas.drawArc(0, numOne, this.inputOne, 'red')
        });

    }
}