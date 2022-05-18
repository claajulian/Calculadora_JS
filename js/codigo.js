window.addEventListener("load", () => { // Escuchamos cuando se carga todo el html/documento
    var display = document.querySelector(".calculator-display")
    var keypadButtons = document.getElementsByClassName("keypad-button")

    var keypadButtonsArray = Array.from(keypadButtons) // Crea un arreglo de los botones y lo guarda en la variable
    keypadButtonsArray.forEach((button) => { // recorro el arreglo 
        // console.log(button);
        button.addEventListener("click", () => {
            // console.log(button.innerHTML);
            calculadora(button, display) // Creamos la funcion y le pasamos dos parametros
        })
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;

        case '=':
            calcular(display)
            break;

        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) // toma el string y lo resuelve y lo guarda en el innerHTML
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = ''

    }
    display.innerHTML += button.innerHTML
}

function borrar(display) {
    display.innerHTML = 0
}