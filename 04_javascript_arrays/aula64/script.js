// concatenando arrays
// método concat
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]
const matriz1 = array1.concat(array2, array3)

// outra forma de juntar arrays, usando spread operator
const matriz2 = [...array1, ...array2, ...array3]

console.log(matriz1, matriz2)