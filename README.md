# Callbacks and Timing functions

Callbacks notes:

https://gawdiseattle.gitbook.io/wdi/javascript/01functions/02callbacks

Timing functions notes:

https://gawdiseattle.gitbook.io/wdi/javascript/01functions/03timing-functions

Timing funtions es6:

https://gawdiseattle.gitbook.io/wdi/javascript/01functions/03-es6-timing-functions


clock lab: 

https://github.com/WDI-SEA/js-clock-intervals-exercise

## Callback Functions

*NOTE*: callbacks will probably not make sense until you get to the next section, Timing Functions. This is ok.

*Callback functions* are passed to another function's parameters. Make sure not to use the `()` when passing the callback, overwise javascript will *invoke* it right away! A function that receives a *callback* as on of its parameters is called a *higher order function*.`

```javascript
// will call a function passed to it
const higherOrder = (func) => {
  func()
} 

const callback = () => {
  console.log("callback has been invoked!")
}

higherOrder(callback)
```

what happens if you invoke callback() when you pass it to higher order?

```javascript=
higherOrder(callback())
```

callbacks can interact with the parameters they are passed along with!

```javascript=
// declare a global constant named 'arrowAdd' and assign it a value of an arrow function that accepts
// two numbers as parameters and returns their sum
const arrowAdd = (number1, number2) => {
  return number1 + number2
}

// invoke arrowAdd and assign the return value to a variable
let arrowSum = arrowAdd(10, 20)
console.log(arrowSum)
```

```javascript=
// take two numbers and a function, return the result of the function's operation on the numbers
const doCalculation = (num1, num2, func) => {
  return func(num1, num2)
}

let funception = doCalculation(50, 100, arrowAdd) // add 50 and 100 together with arrowAdd

console.log(funception) // 150
```

callbacks can also be declared inline straight into the function parameters when you are invoking the higher order function:

```javascript=
let funceptionInline = doCalculation(50, 100, (number1, number2) => {
  return number1 - number2
})

console.log(funceptionInline)
```

### Mini-lab!

Have them make a calculator with add, subtract, multiply and divide


## Timing Functions
---


Javascript has two important built-in functions used for timing of events: `setInteraval()` and `setTimeout()`. Both accept a callback function and an how long to wait (in milliseconds) before invoking the callback. `setInterval()` invokes the callback over and over, and `setTimeout()` invokes it just once.

```javascript
const justOnce = () => {
  console.log('I will only print once!')
}

const tick = () => {
  console.log('tick')
}

setTimeout(justOnce, 2500) // invoke justOnce after 2 and a half seconds
setInterval(tick, 1000) // invoke tick every one second
```

If `setInteraval()` or `setTimeout()` are set to a global variable, they can be stopped with `clearInterval()` and `clearTimeout()` respectively:

```javascript
let clock = setInterval(tick, 1000) // invoke tick every one second

const stopClock = () => {
  console.log('stop the clock!')
  clearInterval(clock)
}

setTimeout(stopClock, 5000) // clear the clock interval in 5 seconds
```

### Mini-lab!

```js=
// 1.
// Write a simple greeting function that just prints "Hello!" and save it to a variable. Schedule it to run one time, 5 seconds from now.

// 2.
// Schedule that same greeting function to run once every one-and-a-half seconds

// 3.
// Cancel the one-time execution from question 1. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setTimeout to a variable.

// 4. Cancel the recurring print from question 2. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setInterval to a variable.
```

```js=
/*
Exercises:

1. Use setInteral to write a program that prints the following:

(This should mimic a countdown, so each line will print after a one second delay.)

10
9
8
7
6
5
4
3
2
1
Blast off!

2. How could you mimic the setInterval functionality using setTimeout? Use setTimeout to recreate the const kids = setInterval(annoy, 1000); functionality.
*/

let count = 10

const countDown = setInterval(() => {
  if(count <= 0) {
    console.log('Blast Off! 🚀🚀')
    return clearInterval(countDown)
  } 
  console.log(count)
  count--
}, 1000)
```