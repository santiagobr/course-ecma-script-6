import hello from "../es6/module"

/* Convertir un objeto de elementos a una matriz */
const data = {
  frontend: 'santiago',
  backend: 'isabel',
  design: 'ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

/* Object Values: Obtener los valores de un objeto y ponerlos en un array */

const data = {
  frontend: 'santiago',
  backend: 'isabel',
  design: 'ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

/* Modificación de strings */

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, 'hi'))


/* Trailing commas */
const obj = {
  name: 'santiago'
}

/* Async Await */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error!'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(Error)
  }
}

anotherFunction()