function getNumberFromInputID(inputId) {
    let inputNumber = document.getElementById(inputId).value
    if (inputNumber.length < 1) return 0
    return inputNumber
}

function printResult(result, id) {
    const element = document.getElementById(id);
    element.innerHTML = "$" + result.toFixed(2);
}

function printResults(totalPerPerson, tipPerPerson) {
    printResult(totalPerPerson, 'total-per-person');
    printResult(tipPerPerson, 'tip-per-person')
}

function getResult(tip, changeClassID) {
    const billInputNumber = getNumberFromInputID('bill-input');
    const peopleInputNumber = getNumberFromInputID('people-input');
    if (!(billInputNumber > 0)) {
        addErrorMessage('bill-error')
        return
    } // si se dá esta condición muestra mensaje de error y sale de la funcion ( return )

    if (!(peopleInputNumber > 0)) {
        addErrorMessage('people-error')
        return
    }// si se dá esta condición muestra mensaje de error y sale de la funcion ( return )


    //si no hay error llegá hasta acá y luego hacemos las cuentas e imprimimos, pueden buscar las funciones con cntrl click en la mayoría de los ides para ver por dentro como son y encontrarlas rápido
    const totalPerPerson = billInputNumber * (1 + tip) / peopleInputNumber;
    const tipPerPerson = billInputNumber * tip / peopleInputNumber;

    removeErrorMessages()
    printResults(totalPerPerson, tipPerPerson);
    setActiveClassOnlyTo(changeClassID);
}


function cleanResult() { //se llama en el botón de reset
    printResult(0, 'total-per-person'); //reutilizamos función que imprime, pero esta vez no hacemos cuentas, le pasamos 0
    printResult(0, 'tip-per-person')
}

function setActiveClassOnlyTo(id) {
    clearActiveButtonsClasses();
    const element = document.getElementById(id);
    console.log(element)
    element.classList.add("button-active")  //esto agrega una clase , si se fijan en el css, hace lo mismo en el efecto de active que cuando se habilita esta clase, lo hago apra que quede "apretado el botón"
}

function clearActiveButtonsClasses() {
    const elementsArray = document.getElementsByClassName('buttons-grid-item'); //agarra todos los elementos que tienen el mismo classname, devuelve un array de elementos, importante que es array
    for (const element of elementsArray) {  // vamos a hacer la funcion ( lo que está entre llaves) por cada "elementVar" en "elementArray (elementVar es un nombre que elegí yo y busqué que no se repita en el programa para que noten lo siguiente: es importante que lo usemos dentro de la función, solamente en ese contexto tiene sentido la palabra)
        element.classList.remove("button-active") //sacamos button-active de todas, si la encuentra la elimina
        console.log("bien")
    }
    console.log("fin")
}

function addErrorMessage(id) {
    const element = document.getElementById(id)
    element.classList.add("show-error")
}

function removeErrorMessage(id) {
    const element = document.getElementById(id)
    element.classList.remove("show-error")
}

function removeErrorMessages() {
    removeErrorMessage('bill-error');
    removeErrorMessage('people-error')
}

function addCustomEvent() {
    var customInput = document.getElementById("custom-tip-input");
    // ejecutamos una función cuando se suelta la tecla enter
    customInput.addEventListener("keyup", function (event) {
        // Nel 13 es la key de "enter" em el teclado, otras keys son otras teclas
        if (event.keyCode === 13) {
            // Cancelar el evento por default, en este caso seria lo que normalmente hace el enter
            event.preventDefault();
            if (!(customInput.value > 0)) return
            //lamamos a la función con el valor de porcentaje, el undefined es porque no queremos colorear ningun botón
            getResult(customInput.value/100, undefined)
        }
    });

}

addCustomEvent()