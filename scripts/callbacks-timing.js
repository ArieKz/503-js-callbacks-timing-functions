console.log('hello callbacks and timing functions!')

// named function
function named() {
  // code to run
}

const arrow = () => {
  // code to run
}

// document.getElementById('myId').addEventListener('click', () => {
//   // what you want to have happen when this element is clicked
// })

// define a callback function
const callback = () => {
  console.log('callback has been invoked! 🤙')
}

// define a higher order function
const higherOrder = (pizza) => {
  pizza() // callback function named pizza
}
// callback()
higherOrder(callback)
higherOrder(() => {
  console.log('inline function callback!! WOOOO!!! 🥳')
})

// higherOrder(5) // will throw an error

// callback calculator
// const doCalculation = (num1, num2, callback) => {
//   return callback(num1, num2)
// }

// let math = doCalculation(10, 5, (num1, num2) => {
//   return num1 + num2
// })

// console.log(math)

function doCalculation(num1, num2, callback) {
  return callback(num1, num2)
}

function subtract(num1, num2) {
  return num1 - num2
}

console.log(doCalculation(9, 3, subtract))

// TIMING FUNCTIONS

// setTimeout() -- runs a function one time
// takes two args (callback, time in ms)
// 1000 ms === 1 second
setTimeout(() => { 
  console.log('i will run only once! 🏃‍♂️') 
}, 1000)

// setInterval()
// takes two args (callback, time in ms)
// 1000 ms === 1 second
function tick() {
  console.log('tick ⏲')
}

// to stop an interval (or timeout) you need set it to a variable
// and use clerInterval() to stop it
let clock = setInterval(tick, 500)

const stopClock = () => {
  console.log('stop the madnesssssss!!! 🦞')
  clearInterval(clock)
}

setTimeout(stopClock, 3000)