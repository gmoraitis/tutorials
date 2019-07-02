# What is Functional Programming ?
- In computer science, functional programming is a programming paradigm or pattern (a style of building the structure and elements of computer programs)
- Functional Programming treats computation as the evaluation of mathematical functions.
- Functional Programming avoids changing-state and mutable data.

### Mathematical Function or Pure Function
In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input combination is related to exactly one output.

In functional programming, these kinds of functions called pure function which only depends on the received input data to the function and does not alter the input data except the returned data.

Math.random() is not pure function because it always returns new value on each call.

Math.min(1,2) is an example of pure function which always returns same value with same set of inputs.

### Why Functional Programming
- Its pure function, provides confidence of not changing things outside of its scope.
- Its reduces the complexity, need not to worry about how it is doing it, focus will be only on what it is doing.
- Ease of testing, because it does not depend on state of the application and result verification also will be easy.
- It makes the code more readable.
Functional programming makes code easier to understand.

### Function Chaining
It’s a mechanism for invoking multiple method calls, each method returns an object, allowing the calls to be chained together in a single statement without requiring variables to store the intermediate results.

### Libraries to support FP
There are libraries which provide utility functions to make code more declarative.

- RamdaJS
- UnderscoreJS
- lodash

### Side Effects
Function or expression is said to have a side effect if it modifies some state of the program, which is outside of its own scope or has an observable interaction with its calling functions or the outside program besides returning a value.Side effects are not always bad but we should be careful on when to have it.

### Immutability
Immutability is important to make sure one function does not change the original data rather than should return new copy of the data after manipulation.

Like if Array and Objects are passing around multiple functions and we are not maintaining immutability then functions might not get the original copy of the array and object.

It is really hard to debug if something goes wrong in case of mutable object and array.

Mutability is not bad but it should be when to have it.

### Immutable Libraries
JavaScript by-default does not provide anything to make the object and array Immutable. There are libraries which can help us to achieve the immutability.

- Seamless-immutable
- Immutable JS


The main aspects of Functional Programming is Pure and smaller Functions, Immutability and less Side Effects.

        



