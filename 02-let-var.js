/*
variable var se utilizaba anteriormente, son variables globales
variable let es una variable de contexto, solo vive en un bloque 
de codigo. (hace referencia a una variable local y solo se puede 
acceder a ella desde el bloque de codigo en que se encuentra )
*/

var numero =40; //40 var caracter global
console.log(numero); 

if(true) {
    var numero= 50;
    console.log(numero);//50
}

console.log(numero);//40


//mentoria 
var texto = 'Bootcamp Java';// Bootcamp Java
console.log(texto);

if (true){
    let texto ='Cohorte 8';// Cohorte 8 let es de caracter local es una variable de contexto esta delimitada a un parte del codigo
    console.log(texto);
    let numeroFavorito =76;
}                           // las llaves delimitan bloques de codigo
console.log(numeroFavorito); // si lo colocamos aqui no nos da salida, solo si se pone dentro del if por que es local 
console.log(texto); // Bootcamp Java