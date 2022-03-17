const list1 = [
    100,
    200,
    300,
    500
];

    
function calcularMediaAritmetica(lista) {
    const sumaLista1 = lista.reduce(
        function (accumulator = 0, currentValue) {
            return accumulator + currentValue;
        }
    );
    return sumaLista1 / lista.length;
}