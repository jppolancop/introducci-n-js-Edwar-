const numbers = [0, 12, 8, 9, 5];


// agregar elementos a mi arreglo, para con este metodo se requiere conocer la longitud del arreglo

let numberLenght = numbers.length
numbers [5] = 100;
console.log(numbers);

numbers [numberLenght] = 100 ;
console.log(numbers);

// con el metodo push se agregan elementos al final del arreglo
numbers.push(700,800);


console.log(numbers);
console.table(numbers);


// METODO UNSHIFT para agregar elementos al inicio de un arreglo
numbers.unshift(-1,-2,-3);

/*
//Método para elimar el último elemento de mi arreglo
numbers.pop();



//Método shift para elimar el primer elemento de mi arreglo
numbers.schift();

*/
// Método splice elimina todos los elementos a partir del indice asignado
numbers.splice(5);
console.table(numbers);

