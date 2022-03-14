function existenciaTriangulo(lado1,lado2,lado3){
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return false;
    } else if(Math.abs(lado2 - lado3) < lado1 && lado1 < lado2 + lado3){
        return true;
    } else if(Math.abs(lado1 - lado2) < lado3 && lado3 < lado1 + lado2){
        return true;
    } else if(Math.abs(lado1 - lado3) < lado2 && lado2 < lado1 + lado3) {
        return true;
    }else {
        return false;
    }
}

function alturaTrianguloIsosceles(lado, base) {
    return Math.sqrt(lado**2-(base/2)**2);
}

function validarIsosceles(lado1, lado2 ,lado3){
    if (existenciaTriangulo(lado1, lado2, lado3)){
        if (lado1 == lado2 && lado1 != lado3){
            alert(`La altura del triangulo es ${alturaTrianguloIsosceles(lado1, lado3)}`)
        }else if(lado2 == lado3 && lado2 != lado1){
            alert(`La altura del triangulo es ${alturaTrianguloIsosceles(lado2, lado1)}`)
        }else if (lado1 == lado3 && lado1 != lado2) {
            alert(`La altura del triangulo es ${alturaTrianguloIsosceles(lado1, lado2)}`)
        }else{
            alert(`El triangulo no es isósceles`)
        }
    }else{
        alert("El triangulo no existe");
    }
}

function validarIsoscelesMasAltura() {
    let inputs = [document.getElementById("InputLado1"), document.getElementById("InputLado2"), document.getElementById("InputLado3")];
    values = [];
    for (const input of inputs) {
        values.push(input.value);
    }
    validarIsosceles(values[0], values[1], values[2]);
}