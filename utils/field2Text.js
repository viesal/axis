function field2Text(field){
    field.classList.add('clearInput');
    field.setAttribute('readonly', 'true');
}

export function inputText(event, number, callback) {
    if (Number(event.target.value) === Number(number.innerText)){
        event.target.classList.remove('erroreInput');
        number.classList.remove('erroreNumber')
        field2Text(event.target);
        callback()

    }
    else {
        event.target.classList.add('erroreInput')
        number.classList.add('erroreNumber');
    }
}