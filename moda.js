const listaModa = [
    1,1,11,1,2,3,54,6,1,4,3
];


function calcularModa(lista) {
    const listaModaCount = {};
    
    lista.map(
        function (elemento) {
            if (listaModaCount[elemento]) {
                listaModaCount[elemento] += 1;
            } else{
                listaModaCount[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(listaModaCount).sort(
        function (a,b) {
            return a[1] - b[1];
        }
    );
    
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda
    
}


// 
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}




