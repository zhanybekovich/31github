/*
  Execution context

  When you run any JS, a special environment is created to handle the transformation & execution of code.
  This is called execution context. It contains the currently running code and everything that aids in its execution.

  There is a global execution context as well as a function execution context for every function invoked.

  Execution Context Phases

  1. Memory creation phase
   - Create the global object (browser = window or NodeJs = global)
   - Create the this object and bind it to the global object
   - Setup memory heap for storing vars and function references
   - Store functions and vars in global execution context and set to 'undefined

  2. Execution phase
   - Execute code line by line
   - Create a new execution context for each function call

*/
