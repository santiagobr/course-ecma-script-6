/* Operador de reposo */
const obj = {
  name: 'santiago',
  age: 19,
  country: 'CO'
}

let { name, ...all} = obj
console.log(name, all) // santiago { age: 19, country: 'CO' }

// Propagación en objetos

const obj1 = {
  name: 'santiago',
  age: 19
}

const obj2 = {
  ...obj,
  country: 'CO'
}

console.log(obj2) // { name: 'santiago', age: 19, country: 'CO' }

/* Promise.finally */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error!'))
  })
}

helloWorld()
  .then(response => console.log(response)) // Hello World
  .catch(error => console.log(error)) // Test Error
  .finally(() => console.log('Finalizo')) // Finalizo

/* Acceder a cada elemento de un Regular Expression para entender como se compone */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)