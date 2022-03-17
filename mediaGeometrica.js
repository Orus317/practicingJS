listaGeom = [4,4]
function calcularMediaGeométrica(lista) {
    valor = lista.reduce((a,b) => a*b)
    return Math.pow(valor, 1/lista.length);
}

function mediaArmonica(lista) {
    inversos = lista.map((n)=>1/n);
    console.log(inversos);
    sumaInversos = inversos.reduce((a,b)=>a+b);
    console.log(sumaInversos);
    return lista.length/sumaInversos;
}