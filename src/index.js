import {App} from "./App/App";

window.onload = ()=>{
    const x = prompt('Введите первое число в диапазоне от 6 до 9', '6');
    const y = prompt('Введите второе число в диапазоне от 3 до 8', '3');
    new App(document.body, Number(x), Number(y))
}