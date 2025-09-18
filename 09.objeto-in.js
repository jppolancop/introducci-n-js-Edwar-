// JUAN PABLO POLANCO PUERTA
// AQUI TENEMOS TRES VARIABLES

const productname = " sensor de humedad";
const price = 300;
const available = true;



// JUAN PABLO POLANCO PUERTA
// este es un objeto llamado producto almacena las tres variables

const product = {

     productname: " sensor de humedad",
     price : 300,
     available : true,
}

console.log(product);
console.log(typeof product);
console.log(typeof productname);
console.log(typeof price);

// para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:


console.log("el precio del producto es: " + price);
console.log("el nombre del producto es: " + productname);
console.log("el  producto esta disponible: " + available);

// agregar una propiedad

product.image = "imagen.jpg";
console.log(product);