// Creamos el arreglo
let arreglo = [2, 4, 8, 10];

//Creamos variables a utilizar
let total = 0;
let suma = 0;
let promedio = 0;
let maximo;
let minimo;

//Contamos el numero total de elementos del arreglo
console.log(arreglo.length);

// Vamos a sumar todos los elementos del arreglo
for (let i = 0; i < arreglo.length; i++) {
    total += arreglo[i];
}
console.log(total);

// Promedio del arreglo
for(var i = 0; i < arreglo.length; i++){
  suma += arreglo[i];
}
promedio = suma / arreglo.length;
console.log(promedio);

// Maximo numero del arreglo
maximo = Math.max.apply(null, arreglo);
console.log(maximo);

// Minimo numero del arreglo
minimo = Math.min.apply(null, arreglo);
console.log(minimo);




