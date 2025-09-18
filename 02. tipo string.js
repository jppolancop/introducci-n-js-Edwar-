// String o cadena de texto
const sensor = "temperatura";
const sensor2 = "PH";

console.log(sensor);
console.log(sensor2);

//estas dos formas no son tan comunes
const sensor3 = String('presion');
const sensor4 = new String('humedad');

console.log(sensor3);
console.log(sensor4);

// para saber el tipo de dato de una variable

console.log(typeof sensor3)

let product = ("televisor de 32")

let product2 = ("televisor de 58\"")
console.log(product);
console.log(product2);



// metodos con string
console.log(product2.length)

/* sirve para saber si una cadena de texto existe en una frase

indexof nos muestra la posion en la que se encuentra la cadena de texto 

si la cadena no existe muestra un resultado menor que cero. */

let nombre = 'juan pablo polanco puerta'

let phrase = 'aqui vamos a buscar la palabra SENA'

// hacer lo mismo de una forma mas moderna

console.log(phrase.indexOf('SENA'))

let phrase2 = 'aqui vamos a buscar la palabra SENA'
console.log(phrase.includes('SENA'))