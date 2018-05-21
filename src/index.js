import {App} from "./App/App";

window.onload = () => {
    const x = Math.round(5.5 + Math.random() * 4);
    const y = Math.round(10.5 - x + Math.random() * 4);
    new App(document.body, Number(x), Number(y))
}