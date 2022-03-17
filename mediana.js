// const listarda = [
//     100,
//     200,
//     300,
//     500
// ];



function esPar(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(listaDeNumeros) {
    let mediana;
    const mitadLista = parseInt(listarda.length / 2);
    listaDeNumeros.sort((a,b)=>a-b);
    if (esPar(listarda.length)) {
        mediana = (listarda[mitadLista-1] + listarda[mitadLista])/2;
    } else {
        mediana = listarda[mitadLista];
    }

    return mediana;
    
}

