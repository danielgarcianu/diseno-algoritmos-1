/*
las funciones nos sirven para escribir bloques de codigo 
que son reutilizables
*/

/*
    la estructura de una funcion es palabra reservada "funcion"
    + el nombre de la funcion en este caso suma + () + {}
    lo que va dentro de los parentesis se llama parametros 
    son los datos con los que va a trabajar la funcion.
*/

function sumar (numero1, numero2){
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '</h1>');
}

sumar(13,7);
sumar(18,9);


/* 
en lugar de todo esto se crea una funcion evita
repetir la misma instruccion.

let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write('<h1>' + suma + '</h1>');

let numero3 = 23;
let numero4 = 2132;
let suma2 = numero3 + numero4;
document.write('<h1>' + suma2 + "</h1>"); */