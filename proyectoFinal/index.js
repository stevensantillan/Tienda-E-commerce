let precio = 10;
let envio = 5;

const suma = (a,b) => a + b;
const multi = (a,b) => a * b;
const descuento = a => a * 0.9; 
const recarga = a => a * 1.15;

while(true){
let iniciar = parseInt(prompt("Por favor, seleccione el número de código de su forma de pago: 1. Efectivo  2. Tarjeta de Crédito  3. Tarjeta de Débito"));

if (iniciar === 1){
    console.log(iniciar);
    while(true){
        cantidad = parseInt(prompt("El precio unitario es $10 y hay disponible 5 unidades, cuantos desea llevar?:"));
            if (cantidad<=5){
                console.log(cantidad);
                let total = multi(cantidad,precio);
                console.log(total);
                let efectivo = descuento(total);
                console.log(efectivo);
                alert("Por pago en efectivo, obtiene un descuento del 10%, el total es: $" + efectivo);
                while(true){
                    let enviar = parseInt(prompt("Desea envio a domicilio? = 1. SI 2. NO"));
                    if (enviar == 1){
                        console.log(enviar);
                        let totalFinal = suma(efectivo, envio);
                        console.log(totalFinal);
                        alert("El envio es: $" + envio + ". En total hay que abonar: $" + totalFinal); break;
                    }
                    else if (enviar == 2){
                        console.log(enviar);
                        alert("Podrá pasar a retirar su/s producto/s por una de nuestras sucursales."); break;
                    }
                    else{
                        console.log(enviar);
                        alert("Comando no válido, por favor intentar nuevamente.")
                    }
                }
                alert("Gracias por comprar!");break;
                }
            else{
                alert("No hay stock, por favor intente nuevamente.");
            }
    } 
break;}

else if (iniciar === 2){
    console.log(iniciar);
    while(true){
        cantidad = parseInt(prompt("El precio unitario es $10 y hay disponible 5 unidades, cuantos desea llevar?:"));
            if (cantidad<=5){
                console.log(cantidad);
                let total = multi(cantidad,precio);
                console.log(total);
                let credito = recarga(total);
                console.log(credito);
                alert("Por pago con tarjeta de crédito, se aplicará una recarga del 15%, en total es: $" + credito);
                    while(true){
                        let enviar = parseInt(prompt("Desea envio a domicilio? = 1. SI 2. NO"));
                        if (enviar == 1){
                            console.log(enviar);
                            let totalFinal = suma(credito, envio);
                            console.log(totalFinal);
                            alert("El envio es: $" + envio + ". En total hay que abonar: $" + totalFinal); break;
                        }
                        else if (enviar == 2){
                            console.log(enviar);
                            alert("Podrá pasar a retirar su/s producto/s por una de nuestras sucursales."); break;
                        }
                        else{
                            console.log(enviar);
                            alert("Comando no válido, por favor intentar nuevamente.")
                        }
                    }    
                alert("Gracias por comprar!"); break;
                }
            else{
                alert("No hay stock, por favor intente nuevamente.");
            }
    }
break;}

else if (iniciar === 3){
    console.log(iniciar);
    while(true){
        cantidad = parseInt(prompt("El precio unitario es $10 y hay disponible 5 unidades, cuantos desea llevar?:"));
            if (cantidad<=5){
                console.log(cantidad);
                let total = multi(cantidad,precio);
                console.log(total);
                alert("Usted pagó con tarjeta de débito, por lo tanto no aplican promociones, en total es: $" + total);
                while(true){
                    let enviar = parseInt(prompt("Desea envio a domicilio? = 1. SI 2. NO"));
                    if (enviar == 1){
                        console.log(enviar);
                        let totalFinal = suma(total, envio);
                        console.log(totalFinal);
                        alert("El envio es: $" + envio + ". En total hay que abonar: $" + totalFinal); break;
                    }
                    else if (enviar == 2){
                        console.log(enviar);
                        alert("Podrá pasar a retirar su/s producto/s por una de nuestras sucursales."); break;
                    }
                    else{
                        console.log(enviar);
                        alert("Comando no válido, por favor intentar nuevamente.")
                    }
                }
                alert("Gracias por comprar!"); break;
                }
            else{
                alert("No hay stock, por favor intente nuevamente.");
            }
    }
break;}

else{
    if (iniciar !==1 !==2 !==3){
        console.log(iniciar);
        alert("No es un elemento válido.");
    }
}
}

