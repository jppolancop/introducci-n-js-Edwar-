// JUAN PABLO POLANCO PUERTA

// DESUSTRUCTURACION DE OBJETOS

const product = {

     productname: " sensor de humedad",
     price : 300,
     available : true,
}

// AQUI UN EJEMPLO DE DESUSTRUCTURACION DE OBJETOS

const productprice = product.price;
const productname = product.productname;

console.log(productprice);
console.log(product.productname);

// para que sirve la desestructuracion? sirve prar extraer los valores de un objeto.

const {price, available} = product;

console.log(price, available);

