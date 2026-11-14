# QuickCart – Advanced JavaScript Practical Assignment

## Project Overview

This project demonstrates important JavaScript concepts through practical examples based on a fictional e-commerce application called QuickCart.

The assignment covers objects, ES6 classes, array methods, JSON handling, asynchronous programming, performance optimization, and DOM events.

## Technologies Used

- JavaScript
- HTML
- CSS
- Node.js (for running JavaScript files)

## Project Structure

| Part | Topic | Main File |
|---|---|---|
| Part A | Objects, Prototypes and ES6 Classes | `products.js` |
| Part B | Higher-Order Functions, Map, Set and Object Methods | `shopping-cart.js` |
| Part C | JSON Handling and Output-Based Debugging | `json-handling.js` |
| Part D | Asynchronous JavaScript | `order-processing.js` |
| Part E | Performance Optimization and DOM Events | `index.html`, `script.js`, `style.css` |
| Part F | Final Integration Challenge | `final-integration.js` |

---

## Part A – Objects, Prototypes and ES6 Classes

**Concepts covered:**
- Constructor functions
- Prototype methods
- ES6 classes
- Inheritance using `extends`
- `super()` keyword
- Arrow functions
- Template literals
- Destructuring
- Rest and spread operators

**Theory Questions**

**1. What is the difference between a constructor function and a prototype?**

A constructor function creates objects and initializes their properties. A prototype is an object that allows methods and properties to be shared among instances created by that constructor.

**2. What is the difference between `__proto__` and `prototype`?**

`prototype` is a property of a constructor function. `__proto__` refers to the prototype of an individual object.

**3. What is the prototype chain?**

The prototype chain is the mechanism JavaScript uses to look up properties and methods. If a property is not found in an object, JavaScript searches its prototype and continues upward.

**4. What is inheritance in JavaScript?**

Inheritance allows one class to reuse properties and methods from another class using the `extends` keyword.

**5. What is the purpose of `super()`?**

`super()` calls the parent class constructor. It must be called before using `this` in a child class constructor.

**6. What is the difference between ES6 classes and prototype-based inheritance?**

ES6 classes provide a cleaner syntax for creating objects and handling inheritance. Internally, JavaScript classes still use prototypes.

---

## Part B – Higher-Order Functions, Map, Set and Object Methods

**Concepts covered:**
- `map()`
- `filter()`
- `reduce()`
- `forEach()`
- Map
- Set
- `Object.freeze()`
- `Object.seal()`

**Theory Questions**

**1. What is a higher-order function?**

A higher-order function is a function that accepts another function as an argument or returns a function.

**2. What is the difference between map(), filter() and reduce()?**

- `map()` creates a new array by transforming each element.
- `filter()` creates a new array containing elements that satisfy a condition.
- `reduce()` processes array elements and combines them into a single result.

**3. What is the difference between forEach() and map()?**

`forEach()` executes a function for each array element and does not return a new array. `map()` returns a new array containing the results.

**4. What is a Map in JavaScript?**

A Map stores key-value pairs. It allows different data types to be used as keys and provides methods such as `set()`, `get()`, and `delete()`.

**5. What is a Set?**

A Set stores unique values and automatically removes duplicate entries.

**6. What is the difference between Object.freeze() and Object.seal()?**

`Object.freeze()` prevents adding, deleting, and modifying existing properties. `Object.seal()` prevents adding and deleting properties but allows existing writable properties to be modified.

---

## Part C – JSON Handling and Output-Based Debugging

**Concepts covered:**
- `JSON.stringify()`
- `JSON.parse()`
- Undefined values
- NaN and Infinity
- Invalid JSON
- Circular references
- Date serialization

**Theory Questions**

**1. What is JSON?**

JSON (JavaScript Object Notation) is a lightweight format used to store and exchange data.

**2. What is JSON.stringify()?**

It converts a JavaScript value or object into a JSON string.

**3. What is JSON.parse()?**

It converts a valid JSON string into a JavaScript value or object.

**4. What happens to undefined values during JSON conversion?**

Undefined object properties are omitted. Undefined array elements are converted to `null`.

**5. What happens to NaN and Infinity?**

They are converted to `null` when using `JSON.stringify()`.

**6. Why does JSON.stringify() fail with circular references?**

JSON does not support circular references. It throws a `TypeError` when an object directly or indirectly refers back to itself.

**7. How are Date objects handled in JSON?**

Date objects are converted into ISO-formatted date strings during JSON serialization.

---

## Part D – Asynchronous JavaScript

**Concepts covered:**
- Event loop
- Callbacks
- Callback hell
- Promises
- `.then()` and `.catch()`
- Async and await
- Try and catch
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

**Theory Questions**

**1. What is the event loop?**

The event loop manages asynchronous operations in JavaScript. It coordinates the call stack and task queues so that callbacks and promise handlers execute at the appropriate time.

**2. What is a callback function?**

A callback is a function passed to another function and executed later.

**3. What is callback hell?**

Callback hell occurs when multiple nested callbacks make code difficult to read, understand, and maintain.

**4. What is a Promise?**

A Promise represents the eventual success or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.

**5. What is the difference between async and await?**

`async` declares a function that returns a Promise. `await` pauses execution inside that async function until a Promise settles.

**6. What is the purpose of try and catch?**

They are used to handle errors and prevent unhandled failures in asynchronous operations.

**7. What is the difference between Promise.all() and Promise.allSettled()?**

`Promise.all()` fulfills when all promises fulfill and rejects when any promise rejects. `Promise.allSettled()` waits for every promise to settle, regardless of success or failure.

**8. What is the difference between Promise.race() and Promise.any()?**

`Promise.race()` returns the result of the first settled promise. `Promise.any()` returns the first fulfilled promise and rejects only when all promises reject.

---

## Part E – Performance Optimization and DOM Events

**Concepts covered:**
- Debouncing
- Throttling
- Memoization
- Event bubbling
- Event propagation
- `stopPropagation()`
- Event delegation
- `event.target`

**Theory Questions**

**1. What is debouncing?**

Debouncing delays function execution until a specified amount of time has passed without another event occurring. It is useful for search inputs.

**2. What is throttling?**

Throttling limits how frequently a function can execute within a specified time interval. It is useful for scroll and resize events.

**3. What is memoization?**

Memoization stores the results of previous function calls so that repeated calls with the same inputs can reuse cached results.

**4. What is event bubbling?**

Event bubbling is the process in which an event starts from the target element and moves upward through its parent elements.

**5. What is stopPropagation()?**

`stopPropagation()` prevents an event from continuing through the DOM event propagation path.

**6. What is event delegation?**

Event delegation attaches a single event listener to a parent element to handle events from its child elements.

**7. What is event.target?**

`event.target` identifies the element where the event originally occurred.

---

## Part F – Final Integration Challenge

The final part combines concepts from all previous sections.

**Concepts used:**
- ES6 classes
- Object destructuring
- Array map, filter and reduce
- Set and Map
- Object.freeze()
- JSON.stringify()
- Promises
- Async and await
- Try and catch
- Template literals

**Expected Order Summary**

| Product | Quantity | Total |
|---|---:|---:|
| Laptop | 1 | ₹50,000 |
| Mouse | 2 | ₹2,000 |
| Monitor | 1 | ₹15,000 |
| Keyboard | 1 | ₹2,000 |
| **Order Total** | | **₹69,000** |

Unique product count: **4**

Final confirmation message:

`Hello Rahul, your order #501 has been confirmed. Total amount: ₹69000.`

---

## How to Run

### Run JavaScript Parts (A, B, C, D and F)

Open the terminal in the respective folder and execute:

```bash
node filename.js
```

For example:

```bash
cd part-a-objects-classes
node products.js
```

### Run Part E

Open `part-e-optimization-events/index.html` using the VS Code Live Server extension.

---

## Conclusion

This assignment provides practical experience with modern JavaScript features and demonstrates how they can be applied to common e-commerce operations such as product management, shopping cart calculations, order processing, and user interactions.