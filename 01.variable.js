// conveciones para nombrar variables
// CamelCase
// UpeerCamelcase => se usa para nombrar las clases en JS
// LowerCamaelcase => se usa para nombrar las variables en JS
// SCREAMING_SNAKE_CASE => se usa para nombrar las variables constantes
//  caja-kebab => se usa para nombrar archivos multimedia en JS

// caja-de-tren => variante del kebab-case

// ya NO se usa var para declarar las variables, actualmente se utiliza let.
// en JS NO es obligatorio indicar el tipo de variavle
/*  JS se puede o NO usar el punto y coma al final de una sentencia

*/

var product = 'sensor-1';
var product2 = 'sensor-2';

console.log(product)
console.log(product2)


/*
 no se puede iniciar una variable con un guion medio

 nose puede iniciar una variable con un numero

 si esta permitido iniciar una variable con un guion al piso

*/
var sensor10 = "sensor de lluvia "
console.log(sensor10)

var sensor11 = "sensor de humedad"
var sensor12 = "sensor de calor"

console.log(sensor11)
console.log(sensor12)


/*
var
no me indica error por duplicidad 
no me indica error por falta de inicializacion

let 
no me permite dubplicidad al declarar variables

*/

const maxSize = 1024
maxSize = 2048
