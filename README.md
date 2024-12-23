# Type Error in TypeScript: Array vs. String Argument

This repository demonstrates a common type error in TypeScript where an array is passed as an argument to a function expecting a string. The error is explained and a solution is provided.

## Bug

The `bug.ts` file contains a function `greeter` that takes a string as an argument and returns a greeting.  However, the code attempts to pass an array of strings to this function, resulting in a type error.

## Solution

The `bugSolution.ts` file shows two ways to fix this:

1. **Modify the function:** Change the function signature to accept an array of strings.
2. **Modify the argument:** Pass a single string to the function.   Choose the approach that best fits your application logic.

This example highlights the importance of type safety in TypeScript and how careful attention to function signatures can prevent runtime errors.