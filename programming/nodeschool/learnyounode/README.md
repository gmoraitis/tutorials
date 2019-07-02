# What is Node ?
- Node.js is a JavaScript runtime environment and includes everything you need to execute a program written in JavaScript.
- Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.
- Now you can do much more with JavaScript than just making websites interactive.JavaScript now has the capability to do things that other scripting languages like Python can do.
- Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
## Why Node.js?

Here’s a formal definition as given on the official Node.js [website](https://nodejs.org/en/) 

- Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- Node.js’ package ecosystem, [npm](https://www.npmjs.com/), is the largest ecosystem of open source libraries in the world.

## Blocking vs Non-Blocking
- Blocking methods execute synchronously and non-blocking methods execute asynchronously.
- Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

- In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking. Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. Native modules may also have blocking methods.

- All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.
- JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work. Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.

- As an example, let's consider a case where each request to a web server takes 50ms to complete and 45ms of that 50ms is database I/O that can be done asynchronously. Choosing non-blocking asynchronous operations frees up that 45ms per request to handle other requests. This is a significant difference in capacity just by choosing to use non-blocking methods instead of blocking methods.

- The event loop is different than models in many other languages where additional threads may be created to handle concurrent work.

## What is the [Event Loop?](https://nodejs.org/de/docs/guides/event-loop-timers-and-nexttick/)
- The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

- Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. 

## Npm
- These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.

#### Require
Require does three things:

- It loads modules that come bundled with Node.js like file system and HTTP from the Node.js API .
- It loads third-party libraries like Express and Mongoose that you install from npm.
- It lets you require your own files and modularize the project.
- Require is a function, and it accepts a parameter “path” and returns module.exports.

## Node Modules
- A Node module is a reusable block of code whose existence does not accidentally impact other code.

- You can write your own modules and use it in various application. Node.js has a set of built-in modules which you can use without any further installation.

## V8 turbo-charges JavaScript by leveraging C++
-V8 is an open source runtime engine written in C++.

- JavaScript -> V8(C++) -> Machine Code

- V8 implements a script called ECMAScript as specified in ECMA-262. ECMAScript was created by Ecma International to standardize JavaScript.

- V8 can run standalone or can be embedded into any C++ application. It has hooks that allow you to write your own C++ code that you can make available to JavaScript.

- This essentially lets you add features to JavaScript by embedding V8 into your C++ code so that your C++ code understands more than what the ECMAScript standard otherwise specifies.

## Events
Something that has happened in our app that we can respond to. There are two types of events in Node.

- System Events: C++ core from a library called libuv. (For example, finished reading a file).
- Custom Events: JavaScript core.

## Writing Hello World in Node.js
We have to do this, don’t we?

- Make a file program.js and add the following to it.

        console.log("Hello World!");
- Open your node terminal, change the directory to the folder where the file is saved and run node program.js.








