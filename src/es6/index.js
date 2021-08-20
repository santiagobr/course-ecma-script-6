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

/* Desestructuración de elementos */

/* Antes de ECMAScript6 */
let person = {
  name: 'santiago',
  age: 19,
  country: 'CO'
}

console.log(person.name, person.age, person.country)

/* Después de ECMAScript6 */
let {name, age, country} = person
console.log(name, age, country)


/* Spread Operator */

let team1 = ['Santiago', 'Julián', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

/* variables */

{
  var globalVar = 'Global Var'
}

{
  let globalLet = 'Global Let'
  console.log(globalLet) // Global Let: porque es de scope local
}

console.log(globalVar) // Global Var: porque es de scope global

/* 
  const a = 'b'
  a = 'a' 

  No se puede reasignar una variable declarada con const
*/

/* Propiedad de objetos mejorada */


/* Antes de ECMAScript6 */
let name = 'santiago'
let age = 19

obj = {name: name, age: age}

/* Después de ECMAScript6 */

obj2 = { name, age }

console.log(obj2)

/* Arrow Functions */

const names = [
  {name: 'santiago', age: 19},
  {name: 'jessica', age: 26}
]

/* Antes de ECMAScript6 */
let listOfNames = names.map(function (item) {
  console.log(item.name)
})

/* Después de ECMAScript6 */
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
  return null
}

const listOfNames4 = name => {
  return null
}

const square = num => num * num


/* Promesas */

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(!true) {
      resolve('Hey!')
    }else {
      reject('Ups!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

/* Clases */

class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }

  sum(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new calculator()
console.log(calc.sum(2, 2)) // 4

/* Módulos */
import { hello } from './module'

hello()

/* Generators */

function* helloWorld() {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value) // Hello,
console.log(generatorHello.next().value) // World
console.log(generatorHello.next().value) // undefined