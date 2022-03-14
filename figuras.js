console.group("Cuadrados");

// const ladoCuadrado = 19;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}
// const areaCuadrado = ladoCuadrado**2;
// console.log("El área del cuadrado es: " + areaCuadrado + " cm cuadrados");

console.groupEnd();

//Código del triángulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("Los lados del Triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log("El perímetro del triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + " cm^2");
function areaTriangulo(base, altura){
    return (base*altura) / 2;
}


console.groupEnd();

//Código del círculo
console.group("Círculo");

// const radioCirculo = 4;
// console.log("El radio del círculo es : " + radioCirculo + " cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + " cm");
function diametro(radio) {
    return radio * 2;
}

const PI = Math.PI;
// console.log("El valor de PI es: " + PI);

// const arco = PI * diametroCirculo;
// console.log("El perímetro del círculo es: " + arco + " cm");
function arco(radio) {
    const diametro_ = diametro(radio);
    return PI * diametro_;
}


// const areaCirculo = PI * (radioCirculo**2);
// console.log("El área del círculo es: " + areaCirculo + " cm^2");
function areaCirculo(radio){
    return PI * (radio**2);
}

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function existenciaTriangulo(lado1,lado2,lado3){
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return false;
    } else if(Math.abs(lado1 - lado2) < lado3 < lado1 + lado2 && Math.abs(lado1 - lado3) < lado2 < lado1 + lado3 && Math.abs(lado2 + lado3) < lado1 < lado2 + lado3){
        return true;
    } else {
        return false;
    }
}


function calcularPerimetroTriangulo() {
    // const inputs = [document.getElementById("InputTriangulo1"),
    //             document.getElementById("InputTriangulo2"),
    //             document.getElementById("InputTrianguloBase"),
    //             document.getElementById("InputTrianguloAltura")];
    // let values = [];
    // for (const input of inputs) {
    //     values.push(parseInt(input.value));
    // }
    let lados = [document.getElementById("InputTriangulo1").value,
                document.getElementById("InputTriangulo2").value,
                document.getElementById("InputTrianguloBase").value];
    let base = document.getElementById("InputTrianguloAltura").value;
    if (existenciaTriangulo(lados[1], lados[2], lados[3])){
        const perimetro = values.reduce((a,b)=>a+b);
        alert(perimetro);
    }else{
        alert("El triangulo no existe");
    }

}

function calcularAreaTriangulo(){
    const inputs = [document.getElementById("InputTriangulo1"),
                document.getElementById("InputTriangulo2"),
                document.getElementById("InputTrianguloBase"),
                document.getElementById("InputTrianguloAltura")];
    let values = [];
    for (const input of inputs) {
        values.push(parseInt(input.value));
    }
    console.log(values);
    const area = areaTriangulo(values[2],values[3]);
    console.log(area);
    alert(area);
}

function calcularPerimetroCircunferencia(){
    const radio = document.getElementById("InputRadio").value;
    alert(arco(radio));
}

function calcularAreaCircunferencia(){
    const radio = document.getElementById("InputRadio").value;
    alert(areaCirculo(radio));
}