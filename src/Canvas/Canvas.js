import {createElement} from "../../utils/createElement";
import sprite from '../sprite.png';

export class Canvas {
    constructor(container) {
        this.container = container;
        // this.app = createElement(this.container, 'div')
        this.canvas = createElement(this.container, 'canvas');
        this.canvas.width = '875';
        this.canvas.height = '300';
        this.ctx = this.canvas.getContext('2d');

        this.promise = new Promise((resolve) => {
            const img = document.createElement('img');
            img.onload = () => {
                resolve(img)
            };
            img.src = 'static/' + sprite;
        });

        this.promise.then((img) => {
            this.ctx.drawImage(img, 0, this.canvas.height - 83);
        });
    }

    drawArc(numStart, numEnd, input, colorLine) {
        this.ctx.beginPath();
        this.ctx.arc(((numEnd - numStart) / 2 + numStart) * 39 + 36, this.ctx.canvas.height - 63, (numEnd - numStart) / 2 * 39, Math.PI, 0, false);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = colorLine;
        this.ctx.stroke();

        this.container.appendChild(input);
        input.style.top = this.canvas.clientTop + (this.canvas.height - 63 - (numEnd - numStart) / 2 * 39) - 20 + 'px';
        input.style.left = this.canvas.clientLeft + (((numEnd - numStart) / 2 + numStart) * 39 + 36) + 'px';
    }


}