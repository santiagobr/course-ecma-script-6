/* Antes de ECMAScript6 */
function newFunction(name, age, country) {
  var name = name || 'Santiago'
  var age = age || 19
  var country = country || 'CO'
  console.log(name, age, country)
}

newFunction()

/* Después de ECMAScript6 */

/* Asignar valores por defecto en los parámetros de una función */
function newFunction2(name = 'Santiago', age = 19, country = 'CO') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', 23, 'MX')

/* Template literals */

/* Antes de ECMAScript6 */
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

/* Después de ECMAScript6 */
let hello = 'Hello'
let world = 'World'
let epicPhrase2 = `${hello} ${world}, con template literals`
console.log(epicPhrase2)

/* Multilínea */

/* Antes de ECMAScript6 */
let lorem = 'Lorem ipsum dolor sit amet, consectetur. \n' +
'otra frase épica que necesitamos.'

/* Después de ECMAScript6 */
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica.`

console.log(lorem)
console.log(lorem2)