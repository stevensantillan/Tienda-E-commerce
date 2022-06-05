//-------------- SUMA --------------//

/*Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado*/

let numero1 = parseInt(prompt("Ingresar un número"));

for (let i=1 ; i<=9 ; i++){
    let resultado = numero1 * i;
    alert("La tabla del número " + numero1 +" es "+numero1+" x "+i+" = "+ resultado);
    console.log(resultado);
}

//-------------- TEXTO --------------//

/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/

let entrada = prompt("Armá tu oración");
let resultado = entrada;
let proceso = " ";
while (proceso != "ESC" ){
    proceso = prompt("Otra palabra");
    resultado = resultado + " " + proceso;
    alert("Ingresaste " + resultado);
    console.log("Ingresaste" + resultado);   
}



//-------------- REPETICION HOLA --------------//

/*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

let mostrar = parseInt(prompt("Ingresa la cantidad de gente que quieres saludar"));
for (let i=1 ; i<=mostrar ; i++){
    alert("Hola señor/a " + i);
}
