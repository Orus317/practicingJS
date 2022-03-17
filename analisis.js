// Helpers | Utils
function esPar(number) {
    return number%2 == 0;
}

//Calculadora media
function mediaAritmetica(lista) {
    suma = lista.reduce((a,b)=>a+b);
    return suma/lista.length;
}

// mediana salarios
function mediana(lista) {
    const mitad = parseInt(lista.length/2);
    return !esPar(mitad) ? (lista[mitad - 1] + lista[mitad])/2 : lista[mitad];
}

const salariosCol = colombia.map(item=>item.salary);
const salariosColSorted = salariosCol.sort((a,b)=>a-b);
const medianaGeneralCol = mediana(salariosColSorted)

//Desviación estandar y varianza
function desviacionEstandar(lista) {
    const media = mediaAritmetica(lista)/lista.length;
    const diferencias = lista.map(v=>(media-v)**2);
    return diferencias.reduce((a,b)=>a+b)/lista.length;
}

const desviacionEstandarCol = desviacionEstandar(salariosColSorted);
const varianzaCol = desviacionEstandarCol**.5;

//Mediana top 10%
const sliceColCount = salariosColSorted.length * 0.9
const salariosColTop10Alto = salariosColSorted.slice(sliceColCount);
const salariosColTop10Bajo = salariosColSorted.slice(0, salariosColSorted.length - sliceColCount + 1)
console.log(salariosColTop10Bajo);
const medianaTop10ColAlto = mediana(salariosColTop10Alto)
const medianaTop10ColBajo = mediana(salariosColTop10Bajo)

console.log("Media de salarios colombia: ", mediaAritmetica(salariosColSorted));
console.log("Mediana salarios colombia: ", mediana(salariosColSorted));
console.log("Mediana del top 10% salarios mas altos de colombia: ", medianaTop10ColAlto);
console.log("Mediana del top 10% salarios más bajos de colombia: ", medianaTop10ColBajo);
console.log("Desviación estándar salarios de colombia: ", desviacionEstandarCol);
console.log("Varianza de los salarios de colombia: ", varianzaCol);





