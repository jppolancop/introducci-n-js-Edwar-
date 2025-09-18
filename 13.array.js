// arrays

const numbers = [10,20,80,100];

console.log(numbers);

//otra forma de visualizacion en tabla

console.table(numbers);

// crear un arreglo con el constructro

const months = new Array('May', 'January', 'July', 'June');

console.table(months);

const miArray = ['hello', 42, true, false, null ,{myName: "Edwar", myJob: "teacher"},[3172293, 3182299,3182295]]

console.table(months);


// consultar un elemento de un arreglo]
console.log(miArray[5])

// metodo para conocer la longitud de un arreglo
console.log("tu arreglo tiene : "  +  numbers.length)

// un iterador con forEach
numbers.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month);
})