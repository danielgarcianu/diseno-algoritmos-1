/*
    Condicionales se utilizan para tomar decisiones dentro de nuestro 
    programa.

*/

/* if(condicion){
    codigo
    codigo 
} */

let edad = parseInt(prompt('ingresa tu edad'));

if(edad >=18 && edad < 30){
    document.write('eres un joven');
} else if (edad >= 30 && edad < 60) {
    document.write('Eres un adulto');
} else if (edad > 120){
    document.write("error en la edad");
} else if (edad >= 60){
    document.write('eres un adulto mayor');
} else {
    document.write("eres un niño");
}