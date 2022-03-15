
function calcularPrecioConDescuento(precio, descuento) {
    precioFinal = (precio * (100 - descuento))/100;
    if (precioFinal < 0) {
        console.warn("El descuento es excesivo. El precio final es negativo")
    } else {
        return precioFinal;
    }
}

function onClickCalculateFinalPrice() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    let discount = Number(inputDiscount.value);

    const couponInput = document.querySelectorAll('input[name="Coupon"]:checked');
    const couponValue = Number(couponInput[0].value);
    discount = couponValue + discount;
    
    const precioFinal = calcularPrecioConDescuento(priceValue, discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioFinal; 

}

