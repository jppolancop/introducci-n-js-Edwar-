// JUAN PABLO POLANCO PUERTA
// METODOS PARA OBJETOS

// con esta linea garantizo buenas practicas
"use strict"

const product = {

     productname: " sensor de humedad",
     price : 300,
     available : true,

}

const speedmax = 80;
// speedmax = 70;
console.log(speedmax);

// JUAN PABLO POLANCO PUERTA
//  aunque el objeto product este declarado como constante permite agregar propiedades.

// product.age = 42 ;
// console.log(product) ;

product.quantity = 10;
console.log(product);

// con el metodo o funcion freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas.

//Object.freeze(product);

//si usamos el metodo seal no podemos agregar ni eliminar pero si sepuede editar 


// vamos agregar una nueva propiedad color.

//product.color = "red"

// forma de saber si un objeto esta bloqueado
console.log(" el documento esta bloqueado?:  " +   Object.isFrozen(product));

// eliminar una propiedad de un objeto
delete product.price;
console.log(product)

// modificar o editar las propiedades de un objeto

product.productname = " sensor de ph "
console.log
// saber si un objeto esta sellado 
console.log( "")