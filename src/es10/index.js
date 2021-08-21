
/* flat: en arreglos logra aplanar subniveles de las matrices dependiendo del argumento que se pase */
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))
/* expected output: 
[
  1, 2, 3, 1, 2,
  3, 1, 2, 3
] 
*/


/* flat map: permite mapear cada elemento del array, luego se pasa un función para aplanar el array según el resultado */
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))

/* expected output:
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
] 
*/

/* Trim start: permite eliminar espacios en blanco de un string */
let hello = '       hello world'

console.log(hello) /*        hello world */
console.log(hello.trimStart()) /* hello world */

let hello = 'hello world      '

console.log(hello) /* hello world       */
console.log(hello.trimEnd()) /* hello world */


/* Optional catch binding */

/* Antes de ES10: en el catch se debía poner el parámetro 'error' */
try {

} catch (error){

}

/* Después de ES10: ya esta implícito el parámetro 'error' */
try {

} catch {
  error
}

/* From entries: transforma clave valor en un objeto, sirve para transformar un arreglo en objeto */

let entries = [['name', 'santiago'], ['age', 19]]
console.log(entries) /* [ [ 'name', 'santiago' ], [ 'age', 19 ] ] */
console.log(Object.fromEntries(entries)) /* { name: 'santiago', age: 19 } */

/* Objeto de típo símbolo: permite acceder a una descripción */

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)

