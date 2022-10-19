// const arrayPrueba = [4, 30, 7, 5, 9, 7, 2, 4, 1, 3, 2];
// const arrayPrueba = [
//   4, 30, 7, 5, 9, 7, 2, 4, 1, 3, 2, 11, 2, 13, 4, 15, 1, 17, 1, 19, 7, 21, 7,
//   23, 7,
// ];
console.log("Hols");
const arrayPrueba = [1, 1, 3, 3, 2, 5, 1];
const firstArray = [];
const secondArray = [];

for (let i = 0; i < arrayPrueba.length; i++) {
  if (i % 2 === 0) {
    firstArray.push(arrayPrueba[i] * arrayPrueba[i]);
  }
}
let variable = 0;
const arrayLength = firstArray.length;
for (let i = 0; i < firstArray.length; i++) {
  variable = firstArray[i - 1];
  if (secondArray.length === 0) {
    secondArray.push(firstArray[i]);
    continue;
  }
  if (firstArray[i] > secondArray[0]) {
    secondArray.push(firstArray[i]);
  }
  if (firstArray[i] <= secondArray[0]) {
    secondArray.unshift(firstArray[i]);
  }

  //   if (firstArray[i] === secondArray[0]) {
  //     secondArray.unshift(firstArray[i]);
  //   }
  //   if (firstArray[i] < secondArray[0]) {
  //     secondArray.unshift(firstArray[i]);
  //   }
  //   if (firstArray[i] > secondArray[0]) {
  //     secondArray.push(firstArray[i]);
  //   }
  //   if (firstArray[i] > secondArray[i - 1]) {
  //   }
  // Lo que quiero saber es donde la posicion en donde voy a insertar con el splice.
}
console.log(secondArray);

// Usar el splice para agregar elementos en el lugar que sea que es el indicado, usar tambien el .push o punto pop dependiendo de si es mas grande o si es mas chico. O sino el splice.
console.log(firstArray);
console.log(Math.min(...firstArray));
// Crear una variable que vaya tomando el valor de cada numero que vamos tomando como minimo.
console.log(firstArray.indexOf(1));
firstArray.splice(0, 1);
console.log(firstArray);
