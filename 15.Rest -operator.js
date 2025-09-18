// Rest Operator o spread operator
// Lo que se busca es NO NO NO modificar el arreglo original.


const months = ['December', 'November', 'March'];
console.table(months);

// se crea un nuevo arreglo y lo unimos con otro.
const newArray = ['January', ...months];


// El nuevo arreglo se puede agregar al final o al inicio
const newArray2 = ['January', ...months];


console.log(newArray);
console.log(newArray2);

months.unshift('january');
console.table(months);