import {createElement} from "../../utils/createElement";
import sprite from '../sprite.png';

export class Canvas {
    constructor(container) {
        this.container = container;
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

    drawArc(numStart, numEnd, input) {
        this.ctx.beginPath();

        const x0 = numStart * 39 + 36;

        const x = numEnd * 39 + 36;
        const y = this.ctx.canvas.height - 63;

        const cp1x = ((numEnd - numStart) / 8 * 39 * 1.5 + numStart*39) + 36;
        const cp2x = ((numEnd - numStart) / 8 * 39 * 6.5 + numStart*39) + 36;
        const cp1y = (this.ctx.canvas.height - 63 - ((numEnd - numStart) * 39 / 3));

        this.ctx.moveTo(x0, y);

        // this.ctx.fillRect(cp1x, cp1y, 2, 2)
        // this.ctx.fillRect(cp2x, cp1y, 2, 2)

        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp1y, x, y);

        // this.ctx.lineTo( )

        // this.ctx.arc(((numEnd - numStart) / 2 + numStart) * 39 + 36, this.ctx.canvas.height - 63, (numEnd - numStart) / 2 * 39, Math.PI, 0, false);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#db7093';
        this.ctx.stroke();

        this.container.appendChild(input);
        input.style.top = this.canvas.clientTop + cp1y + 'px';
        input.style.left = this.canvas.clientLeft + (((numEnd - numStart) / 2 + numStart) * 39 + 36) + 'px';
    }


}